package com.cognizant.spring_learn.controller;

import org.springframework.web.bind.annotation.*;

import com.cognizant.spring_learn.Country;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountryIndia() {
        return new Country("IN", "India");
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        List<Country> list = new ArrayList<>();
        list.add(new Country("IN", "India"));
        list.add(new Country("US", "United States"));
        return list;
    }
}