package io.github.zhonglunsheng.core.template;

import java.util.Map;

public interface TemplateService {

    /**
     * 生成模块
     * @param tplContent 模板内容
     * @param data 模板变量
     * @return 模板生成后代码
     */
    String generateTemplate(String tplContent, Map<String, Object> data);
}
