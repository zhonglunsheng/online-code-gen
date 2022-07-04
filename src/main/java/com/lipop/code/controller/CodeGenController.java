package com.lipop.code.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CodeGenController {

    @RequestMapping("/test")
    public String gen() {
        return "success";
    }
}
