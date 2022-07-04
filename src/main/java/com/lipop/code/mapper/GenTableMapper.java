package com.lipop.code.mapper;

import com.lipop.code.domain.GenTable;
import com.lipop.code.domain.GenTableColumn;

import java.util.List;

/**
 * 业务字段 数据层
 *
 * @author ruoyi
 */
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
