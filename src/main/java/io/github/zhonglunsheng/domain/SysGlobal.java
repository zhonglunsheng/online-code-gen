package io.github.zhonglunsheng.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import io.swagger.annotations.ApiModelProperty;

/**
 *   sys_global
 * @author zhonglunsheng
 * 2022年7月9日 下午3:21:04
 */
@TableName(value ="sys_global")
@Data
public class SysGlobal implements Serializable {

    /**
     *
     */
    @ApiModelProperty("")
    @TableId(type = IdType.AUTO)
    private Integer id;
    /**
     * 全局变量JSON
     */
    @ApiModelProperty("全局变量JSON")
    private String globalJson;
    /**
     *
     */
    @ApiModelProperty("")
    private Date createTime;
    /**
     *
     */
    @ApiModelProperty("")
    private Date updateTime;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}