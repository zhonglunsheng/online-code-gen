package com.lipop.code;


import com.lipop.code.core.template.TemplateService;
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

}
