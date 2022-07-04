package com.lipop.code.core.cache;

import com.lipop.code.domain.vo.ColumnVo;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;

import java.util.List;

public interface ICache {


    @Cacheable(value = "globalCache", key = "#tableName")
    List<ColumnVo> getColumnVo(String tableName);

    @CachePut(value = "globalCache", key = "#tableName")
    List<ColumnVo> updateColumns(String tableName, List<ColumnVo> columnVos);
}