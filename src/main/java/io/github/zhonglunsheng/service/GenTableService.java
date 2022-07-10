package io.github.zhonglunsheng.service;

import com.baomidou.dynamic.datasource.annotation.DS;
import io.github.zhonglunsheng.domain.GenTable;
import io.github.zhonglunsheng.domain.GenTableColumn;

import java.util.List;

@DS("master_2")
public interface GenTableService {
    List<GenTableColumn> selectDbTableColumnsByName(String tableName);

    List<GenTable> selectTableByName();

    GenTable selectTableByName(String tableName);
}
