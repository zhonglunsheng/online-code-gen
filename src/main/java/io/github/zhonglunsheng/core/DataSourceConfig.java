package io.github.zhonglunsheng.core;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextStartedEvent;
import org.springframework.stereotype.Component;

@Component
public class DataSourceConfig implements ApplicationContextAware, ApplicationListener<ContextStartedEvent> {

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println(applicationContext);
    }


    @Override
    public void onApplicationEvent(ContextStartedEvent event) {
        ApplicationContext applicationContext = event.getApplicationContext();
        System.out.println("applicationContext = " + applicationContext);
    }

    
}
