package io.github.zhonglunsheng.service.impl;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import io.github.zhonglunsheng.domain.GenTable;
import io.github.zhonglunsheng.domain.GenTableColumn;
import io.github.zhonglunsheng.mapper.GenTableMapper;
import io.github.zhonglunsheng.service.GenTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenTableServiceImpl implements GenTableService {

    @Autowired
    private GenTableMapper genTableMapper;

    @Override
    public List<GenTableColumn> selectDbTableColumnsByName(String tableName) {
        return genTableMapper.selectDbTableColumnsByName(tableName);
    }


    @Override
    public List<GenTable> selectTableByName() {
        return genTableMapper.selectTable();
    }

    @Override
    public GenTable selectTableByName(String tableName) {
        List<GenTable> collect = genTableMapper.selectTable().stream().filter(item -> item.getTableName().equals(tableName)).collect(Collectors.toList());
        if (CollUtil.isNotEmpty(collect)) {

            GenTable genTable = collect.get(0);
            // 转换Java类命名模式
            genTable.setJavaClassName(StrUtil.upperFirst(
                    StrUtil.toCamelCase(genTable.getTableName())
            ));

            return genTable;
        }
        return null;
    }



}
