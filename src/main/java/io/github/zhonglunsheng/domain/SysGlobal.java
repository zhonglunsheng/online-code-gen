package io.github.zhonglunsheng.domain;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * sys_global
 *
 * @author zhonglunsheng
 * 2022年7月9日 下午3:21:04
 */

@Data
public class SysGlobal implements Serializable {

    private static final long serialVersionUID = 1L;
    /**
     *
     */

    private Integer id;
    /**
     * 全局变量JSON
     */

    private String globalJson;
    /**
     *
     */

    private Date createTime;
    /**
     *
     */

    private Date updateTime;
}