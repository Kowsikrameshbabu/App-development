package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
 import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Job;
import com.example.demo.service.JobService;

 @RestController
@CrossOrigin("http://localhost/3000")
 public class JobController {
     @Autowired
     private JobService jobService;
 

     @GetMapping("/hello")
     public String hello(){
        return "hello";
     }
     @GetMapping
     public List<Job> getAllJobs() {
         return jobService.getAllJobs();
     }
        @PostMapping
    public Job createJob(@RequestBody Job job) {
        return jobService.saveJob(job);
    }
 }
 