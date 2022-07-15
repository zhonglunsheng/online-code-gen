package io.github.zhonglunsheng.service.impl;

import com.mysql.cj.jdbc.MysqlDataSource;
import io.github.zhonglunsheng.domain.DataSourceBo;
import io.github.zhonglunsheng.service.DataSourceService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class DataSourceServiceImpl implements DataSourceService {

    @Resource
    @Qualifier("saveJdbcTemplate")
    private JdbcTemplate saveJdbcTemplate;

    @Override
    public boolean switchDataSource(DataSourceBo dataSourceBo) {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setURL(dataSourceBo.getUrl());
        dataSource.setUser(dataSourceBo.getUserName());
        dataSource.setPassword(dataSourceBo.getPassword());
        saveJdbcTemplate.setDataSource(dataSource);
        saveJdbcTemplate.afterPropertiesSet();
        return true;
    }
}
