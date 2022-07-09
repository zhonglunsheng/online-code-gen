package com.lipop.code.core;

import com.lipop.code.common.ResponseData;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Configuration
@ControllerAdvice
@ResponseBody
public class GlobalExceptionConfig {

    @ExceptionHandler(Exception.class)
    public ResponseData handleGlobalException (Exception e) {
        return ResponseData.createErrorResponse(e.getMessage());
    }
}
