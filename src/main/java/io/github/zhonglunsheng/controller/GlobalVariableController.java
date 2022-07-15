package io.github.zhonglunsheng.controller;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSONObject;
import io.github.zhonglunsheng.common.ResponseData;
import io.github.zhonglunsheng.core.cache.ICache;
import io.github.zhonglunsheng.domain.DataSourceBo;
import io.github.zhonglunsheng.domain.SysGlobal;
import io.github.zhonglunsheng.service.DataSourceService;
import io.github.zhonglunsheng.service.SysGlobalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/codegen")
public class GlobalVariableController {

    @Autowired
    private SysGlobalService sysGlobalService;

    @Autowired
    private DataSourceService dataSourceService;

    @Autowired
    private ICache iCache;

    @GetMapping("/global-variable")
    public ResponseData getGlobalVariable() {
        SysGlobal sysGlobal = sysGlobalService.getOne();
        if (sysGlobal == null || StrUtil.isBlank(sysGlobal.getGlobalJson())) {
            return ResponseData.createErrorResponse("全局变量为空");
        }

        return ResponseData.createSuccessResponse(sysGlobal);
    }

    @PutMapping("/global-variable")
    public ResponseData updateGlobalVariable(@RequestBody SysGlobal sysGlobal) {
        if (StrUtil.isNotBlank(sysGlobal.getGlobalJson())) {
            try {
                JSONObject.parseObject(sysGlobal.getGlobalJson());
            }catch (Exception e) {
                return ResponseData.createErrorResponse("JSON格式异常");
            }
        }
        sysGlobal.setUpdateTime(new Date());

        // 判断是否需要切换数据源
        JSONObject jsonObject = JSONObject.parseObject(sysGlobal.getGlobalJson());
        if (jsonObject.containsKey("datasource")) {
            JSONObject dataSource = jsonObject.getJSONObject("datasource");
            dataSourceService.switchDataSource(BeanUtil.toBean(dataSource, DataSourceBo.class));
            iCache.clearCache();
        }
        return ResponseData.createSuccessResponse(sysGlobalService.updateById(sysGlobal));
    }
}
