package com.Tomorrow.myapp.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Tomorrow.myapp.model.CartDto;
import com.Tomorrow.myapp.model.OrderDto;
import com.Tomorrow.myapp.model.Orderdetail;
import com.Tomorrow.myapp.service.CartService;
import com.Tomorrow.myapp.service.EthereumService;
import com.Tomorrow.myapp.service.MenuService;
import com.Tomorrow.myapp.service.OrderService;
import com.Tomorrow.myapp.service.OrderdetailService;
@RestController
@CrossOrigin(origins = {"http://localhost:3000","https://j4a305.p.ssafy.io"})
@RequestMapping("/order")
public class OrderController {
    private final String SUCCESS = "SUCCESS";
    private final String FAIL = "FAIL";
    private final OrderService orderService;
    private final OrderdetailService orderdetailservice;
    private final MenuService menuservice;
    private final EthereumService etherservice;

    @Autowired
    public OrderController(OrderService orderService, OrderdetailService orderdetailservice, MenuService menuservice, EthereumService etherservice) {
        this.orderService = orderService;
        this.orderdetailservice = orderdetailservice;
        this.menuservice = menuservice;
        this.etherservice = etherservice;
    }
    
    @PostMapping("/insert")
    public ResponseEntity<String> insertOrder(@RequestBody OrderDto order, HttpServletRequest req){
    	orderService.insertorder(order);
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }
    @PostMapping("/insertdetail")
    public ResponseEntity<String> insertdetail(@RequestBody Orderdetail order, HttpServletRequest req){
    	orderdetailservice.insertOrderdetail(order);
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }
    @GetMapping("/getlastid")
    public ResponseEntity<String> insertdetail(@RequestParam("id") String member_id, HttpServletRequest req){
    	System.out.println("getlastid");
    	return new ResponseEntity<String>(orderService.getLastOrder(member_id), HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteOrder(@RequestParam("id") String id, HttpServletRequest req){
    	orderService.deleteorder(id);
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/deletedetail")
    public ResponseEntity<String> deletedetail(@RequestParam("id") String id, HttpServletRequest req){
    	orderdetailservice.deleteOrderdetail(id);
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }
    @GetMapping("/detail")
    public ResponseEntity<Orderdetail> getdetail(@RequestParam("id") String id){
        return new ResponseEntity<>(orderdetailservice.getdetail(id), HttpStatus.ACCEPTED);
    }
    
    @GetMapping("/list")
    public ResponseEntity<List<OrderDto>> getOrder(@RequestParam("member_id") String member_id){
        return new ResponseEntity<>(orderService.getorderlist(member_id), HttpStatus.ACCEPTED);
    }
    @PutMapping("/send")
    public ResponseEntity<String> deletedetail(@RequestBody Map<String, String> data, HttpServletRequest req){
    	Orderdetail order = orderdetailservice.getdetail(data.get("id"));
    	orderdetailservice.sendOrderdetail(order);
    	String seller =  menuservice.getMenuInfo(Integer.parseInt(order.getMenu_id())).getSeller_id();
    	String conclusion = SUCCESS;
    	String hash ="";
    	try {
			hash = etherservice.sendTransaction(seller, data.toString());
		} catch (Exception e) {
			conclusion = FAIL;
			e.printStackTrace();
		}
    	order.setFoodhash(hash);
    	orderdetailservice.sendOrderdetail(order);
    	return new ResponseEntity<String>(conclusion, HttpStatus.ACCEPTED);
    }
}

