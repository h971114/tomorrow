package com.Tomorrow.myapp.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Tomorrow.myapp.model.CartDto;
import com.Tomorrow.myapp.model.OrderDto;
import com.Tomorrow.myapp.model.Orderdetail;
import com.Tomorrow.myapp.service.CartService;
import com.Tomorrow.myapp.service.OrderService;
import com.Tomorrow.myapp.service.OrderdetailService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;
    private final OrderdetailService orderdetailservice;

    @Autowired
    public OrderController(OrderService orderService, OrderdetailService orderdetailservice) {
        this.orderService = orderService;
        this.orderdetailservice = orderdetailservice;
    }
    
    @PostMapping("/insert")
    public ResponseEntity<String> insertOrder(@RequestBody OrderDto order, HttpServletRequest req){
    	HttpStatus hs = HttpStatus.ACCEPTED;
    	orderService.insertorder(order);
    	return new ResponseEntity<String>("Success", hs);
    }
    @PostMapping("/insertdetail")
    public ResponseEntity<String> insertdetail(@RequestBody Orderdetail order, HttpServletRequest req){
    	HttpStatus hs = HttpStatus.ACCEPTED;
    	orderdetailservice.insertOrderdetail(order);
    	return new ResponseEntity<String>("Success", hs);
    }
    
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteOrder(@RequestParam("id") String id, HttpServletRequest req){
    	HttpStatus hs = HttpStatus.ACCEPTED;
    	orderService.deleteorder(id);
    	return new ResponseEntity<String>("Success", hs);
    }
    @DeleteMapping("/deletedetail")
    public ResponseEntity<String> deletedetail(@RequestParam("id") String id, HttpServletRequest req){
    	HttpStatus hs = HttpStatus.ACCEPTED;
    	orderdetailservice.deleteOrderdetail(id);
    	return new ResponseEntity<String>("Success", hs);
    }
    @GetMapping("/detail")
    public ResponseEntity<Orderdetail> getdetail(@RequestParam("id") String id){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(orderdetailservice.getdetail(id), hs);
    }
    
    @GetMapping("/list")
    public ResponseEntity<List<OrderDto>> getOrder(@RequestParam("id") String id){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(orderService.getorderlist(id), hs);
    }
}

