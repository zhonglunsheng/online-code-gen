package io.github.zhonglunsheng.core.cache;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.ArrayUtil;
import cn.hutool.core.util.StrUtil;
import io.github.zhonglunsheng.core.constants.GenConstants;
import io.github.zhonglunsheng.domain.GenTableColumn;
import io.github.zhonglunsheng.domain.vo.ColumnVo;
import io.github.zhonglunsheng.service.GenTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class MemoryCache implements ICache {

    @Autowired
    private GenTableService genTableService;

    public static String getDbType(String columnType) {
        if (StrUtil.indexOf(columnType, '(') > 0) {
            return StrUtil.subBefore(columnType, "(", true);
        } else {
            return columnType;
        }
    }

    public static Integer getColumnLength(String columnType) {
        if (StrUtil.indexOf(columnType, '(') > 0) {
            String length = StrUtil.subBetween(columnType, "(", ")");
            return Integer.valueOf(length);
        } else {
            return 0;
        }
    }

    @Override
    @Cacheable(value = "globalCache", key = "#tableName")
    public List<ColumnVo> getColumnVo(String tableName) {
        // 查询数据库表所有字段信息
        List<GenTableColumn> genTableColumns = genTableService.selectDbTableColumnsByName(tableName);
        // 初始化设置值=
        return genTableColumns.stream().map(this::initColumn).collect(Collectors.toList());
    }

    private ColumnVo initColumn(GenTableColumn genTableColumn) {
        ColumnVo column = BeanUtil.copyProperties(genTableColumn, ColumnVo.class);

        // 获取类型 varchar(32) -> varchar
        String dataType = getDbType(genTableColumn.getColumnType());

        // 设置java字段名
        column.setJavaField(StrUtil.toCamelCase(genTableColumn.getColumnName()));

        // 设置默认类型
        column.setJavaType(GenConstants.TYPE_STRING);


        if (ArrayUtil.contains(GenConstants.COLUMNTYPE_STR, dataType) || ArrayUtil.contains(GenConstants.COLUMNTYPE_TEXT, dataType)) {
            // 字符串长度超过500设置为文本域
            Integer columnLength = getColumnLength(column.getColumnType());
            String htmlType = columnLength >= 500 || ArrayUtil.contains(GenConstants.COLUMNTYPE_TEXT, dataType) ? GenConstants.HTML_TEXTAREA : GenConstants.HTML_INPUT;
            column.setHtmlType(htmlType);
        } else if (ArrayUtil.contains(GenConstants.COLUMNTYPE_TIME, dataType)) {
            column.setJavaType(GenConstants.TYPE_DATE);
            column.setHtmlType(GenConstants.HTML_DATETIME);
        } else if (ArrayUtil.contains(GenConstants.COLUMNTYPE_NUMBER, dataType)) {
            column.setHtmlType(GenConstants.HTML_INPUT);

            // 如果是浮点型 统一用BigDecimal
            String[] str = ArrayUtil.toArray(StrUtil.split(StrUtil.subBetween(column.getColumnType(), "(", ")"), ","), String.class);
            if (str != null && str.length == 2 && Integer.parseInt(str[1]) > 0) {
                column.setJavaType(GenConstants.TYPE_BIGDECIMAL);
            }
            // 如果是整形
            else if (str != null && str.length == 1 && Integer.parseInt(str[0]) <= 10) {
                column.setJavaType(GenConstants.TYPE_INTEGER);
            }
            // 长整形
            else {
                column.setJavaType(GenConstants.TYPE_LONG);
            }
        }

        return column;
    }

    @Override
    @CachePut(value = "globalCache", key = "#tableName")
    public List<ColumnVo> updateColumns(String tableName, List<ColumnVo> columnVos) {
        return columnVos;
    }
}
