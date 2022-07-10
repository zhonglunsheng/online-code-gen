package io.github.zhonglunsheng.service.impl;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.ArrayUtil;
import cn.hutool.core.util.CharsetUtil;
import cn.hutool.core.util.ZipUtil;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.github.zhonglunsheng.core.template.TemplateService;
import io.github.zhonglunsheng.domain.GenTable;
import io.github.zhonglunsheng.domain.SysGlobal;
import io.github.zhonglunsheng.domain.SysTpl;
import io.github.zhonglunsheng.domain.dto.CodeGenDTO;
import io.github.zhonglunsheng.service.CodeGenService;
import io.github.zhonglunsheng.service.GenTableService;
import io.github.zhonglunsheng.service.SysGlobalService;
import io.github.zhonglunsheng.service.SysTplService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.util.*;

@Service
@Slf4j
public class CodeGenServiceImpl implements CodeGenService {
    @Autowired
    private TemplateService templateService;

    @Autowired
    private SysTplService sysTplService;

    @Autowired
    private SysGlobalService sysGlobalService;

    @Autowired
    private GenTableService genTableService;

    @Override
    public String codeGen(String tplContent, Map<String, Object> data) {
        return templateService.generateTemplate(tplContent, data);
    }

    @Override
    public List<String> localCodeGen(CodeGenDTO codeGenDTO) {
        // 获取模板组所有模板
        List<SysTpl> tplList = sysTplService.list(new LambdaQueryWrapper<SysTpl>().eq(SysTpl::getGroupName, codeGenDTO.getGroupName()));
        List<String> result = new ArrayList<>();

        List<SysTpl> needGenContentSysTpl = getNeedGenContentSysTpl(codeGenDTO.getGroupName());

        if (CollUtil.isEmpty(needGenContentSysTpl)) {
            throw new RuntimeException("当前启用模板为空！！！");
        }

        Map<String, Object> allVariable = getAllVariable(codeGenDTO);

        for (SysTpl tpl :
                needGenContentSysTpl) {
            // 获取模板内容，生成模板
            String generateContent = templateService.generateTemplate(tpl.getContent(),allVariable);
            // 文件路径和文件名支持从变量获取
            String filePath = templateService.generateTemplate(tpl.getFilePath(), allVariable);
            String fileName = templateService.generateTemplate(tpl.getFileName(), allVariable);
            // 创建文件
            if (!filePath.endsWith("\\")) {
                filePath += "\\";
            }
            boolean existFile = FileUtil.exist(filePath + fileName);
            // 删除
            if (existFile) {
                FileUtil.del("filePath + fileName");
            }

            File newFile = FileUtil.touch(filePath + fileName);
            FileUtil.writeString( generateContent, newFile, CharsetUtil.CHARSET_UTF_8);
            log.info("generate template file {} success, current path {}", fileName, filePath);
            result.add(String.format("代码生成成功，当前路径：%s", filePath + fileName));
        }

        return result;
    }

    private List<SysTpl> getNeedGenContentSysTpl (String groupName) {
        // 获取模板组所有模板
        List<SysTpl> tplList = sysTplService.list(new LambdaQueryWrapper<SysTpl>().eq(SysTpl::getGroupName, groupName));
        List<SysTpl> result = new ArrayList<>();
        for (SysTpl tpl :
                tplList) {
            // 1=启用  0=停止
            if ("0".equals(tpl.getStatus())) {
                continue;
            }

            result.add(tpl);
        }
        return result;
    }

    private Map<String, Object> getAllVariable(CodeGenDTO codeGenDTO) {
        Map<String, Object> result = new HashMap<>();
        // 获取表名相关信息
        String tableName = codeGenDTO.getTableName();
        GenTable genTable = genTableService.selectTableByName(tableName);
        result.put("table", genTable);
        // 获取全局变量相关信息
        SysGlobal sysGlobal = sysGlobalService.getOne(new QueryWrapper<>());
        result.putAll(JSONObject.parseObject(sysGlobal.getGlobalJson(), Map.class));
        // 获取列字段相关信息
        result.putAll(codeGenDTO.getData());
        return result;
    }

    @Override
    public String downloadCodeGen(CodeGenDTO codeGenDTO, HttpServletResponse response) {
        // 打包生成后的模板
        List<SysTpl> needGenContentSysTpl = getNeedGenContentSysTpl(codeGenDTO.getGroupName());
        if (CollUtil.isEmpty(needGenContentSysTpl)) {
            throw new RuntimeException("当前启用模板为空！！！");
        }

        List<File> downloadFiles = new ArrayList<>();
        String filePath = "META-INF/resources/temp/" + UUID.randomUUID() + "/";
        Map<String, Object> allVariable = getAllVariable(codeGenDTO);

        for (SysTpl tpl :
                needGenContentSysTpl) {
            // 获取模板内容，生成模板
            String generateContent = templateService.generateTemplate(tpl.getContent(), codeGenDTO.getData());
            // 文件名支持从变量获取
            String fileName = templateService.generateTemplate(tpl.getFileName(), allVariable);
            // 创建文件
            boolean existFile = FileUtil.exist(filePath + fileName);
            // 删除
            if (existFile) {
                FileUtil.del(filePath + fileName);
            }

            File newFile = FileUtil.touch(filePath + fileName);
            FileUtil.writeString( generateContent, newFile, CharsetUtil.CHARSET_UTF_8);
            log.info("generate template file {} success, current path {}", fileName, filePath + fileName);
            downloadFiles.add(FileUtil.file(filePath + fileName));
        }



        String downloadZipName = UUID.randomUUID() + ".zip";
        try {
            ZipUtil.zip(FileUtil.file("META-INF/resources/temp/" + downloadZipName), false,
                    ArrayUtil.toArray(downloadFiles, File.class)
            );

        }catch (Exception e) {
            throw new RuntimeException("生成文件模板打包异常" + e.getMessage());
        }

        return downloadZipName;
    }
}
