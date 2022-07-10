package io.github.zhonglunsheng.core;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Configuration
@Import({CodeGenConfiguration.class})
public @interface EnableCodeGen {
}
