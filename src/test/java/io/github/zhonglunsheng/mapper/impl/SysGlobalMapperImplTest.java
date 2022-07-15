package io.github.zhonglunsheng.mapper.impl;

import io.github.zhonglunsheng.BaseTest;
import io.github.zhonglunsheng.domain.SysGlobal;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Calendar;
import java.util.GregorianCalendar;

import static org.assertj.core.api.Assertions.assertThat;

class SysGlobalMapperImplTest extends BaseTest {

    @Autowired
    private SysGlobalMapperImpl sysGlobalMapperImplUnderTest;

    @Test
    void testGetOne() {

        // Run the test
        final SysGlobal result = sysGlobalMapperImplUnderTest.getOne();

        System.out.println("result = " + result);
    }

    @Test
    void testUpdateById() {
        // Setup
        final SysGlobal sysGlobal = new SysGlobal();
        sysGlobal.setId(2);
        sysGlobal.setGlobalJson("globalJson");
        sysGlobal.setCreateTime(new GregorianCalendar(2020, Calendar.JANUARY, 1).getTime());
        sysGlobal.setUpdateTime(new GregorianCalendar(2020, Calendar.JANUARY, 1).getTime());

        // Run the test
        final int result = sysGlobalMapperImplUnderTest.updateById(sysGlobal);

        // Verify the results
        assertThat(result).isEqualTo(1);
    }
}
