package com.lipop.code.service;

import com.lipop.code.domain.GenTable;
import com.lipop.code.domain.GenTableColumn;

import java.util.List;

public interface GenTableService {
    List<GenTableColumn> selectDbTableColumnsByName(String tableName);

    List<GenTable> selectTableByName();
}
