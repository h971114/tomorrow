package com.Tomorrow.myapp.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Tomorrow.myapp.model.ShippingDto;
import com.Tomorrow.myapp.service.ShippingService;




@RestController
@CrossOrigin(origins = {"http://localhost:3000","https://j4a305.p.ssafy.io"})
@RequestMapping("/shipping")
public class ShippingController {
	   private final String SUCCESS = "SUCCESS";
	    private final String FAIL = "FAIL";
	 private final ShippingService shippingService;
    @Autowired
    public ShippingController(ShippingService shippingService) {
        this.shippingService = shippingService;
    }

    /* 상품 Service: 등록 삭제 수정 */
    @PostMapping()
    public ResponseEntity<String> insertMenu(@RequestBody ShippingDto shipping, HttpServletRequest req) {
    	shippingService.insertInfo(shipping);
        return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }
}