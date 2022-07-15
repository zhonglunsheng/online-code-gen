package io.github.zhonglunsheng.service;

import io.github.zhonglunsheng.domain.GenTable;
import io.github.zhonglunsheng.domain.GenTableColumn;

import java.util.List;

public interface GenTableService {
    List<GenTableColumn> selectDbTableColumnsByName(String tableName);

    List<GenTable> selectTableByName();

    GenTable selectTableByName(String tableName);
}
