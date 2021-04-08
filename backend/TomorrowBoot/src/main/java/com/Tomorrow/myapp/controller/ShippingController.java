package com.Tomorrow.myapp.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Tomorrow.myapp.model.ShippingDto;
import com.Tomorrow.myapp.service.ShippingService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://j4a305.p.ssafy.io"})
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

    @PutMapping("")
    public ResponseEntity<String> updateStatus(@RequestBody ShippingDto shippingDto) {
        shippingService.updateStatus(shippingDto);
        return new ResponseEntity<>(SUCCESS, HttpStatus.ACCEPTED);
    }

    @GetMapping("/count")
    public ResponseEntity<Map<String, Object>> getCount(@RequestBody ShippingDto shippingDto){
        List<ShippingDto> sdList = shippingService.getShippingDto(shippingDto);
        Map<String, Object> map = new HashMap<>();
        for(ShippingDto sd : sdList){
            int status = sd.getStatus();
            if(status==1)
                map.put("one", sd);
            else if(status==2)
                map.put("two", sd);
            else
                map.put("three", sd);
        }
        map.put("message", SUCCESS);
        return new ResponseEntity<>(map, HttpStatus.ACCEPTED);
    }
}