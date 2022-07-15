package io.github.zhonglunsheng.core;

import com.mysql.cj.jdbc.MysqlDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class CodeGenJdbcTemplateConfig {

    @Bean
    @Primary
    @Qualifier("masterJdbcTemplate")
    public JdbcTemplate jdbcTemplate (CodeGenConfiguration codeGenConfiguration) {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setURL(codeGenConfiguration.getMasterUrl());
        dataSource.setUser(codeGenConfiguration.getMasterUserName());
        dataSource.setPassword(codeGenConfiguration.getMasterPassword());
        return new JdbcTemplate(dataSource);
    }


    @Bean
    @Qualifier("saveJdbcTemplate")
    public JdbcTemplate saveJdbcTemplate (CodeGenConfiguration codeGenConfiguration) {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setURL(codeGenConfiguration.getSlaveUrl());
        dataSource.setUser(codeGenConfiguration.getSlaveUserName());
        dataSource.setPassword(codeGenConfiguration.getSlavePassword());
        return new JdbcTemplate(dataSource);
    }

}
