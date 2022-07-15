package io.github.zhonglunsheng.core.cache;

import io.github.zhonglunsheng.domain.vo.ColumnVo;
import org.springframework.cache.annotation.CacheEvict;

import java.util.List;

public interface ICache {


    List<ColumnVo> getColumnVo(String tableName);

    List<ColumnVo> updateColumns(String tableName, List<ColumnVo> columnVos);

    boolean clearCache();
}
