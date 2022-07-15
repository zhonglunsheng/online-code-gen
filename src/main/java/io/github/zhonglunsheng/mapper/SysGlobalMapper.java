package io.github.zhonglunsheng.mapper;

import io.github.zhonglunsheng.domain.SysGlobal;
import org.springframework.stereotype.Component;

/**
 * sys_global
 *
 * @author zhonglunsheng
 * 2022年7月9日 下午3:21:04
 */
@Component
public interface SysGlobalMapper {

    SysGlobal getOne();

    int updateById(SysGlobal sysGlobal);
}




