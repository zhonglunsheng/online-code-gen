package com.lipop.code.core;

import com.jfinal.template.Engine;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TemplateConfig {
    @Bean
    public Engine createEngine () {
        Engine engine = Engine.create("myEngine");
        engine.setDevMode(true);
        return engine;
    }

}
