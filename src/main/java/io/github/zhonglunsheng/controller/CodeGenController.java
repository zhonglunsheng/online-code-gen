package io.github.zhonglunsheng.controller;

import cn.hutool.core.collection.CollUtil;
import io.github.zhonglunsheng.common.ResponseData;
import io.github.zhonglunsheng.domain.GenTableColumn;
import io.github.zhonglunsheng.domain.dto.CodeGenDTO;
import io.github.zhonglunsheng.service.CodeGenService;
import org.assertj.core.util.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/code")
public class CodeGenController {

    @Autowired
    private CodeGenService codeGenService;

    @PostMapping("/gen")
    public ResponseData onlineCodeGen (@RequestBody CodeGenDTO codeGenDTO) {
        return ResponseData.createSuccessResponse(codeGenService.codeGen(codeGenDTO));
    }


    @PostMapping("/local-code-gen")
    public ResponseData localCodeGen (@RequestBody CodeGenDTO codeGenDTO) {
        List<String> content = codeGenService.localCodeGen(codeGenDTO);
        return ResponseData.createSuccessResponse(CollUtil.join(content, "\n"));
    }

    @PostMapping("/download-code-gen")
    public ResponseData localCodeGen (@RequestBody CodeGenDTO codeGenDTO, HttpServletResponse response) {
        return ResponseData.createSuccessResponse(codeGenService.downloadCodeGen(codeGenDTO, response));
    }

}
