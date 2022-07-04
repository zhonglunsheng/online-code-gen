package com.lipop.code.domain;


import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class GenTableColumn {
    private static final long serialVersionUID = 1L;

    /**
     * 列名称
     */
    private String columnName;

    /**
     * 列描述
     */
    private String columnComment;

    /**
     * 列类型
     */
    private String columnType;


    /**
     * 是否主键（1是）
     */
    private String isPk;

    /**
     * 是否自增（1是）
     */
    private String isIncrement;

    /**
     * 是否必填（1是）
     */
    private String isRequired;

    /**
     * 排序
     */
    private Integer sort;

}