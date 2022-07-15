package io.github.zhonglunsheng.mapper.impl;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.lang.func.LambdaUtil;

import io.github.zhonglunsheng.core.jdbc.JdbcTemplateHelper;
import io.github.zhonglunsheng.domain.SysGlobal;
import io.github.zhonglunsheng.mapper.SysGlobalMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SysGlobalMapperImpl implements SysGlobalMapper {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Override
    public SysGlobal getOne() {
        JdbcTemplateHelper<SysGlobal> helper = new JdbcTemplateHelper<>(jdbcTemplate, "sys_global");
        List<SysGlobal> sysGlobals = helper.queryAll(SysGlobal.class);
        return CollUtil.isNotEmpty(sysGlobals) ? sysGlobals.get(0) : null;
    }

    @Override
    public int updateById(SysGlobal sysGlobal) {
        JdbcTemplateHelper<SysGlobal> helper = new JdbcTemplateHelper<>(jdbcTemplate, "sys_global");
        return helper.saveOrUpdate(sysGlobal, LambdaUtil.getFieldName(SysGlobal::getId));
    }
}
