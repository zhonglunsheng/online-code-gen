package io.github.zhonglunsheng.mapper;

import io.github.zhonglunsheng.domain.GenTable;
import io.github.zhonglunsheng.domain.GenTableColumn;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface GenTableMapper {
    /**
     * 根据表名称查询列信息
     *
     * @param tableName 表名称
     * @return 列信息
     */
    List<GenTableColumn> selectDbTableColumnsByName(String tableName);


    List<GenTable> selectTable();

}
