package com.lipop.code.core;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({com.lipop.code.core.CodeGenConfiguration.class})
public @interface EnableCodeGen {
}
