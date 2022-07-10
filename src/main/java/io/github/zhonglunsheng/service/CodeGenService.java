package io.github.zhonglunsheng.service;

import io.github.zhonglunsheng.domain.dto.CodeGenDTO;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

public interface CodeGenService {

    String codeGen(CodeGenDTO codeGenDTO);

    List<String> localCodeGen (CodeGenDTO codeGenDTO);

    String downloadCodeGen(CodeGenDTO codeGenDTO, HttpServletResponse response);
}
