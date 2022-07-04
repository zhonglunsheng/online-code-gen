package com.lipop.code;


import com.lipop.code.core.cache.ICache;
import com.lipop.code.core.template.TemplateService;
import com.lipop.code.domain.GenTable;
import com.lipop.code.domain.GenTableColumn;
import com.lipop.code.domain.vo.ColumnVo;
import com.lipop.code.service.GenTableService;
import com.lipop.code.service.TestService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootTest(classes = CodeApplication.class)
public class CodeApplicationTest {

    @Autowired
    private TemplateService templateService;


    @Autowired
    private TestService testService;

    @Autowired
    private GenTableService genTableService;


    @Test
    public void testGen () {
        String tplContent = "#(x + 123)";
        Map<String, Object> data = new HashMap<>();
        data.put("x", 23);
        String s = templateService.generateTemplate(tplContent, data);
        System.out.println("s = " + s);
    }

    @Test
    public void testServiceT () {
        List<com.lipop.code.domain.Test> list = testService.list();

        System.out.println("list = " + list);
    }


    @Test
    public void testGetTableList () {
        List<GenTable> genTables = genTableService.selectTableByName();

        System.out.println("list = " + genTables);



    }

    @Test
    public void testGetTableColumn () {
        List<GenTableColumn> genTables = genTableService.selectDbTableColumnsByName("sys_app");

        System.out.println("list = " + genTables);
    }

    @Autowired
    private ICache iCache;

    @Test
    public void testCache() {
        List<ColumnVo> sys_app = iCache.getColumnVo("sys_app");
        System.out.println("sys_app = " + sys_app);
    }

}
