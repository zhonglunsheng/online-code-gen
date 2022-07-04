package com.lipop.code.service;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.lipop.code.domain.GenTable;
import com.lipop.code.domain.GenTableColumn;

import java.util.List;

@DS("master_2")
public interface GenTableService {
    List<GenTableColumn> selectDbTableColumnsByName(String tableName);

    List<GenTable> selectTableByName();
}
