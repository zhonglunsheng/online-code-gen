package io.github.zhonglunsheng.mapper.impl;

import cn.hutool.core.bean.BeanUtil;
import io.github.zhonglunsheng.domain.GenTable;
import io.github.zhonglunsheng.domain.GenTableColumn;
import io.github.zhonglunsheng.mapper.GenTableMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class GenTableMapperImpl implements GenTableMapper {

    @Resource
    @Qualifier("saveJdbcTemplate")
    private JdbcTemplate saveJdbcTemplate;

    @Override
    public List<GenTableColumn> selectDbTableColumnsByName(String tableName) {
        List<Map<String, Object>> maps = saveJdbcTemplate.queryForList(" select column_name, (case when (is_nullable = 'no' && column_key != 'PRI') then '1' else null end) as is_required, (case when column_key = 'PRI' then '1' else '0' end) as is_pk, ordinal_position as sort, column_comment, (case when extra = 'auto_increment' then '1' else '0' end) as is_increment, column_type\n" +
                "        from information_schema.columns where table_schema = (select database()) and table_name = (?)\n" +
                "        order by ordinal_position", tableName);

        return maps.stream().map(item -> BeanUtil.toBean(item, GenTableColumn.class)).collect(Collectors.toList());
    }

    @Override
    public List<GenTable> selectTable() {
        List<Map<String, Object>> maps = saveJdbcTemplate.queryForList(" select table_name, table_comment, create_time, update_time from information_schema.tables\n" +
                "        where table_schema = (select database())");
        return maps.stream().map(item -> BeanUtil.toBean(item, GenTable.class)).collect(Collectors.toList());
    }
}
