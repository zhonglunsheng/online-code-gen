package com.lipop.code.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.lipop.code.common.ResponseData;
import com.lipop.code.domain.SysTpl;
import com.lipop.code.service.SysTplService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tpl")
public class TplController {

    @Autowired
    private SysTplService sysTplService;

    @PostMapping("/list")
    public ResponseData list (@RequestBody SysTpl sysTpl) {
        QueryWrapper<SysTpl> queryWrapper =  new QueryWrapper<>();
        if (StrUtil.isNotBlank(sysTpl.getTplName())) {
            queryWrapper.like("tpl_name", sysTpl.getTplName());
        }
        return ResponseData.createSuccessResponse(sysTplService.list(queryWrapper));
    }


    @GetMapping("/group/list")
    public ResponseData queryGroupName () {
        List<SysTpl> queryList = sysTplService.query().groupBy("group_name").select("group_name").list();
        return ResponseData.createSuccessResponse(queryList.stream().map(SysTpl::getGroupName));
    }


    @PostMapping("/update")
    public ResponseData saveOrUpdateTpl(@RequestBody SysTpl sysTpl) {
        return ResponseData.createSuccessResponse(sysTplService.saveOrUpdate(sysTpl));
    }


    @GetMapping("/remove")
    public ResponseData remove(String id) {
        return ResponseData.createSuccessResponse(sysTplService.removeById(id));
    }
}