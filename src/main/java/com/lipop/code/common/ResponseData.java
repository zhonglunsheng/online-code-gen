package com.lipop.code.common;

import lombok.Data;

@Data
public class ResponseData<T> {

    private Integer code;

    private String message;

    private T data;

    public final static Integer SUCCESS_CODE = 200;

    public final static Integer ERROR_CODE = 500;


    public ResponseData (Integer code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public ResponseData (Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public static <T> ResponseData<T> createSuccessResponse(T data) {
        return new ResponseData<T>(SUCCESS_CODE, "", data);
    }

    public static <T> ResponseData<T> createSuccessResponse() {
        return new ResponseData<T>(SUCCESS_CODE, "");
    }

    public static <T> ResponseData<T> createErrorResponse() {
        return new ResponseData<T>(ERROR_CODE, "");
    }
}
