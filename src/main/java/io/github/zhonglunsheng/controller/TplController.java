package io.github.zhonglunsheng.controller;

import io.github.zhonglunsheng.common.ResponseData;
import io.github.zhonglunsheng.domain.SysTpl;
import io.github.zhonglunsheng.service.SysTplService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/codegen/tpl")
public class TplController {

    @Autowired
    private SysTplService sysTplService;

    @PostMapping("/list")
    public ResponseData list(@RequestBody SysTpl sysTpl) {
        return ResponseData.createSuccessResponse(sysTplService.query(sysTpl));
    }


    @GetMapping("/group/list")
    public ResponseData queryGroupName() {
        List<SysTpl> queryList = sysTplService.groupByTplGroupName();
        return ResponseData.createSuccessResponse(queryList.stream().map(SysTpl::getGroupName));
    }


    @PostMapping("/update")
    public ResponseData saveOrUpdateTpl(@RequestBody SysTpl sysTpl) {
        sysTpl.setUpdateTime(new Date());
        return ResponseData.createSuccessResponse(sysTplService.saveOrUpdate(sysTpl));
    }


    @GetMapping("/remove")
    public ResponseData remove(String id) {
        return ResponseData.createSuccessResponse(sysTplService.removeById(id));
    }
}
