package io.github.zhonglunsheng.core;

import lombok.Data;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

@Data
@Configuration
@ComponentScan(basePackages = {"io.github.zhonglunsheng"}, excludeFilters = {@ComponentScan.Filter(type = FilterType.ANNOTATION, classes = {SpringBootApplication.class})})
@ConfigurationProperties(prefix = "code.gen")
public class CodeGenConfiguration {

    private String masterUrl;
    private String masterUserName;
    private String masterPassword;

    private String slaveUrl;
    private String slaveUserName;
    private String slavePassword;
}
