package com.lipop.code.core;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2WebMvc;


@Configuration
//@EnableSwagger2WebMvc
public class SwaggerConfig {


    @Bean
    public Docket defaultApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(defaultApiInfo())
                .groupName("默认接口")
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.lipop.code.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo defaultApiInfo() {
        return new ApiInfoBuilder()
                .title("Code gen Doc")
                .description("Code gen Doc文档")
                .termsOfServiceUrl("")
                .contact(new Contact("zhonglunsheng", "http://blog.zhonglunsheng.vip", "zhonglunsheng@gmail.com"))
                .version("1.0")
                .build();
    }

}
