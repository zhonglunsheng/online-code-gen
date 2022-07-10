package io.github.zhonglunsheng.controller;

import com.baomidou.dynamic.datasource.DynamicRoutingDataSource;
import com.baomidou.dynamic.datasource.ds.ItemDataSource;
import com.baomidou.dynamic.datasource.provider.DynamicDataSourceProvider;
import com.baomidou.dynamic.datasource.provider.YmlDynamicDataSourceProvider;
import com.baomidou.dynamic.datasource.spring.boot.autoconfigure.DataSourceProperty;
import com.baomidou.dynamic.datasource.spring.boot.autoconfigure.DynamicDataSourceProperties;
import com.zaxxer.hikari.HikariDataSource;
import io.github.zhonglunsheng.common.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.util.List;
import java.util.Map;

@RestController
public class DataSourceManageController {

    @Autowired
    private DynamicRoutingDataSource dataSource;

    @Autowired
    private List<DynamicDataSourceProvider> providers;


    @Autowired
    private DynamicDataSourceProvider dynamicDataSourceProvider;

    @Autowired
    private DynamicDataSourceProperties dynamicDataSourceProperties;


    @GetMapping("/datasource")
    public ResponseData changeDataSource () {
        // 重新设置数据源属性

        System.out.println("providers = " + providers);
        System.out.println(dynamicDataSourceProvider);
        System.out.println(dynamicDataSourceProperties);

        DataSourceProperty master_2 = dynamicDataSourceProperties.getDatasource().get("master_2");

        master_2.setUrl("jdbc:mysql://localhost:3306/lipop?serverTimezone=UTC");

        dynamicDataSourceProvider = new YmlDynamicDataSourceProvider(dynamicDataSourceProperties.getDatasource());
        try {
            dataSource.afterPropertiesSet();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseData.createSuccessResponse(dataSource);

    }
}
