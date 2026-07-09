package com.example.orderservice;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private UserClient userClient;

    @PostMapping
    public Map<String, Object> createOrder(@RequestParam String userId, @RequestParam String product) {
        Map<String, String> user = userClient.getUserById(userId);
        return Map.of("orderId", "999", "product", product, "userData", user);
    }
}
