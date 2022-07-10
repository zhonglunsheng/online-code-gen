package io.github.zhonglunsheng.mapper;

import io.github.zhonglunsheng.domain.GenTable;
import io.github.zhonglunsheng.domain.GenTableColumn;

import java.util.List;


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
