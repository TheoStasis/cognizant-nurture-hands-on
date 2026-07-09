package com.example.paymentservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @GetMapping("/process")
    @CircuitBreaker(name = "paymentCircuit", fallbackMethod = "localPaymentFallback")
    public String processPayment() {
        throw new RuntimeException("Third-party payment gateway down!");
    }

    public String localPaymentFallback(Throwable e) {
        return "Resilience4j active: Running fallback logic. Payment processing handles locally via cash-on-delivery fallback.";
    }
}
