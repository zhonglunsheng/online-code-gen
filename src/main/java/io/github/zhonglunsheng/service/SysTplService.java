package io.github.zhonglunsheng.service;

import io.github.zhonglunsheng.domain.SysTpl;

import java.util.List;

/**
 * sys_tpl
 *
 * @author zhonglunsheng
 * 2022年7月5日 下午10:58:22
 */
public interface SysTplService {

    List<SysTpl> queryByGroupName(String groupName);

    List<SysTpl> query(SysTpl sysTpl);

    boolean saveOrUpdate(SysTpl sysTpl);

    boolean removeById(String id);

    List<SysTpl> groupByTplGroupName();
}
