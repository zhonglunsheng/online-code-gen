package com.lipop.code.service.impl;

import com.lipop.code.domain.GenTable;
import com.lipop.code.domain.GenTableColumn;
import com.lipop.code.mapper.GenTableMapper;
import com.lipop.code.service.GenTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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



}
