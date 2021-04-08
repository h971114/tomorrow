package com.Tomorrow.myapp.controller;

import javax.servlet.http.HttpServletRequest;

import jnr.ffi.annotations.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Tomorrow.myapp.model.ShippingDto;
import com.Tomorrow.myapp.service.ShippingService;
import org.web3j.crypto.Hash;

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

    @GetMapping("/all1")
    public ResponseEntity<Map<String, Object>> getBySellerId(@RequestParam("seller_id") String seller_id){
        List<Map<String, Object>> list= shippingService.getBySellerId(seller_id);
        Map<String, Object> map = new HashMap<>();
        for(int i=0; i<list.size(); i++){
            map.put(String.valueOf(i), list.get(i));
        }
        map.put("message", SUCCESS);
        return new ResponseEntity<>(map, HttpStatus.ACCEPTED);
    }

    @GetMapping("/all2")
    public ResponseEntity<Map<String, Object>> getByMemberId(@RequestParam("member_id") String member_id,
                                                             @RequestParam("order_id") String order_id){
        Map<String, String> parameterMap = new HashMap<>();
        parameterMap.put("member_id", member_id);
        parameterMap.put("order_id", order_id);

        List<Map<String, Object>> list= shippingService.getByMemberId(parameterMap);
        System.out.println(list.size());
        Map<String, Object> map = new HashMap<>();
        for(int i=0; i<list.size(); i++){
            map.put(String.valueOf(i), list.get(i));
        }
        map.put("message", SUCCESS);
        return new ResponseEntity<>(map, HttpStatus.ACCEPTED);
    }

    @GetMapping("/count")
    public ResponseEntity<Map<String, Object>> getCount(@RequestParam("seller_id") String seller_id) {
        List<ShippingDto> sdList = shippingService.getShippingDto(seller_id);
        Map<String, Object> map = new HashMap<>();
        map.put("one", 0);
        map.put("two", 0);
        map.put("three", 0);
        for (ShippingDto sd : sdList) {
            int status = sd.getStatus();
            if (status == 1) {
                map.put("one", (int)map.get("one")+1);
            } else if (status == 2) {
                map.put("two", (int)map.get("two")+1);
            } else {
                map.put("three", (int)map.get("three")+1);
            }
        }
        map.put("message", SUCCESS);
        return new ResponseEntity<>(map, HttpStatus.ACCEPTED);
    }
}