package io.github.zhonglunsheng.core;

import com.jfinal.template.Engine;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TemplateConfig {
    @Bean
    public Engine createEngine () {
        Engine engine = Engine.create("myEngine");
        engine.setDevMode(true);
        engine.addSharedMethod(new cn.hutool.core.util.StrUtil());
        engine.addSharedMethod(new cn.hutool.core.date.DateUtil());
        engine.addSharedMethod(new cn.hutool.core.collection.CollUtil());
        return engine;
    }

}
