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
    	orderService.insertorder(order);
    	return new ResponseEntity<String>("SUCCESS", HttpStatus.ACCEPTED);
    }
    @PostMapping("/insertdetail")
    public ResponseEntity<String> insertdetail(@RequestBody Orderdetail order, HttpServletRequest req){
    	orderdetailservice.insertOrderdetail(order);
    	return new ResponseEntity<String>("SUCCESS", HttpStatus.ACCEPTED);
    }
    
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteOrder(@RequestParam("id") String id, HttpServletRequest req){
    	orderService.deleteorder(id);
    	return new ResponseEntity<String>("SUCCESS", HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/deletedetail")
    public ResponseEntity<String> deletedetail(@RequestParam("id") String id, HttpServletRequest req){
    	orderdetailservice.deleteOrderdetail(id);
    	return new ResponseEntity<String>("SUCCESS", HttpStatus.ACCEPTED);
    }
    @GetMapping("/detail")
    public ResponseEntity<Orderdetail> getdetail(@RequestParam("id") String id){
        return new ResponseEntity<>(orderdetailservice.getdetail(id), HttpStatus.ACCEPTED);
    }
    
    @GetMapping("/list")
    public ResponseEntity<List<OrderDto>> getOrder(@RequestParam("id") String id){
        return new ResponseEntity<>(orderService.getorderlist(id), HttpStatus.ACCEPTED);
    }
}

