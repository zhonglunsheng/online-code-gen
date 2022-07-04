package com.lipop.code.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.lipop.code.domain.Test;
import com.lipop.code.service.TestService;
import com.lipop.code.mapper.TestMapper;
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




