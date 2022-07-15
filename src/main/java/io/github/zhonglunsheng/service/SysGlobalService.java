package io.github.zhonglunsheng.service;

import io.github.zhonglunsheng.domain.SysGlobal;

/**
*   sys_global
* @author zhonglunsheng
* 2022年7月9日 下午3:21:04
*/
public interface SysGlobalService  {

    SysGlobal getOne();

    int updateById(SysGlobal sysGlobal);
}
