package io.github.zhonglunsheng.service;

import io.github.zhonglunsheng.domain.DataSourceBo;
import org.springframework.stereotype.Service;

public interface DataSourceService {

    boolean switchDataSource(DataSourceBo dataSourceBo);
}
