package com.lipop.code.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;
import io.swagger.annotations.ApiModelProperty;

/**
*   test
* @author zhonglunsheng
* 2022年7月4日 下午10:14:41
*/
@TableName(value ="test")
@Data
public class Test implements Serializable {

    /**
    * 
    */
    @ApiModelProperty("")
    @TableId(type = IdType.AUTO)
    private Integer id;
    /**
    * 
    */
    @ApiModelProperty("")
    private String name;
    /**
    * 
    */
    @ApiModelProperty("")
    private String remark;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}