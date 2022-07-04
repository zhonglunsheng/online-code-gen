package com.lipop.code.domain;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class GenTable {
    /**
     * 表名称
     */
    private String tableName;

    /**
     * 表描述
     */
    private String tableComment;

    private String createTime;

    private String updateTime;
}