package com.lipop.code.service.impl;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.ArrayUtil;
import cn.hutool.core.util.CharsetUtil;
import cn.hutool.core.util.ZipUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.lipop.code.core.template.TemplateService;
import com.lipop.code.domain.SysTpl;
import com.lipop.code.domain.dto.CodeGenDTO;
import com.lipop.code.service.CodeGenService;
import com.lipop.code.service.SysTplService;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.util.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@Slf4j
public class CodeGenServiceImpl implements CodeGenService {
    @Autowired
    private TemplateService templateService;

    @Autowired
    private SysTplService sysTplService;

    @Override
    public String codeGen(String tplContent, Map<String, Object> data) {
        return templateService.generateTemplate(tplContent, data);
    }

    @Override
    public List<String> localCodeGen(CodeGenDTO codeGenDTO) {
        // 获取模板组所有模板
        List<SysTpl> tplList = sysTplService.list(new LambdaQueryWrapper<SysTpl>().eq(SysTpl::getGroupName, codeGenDTO.getGroupName()));
        List<String> result = Lists.newArrayList();

        List<SysTpl> needGenContentSysTpl = getNeedGenContentSysTpl(codeGenDTO.getGroupName());

        if (CollUtil.isEmpty(needGenContentSysTpl)) {
            throw new RuntimeException("当前启用模板为空！！！");
        }

        for (SysTpl tpl :
                needGenContentSysTpl) {
            // 获取模板内容，生成模板
            String generateContent = templateService.generateTemplate(tpl.getContent(), codeGenDTO.getData());
            // 创建目录
            String filePath = tpl.getFilePath();
            String fileName = tpl.getFileName();
            // 创建文件
            if (!filePath.endsWith("/")) {
                filePath += "/";
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
        List<SysTpl> result = Lists.newArrayList();
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

    @Override
    public String downloadCodeGen(CodeGenDTO codeGenDTO, HttpServletResponse response) {
        // 打包生成后的模板
        List<SysTpl> needGenContentSysTpl = getNeedGenContentSysTpl(codeGenDTO.getGroupName());
        if (CollUtil.isEmpty(needGenContentSysTpl)) {
            throw new RuntimeException("当前启用模板为空！！！");
        }

        List<File> downloadFiles = Lists.newArrayList();
        String filePath = "META-INF/resources/temp/" + UUID.randomUUID() + "/";

        for (SysTpl tpl :
                needGenContentSysTpl) {
            // 获取模板内容，生成模板
            String generateContent = templateService.generateTemplate(tpl.getContent(), codeGenDTO.getData());
            // 创建目录
            String fileName = tpl.getFileName();
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
