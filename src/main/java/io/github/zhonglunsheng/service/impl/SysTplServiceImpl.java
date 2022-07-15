package io.github.zhonglunsheng.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.lang.func.LambdaUtil;
import cn.hutool.core.util.StrUtil;
import io.github.zhonglunsheng.core.jdbc.JdbcTemplateHelper;
import io.github.zhonglunsheng.domain.SysTpl;
import io.github.zhonglunsheng.service.SysTplService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * sys_tpl
 *
 * @author zhonglunsheng
 * 2022年7月5日 下午10:58:22
 */
@Service
public class SysTplServiceImpl implements SysTplService {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Override
    public List<SysTpl> queryByGroupName(String groupName) {
        return jdbcTemplate.queryForList("select * from sys_tpl where group_name = ?", groupName)
                .stream().map(item -> BeanUtil.toBean(item, SysTpl.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<SysTpl> query(SysTpl sysTpl) {
        if (StrUtil.isNotBlank(sysTpl.getTplName())) {
            return jdbcTemplate.queryForList("select * from sys_tpl where tpl_name like '%?%' or group_name like '%?%'", sysTpl.getTplName(), sysTpl.getTplName())
                    .stream().map(item -> BeanUtil.toBean(item, SysTpl.class))
                    .collect(Collectors.toList());
        }

        return jdbcTemplate.queryForList("select * from sys_tpl")
                .stream().map(item -> BeanUtil.toBean(item, SysTpl.class))
                .collect(Collectors.toList());
    }

    @Override
    public boolean saveOrUpdate(SysTpl sysTpl) {
        JdbcTemplateHelper<SysTpl> helper = new JdbcTemplateHelper<>(jdbcTemplate, "sys_tpl");
        return helper.saveOrUpdate(sysTpl, LambdaUtil.getFieldName(SysTpl::getId)) > 0;
    }

    @Override
    public boolean removeById(String id) {
        JdbcTemplateHelper<SysTpl> helper = new JdbcTemplateHelper<>(jdbcTemplate, "sys_tpl");
        return helper.delete(SysTpl.builder().id(Long.parseLong(id)).build(), LambdaUtil.getFieldName(SysTpl::getId)) > 0;
    }

    @Override
    public List<SysTpl> groupByTplGroupName() {
        return jdbcTemplate.queryForList("select * from sys_tpl group by group_name")
                .stream().map(item -> BeanUtil.toBean(item, SysTpl.class))
                .collect(Collectors.toList());
    }
}




