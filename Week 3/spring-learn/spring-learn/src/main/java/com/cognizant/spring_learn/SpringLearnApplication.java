package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {



	public void displayDate() {
    LOGGER.info("START");
    ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
    java.text.SimpleDateFormat format = context.getBean("dateFormat", java.text.SimpleDateFormat.class);
    System.out.println(format.format(new java.util.Date()));
    LOGGER.info("END");
}
    // Define the logger
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("START");
        SpringApplication.run(SpringLearnApplication.class, args);
        LOGGER.info("END");
    }

	
}