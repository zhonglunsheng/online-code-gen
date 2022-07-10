package io.github.zhonglunsheng.controller;

import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.github.zhonglunsheng.common.ResponseData;
import io.github.zhonglunsheng.domain.SysGlobal;
import io.github.zhonglunsheng.service.SysGlobalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class GlobalVariableController {

    @Autowired
    private SysGlobalService sysGlobalService;

    @GetMapping("/global-variable")
    public ResponseData getGlobalVariable() {
        SysGlobal sysGlobal = sysGlobalService.getOne(new QueryWrapper<>());
        if (sysGlobal == null || StrUtil.isBlank(sysGlobal.getGlobalJson())) {
            return ResponseData.createErrorResponse("全局变量为空");
        }

        return ResponseData.createSuccessResponse(sysGlobal);
    }

    @PutMapping("/global-variable")
    public ResponseData updateGlobalVariable(@RequestBody SysGlobal sysGlobal) {
        if (StrUtil.isNotBlank(sysGlobal.getGlobalJson())) {
            try {
                JSONObject.isValid(sysGlobal.getGlobalJson());
            }catch (Exception e) {
                return ResponseData.createErrorResponse("JSON格式异常");
            }
        }
        sysGlobal.setUpdateTime(new Date());
        return ResponseData.createSuccessResponse(sysGlobalService.updateById(sysGlobal));
    }
}
