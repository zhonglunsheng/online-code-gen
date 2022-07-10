package io.github.zhonglunsheng.domain.vo;

import lombok.Data;
import lombok.ToString;

import java.util.HashMap;
import java.util.Map;

@Data
@ToString
public class ColumnVo {
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


    /** JAVA类型 */
    private String javaType;


    /** JAVA字段名 */
    private String javaField;


    /** 是否查询字段（1是） */
    private String isQuery;


    /** 查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围） */
    private String queryType;


    /** 显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、upload上传控件、summernote富文本控件） */
    private String htmlType;


    private Map<String, Object> extraField = new HashMap<>();



}
