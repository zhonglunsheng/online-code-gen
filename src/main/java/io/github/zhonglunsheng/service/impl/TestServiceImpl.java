package io.github.zhonglunsheng.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import io.github.zhonglunsheng.domain.Test;
import io.github.zhonglunsheng.service.TestService;
import io.github.zhonglunsheng.mapper.TestMapper;
import org.springframework.stereotype.Service;

/**
*   test
* @author zhonglunsheng
* 2022年7月4日 下午10:14:41
*/
@Service
public class TestServiceImpl extends ServiceImpl<TestMapper, Test>
    implements TestService{

}




