package io.github.zhonglunsheng.controller;

import io.github.zhonglunsheng.service.DataSourceService;
import io.github.zhonglunsheng.common.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/codegen")
public class DataSourceController {


    @Autowired
    private DataSourceService dataSourceService;
    /**
     * 切换数据源
     * @return
     */
    public ResponseData switchDataSource () {
        return ResponseData.createSuccessResponse(dataSourceService.switchDataSource(null));
    }
}
