package io.github.zhonglunsheng.service.impl;

import io.github.zhonglunsheng.BaseTest;
import io.github.zhonglunsheng.domain.DataSourceBo;
import io.github.zhonglunsheng.service.DataSourceService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.annotation.Resource;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;

class DataSourceServiceImplTest extends BaseTest {

    @Autowired
    private DataSourceService dataSourceService;

    @Test
    void testSwitchDataSource() {
        // Setup
        final DataSourceBo dataSourceBo = new DataSourceBo();

        dataSourceBo.setUrl("jdbc:mysql://localhost:3306/lipop?serverTimezone=UTC");
        dataSourceBo.setUserName("root");
        dataSourceBo.setPassword("root");

        // Run the test
        final boolean result = dataSourceService.switchDataSource(dataSourceBo);

        // Verify the results
        assertThat(result).isTrue();

    }
}
