package io.github.zhonglunsheng.service.impl;

import io.github.zhonglunsheng.domain.SysGlobal;
import io.github.zhonglunsheng.mapper.SysGlobalMapper;
import io.github.zhonglunsheng.service.SysGlobalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
*   sys_global
* @author zhonglunsheng
* 2022年7月9日 下午3:21:04
*/
@Service
public class SysGlobalServiceImpl implements SysGlobalService{

    @Autowired
    private SysGlobalMapper sysGlobalMapper;

    @Override
    public SysGlobal getOne() {
        return sysGlobalMapper.getOne();
    }

    @Override
    public int updateById(SysGlobal sysGlobal) {
        return sysGlobalMapper.updateById(sysGlobal);
    }
}




