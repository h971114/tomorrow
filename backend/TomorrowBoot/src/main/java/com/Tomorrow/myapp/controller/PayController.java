package com.Tomorrow.myapp.controller;

import java.util.List;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.Tomorrow.myapp.model.NowPayDto;
import com.Tomorrow.myapp.model.PayApprovalDto;
import com.Tomorrow.myapp.service.EthereumService;
import com.Tomorrow.myapp.service.PayService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/pay")
public class PayController {
	
    private final PayService payService;
    private String from = "0x11fd1D319B17aECEebC93439A35Ebc256cE8b851";
    @Autowired
    EthereumService ethereumService;
    @Autowired
    public PayController(PayService payService) {
    	this.payService = payService;
    }
    
    @GetMapping("/kakaoPay")
    public void kakaoPayGet() {
    	System.out.println("kakaoPay post............................................");
    }
    
    @GetMapping("/kakaoPay/{id}") // 결제요청 QR
    public String kakaoPay(@PathVariable(value = "id") String id, @RequestBody List<NowPayDto> nowpay, HttpServletRequest req) {
    	System.out.println("kakaoPay post............................................");
        
        return "redirect:" + payService.kakaoPayReady(id,nowpay); //payService.kakaoPayReady() 주소 창 띄우기
 
    }
    
    @GetMapping("/PaySuccess/{id}/{total}") // 결제완료페이지
    public String kakaoPaySuccess(@RequestParam("pg_token") String pg_token, @PathVariable(value = "id") String id,@PathVariable(value = "total") int total,Model model) throws Exception {
        System.out.println("kakaoPaySuccess get............................................");
        System.out.println("kakaoPaySuccess pg_token : " + pg_token);
        PayApprovalDto pay = payService.kakaoPayInfo(pg_token,id,total);
        model.addAttribute("info", pay);
        ethereumService.sendTransaction(pay);
        return "SUCCESS";
    }
    

}