package io.github.zhonglunsheng.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

/**
 * sys_tpl
 *
 * @author zhonglunsheng
 * 2022年7月5日 下午10:58:22
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SysTpl implements Serializable {

    private static final long serialVersionUID = 1L;
    /**
     *
     */

    private Long id;
    /**
     * 模板组名
     */

    private String groupName;
    /**
     * 模板名
     */

    private String tplName;
    /**
     * 0=启用  1=停止
     */

    private String status;
    /**
     * 模板类型 java or python or other
     */

    private String tplType;
    /**
     *
     */

    private Date createTime;
    /**
     *
     */

    private Date updateTime;
    /**
     * 模板内容
     */

    private String content;
    /**
     * 本地生成路径
     */

    private String location;
    private String remark;
    private String fileName;
    private String filePath;
}