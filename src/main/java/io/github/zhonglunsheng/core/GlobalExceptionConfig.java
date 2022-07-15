package io.github.zhonglunsheng.core;

import io.github.zhonglunsheng.common.ResponseData;
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
        e.printStackTrace();
        return ResponseData.createErrorResponse(e.getMessage());
    }
}
