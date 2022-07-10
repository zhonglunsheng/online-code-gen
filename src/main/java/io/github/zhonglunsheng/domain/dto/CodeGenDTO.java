package io.github.zhonglunsheng.domain.dto;

import lombok.Data;

import java.util.Map;

@Data
public class CodeGenDTO {

    private String content;

    private Map<String, Object> data;

    /**
     * 模板组名称
     */
    private String groupName;

    private String tableName;
}
