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
 *   sys_tpl
 * @author zhonglunsheng
 * 2022年7月5日 下午10:58:22
 */
@TableName(value ="sys_tpl")
@Data
public class SysTpl implements Serializable {

    /**
     *
     */
    @ApiModelProperty("")
    @TableId(type = IdType.AUTO)
    private Long id;
    /**
     * 模板组名
     */
    @ApiModelProperty("模板组名")
    private String groupName;
    /**
     * 模板名
     */
    @ApiModelProperty("模板名")
    private String tplName;
    /**
     * 0=启用  1=停止
     */
    @ApiModelProperty("0=启用  1=停止")
    private String status;
    /**
     * 模板类型 java or python or other
     */
    @ApiModelProperty("模板类型 java or python or other")
    private String tplType;
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
    /**
     * 模板内容
     */
    @ApiModelProperty("模板内容")
    private String content;
    /**
     * 本地生成路径
     */
    @ApiModelProperty("本地生成路径")
    private String location;

    @ApiModelProperty("备注")
    private String remark;

    private String fileName;

    private String filePath;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}