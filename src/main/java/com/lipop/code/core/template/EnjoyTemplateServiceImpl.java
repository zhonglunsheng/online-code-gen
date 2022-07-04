package com.lipop.code.core.template;

import com.jfinal.template.Engine;
import com.jfinal.template.Template;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * https://jfinal.com/doc/6-11
 */
@Service
public class EnjoyTemplateServiceImpl implements TemplateService {

    @Autowired
    private Engine engine;

    @Override
    public String generateTemplate(String tplContent, Map<String, Object> data) {
        Template template = engine.getTemplateByString(tplContent);
        return template.renderToString(data);
    }
}
