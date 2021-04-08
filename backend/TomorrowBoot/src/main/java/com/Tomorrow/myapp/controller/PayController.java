package com.Tomorrow.myapp.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Tomorrow.myapp.service.MenuService;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.Tomorrow.myapp.model.NowPayDto;
import com.Tomorrow.myapp.model.OrderDto;
import com.Tomorrow.myapp.model.PayApprovalDto;
import com.Tomorrow.myapp.service.EthereumService;
import com.Tomorrow.myapp.service.OrderService;
import com.Tomorrow.myapp.service.PayService;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","https://j4a305.p.ssafy.io","*"}, allowedHeaders = "*")
@RequestMapping("/pay")
public class PayController {
    private final String SUCCESS = "SUCCESS";
    private final String FAIL = "FAIL";
	
    private final PayService payService;
    private final OrderService orderService;
    private List<NowPayDto> paydetail = new ArrayList<>();
  //  private String from = "0x11fd1D319B17aECEebC93439A35Ebc256cE8b851";
    @Autowired
    EthereumService ethereumService;
    @Autowired
    public PayController(PayService payService, OrderService orderservice) {
    	this.orderService = orderservice;
		this.payService = payService;
    }
    @Autowired
  	private SqlSession sqlSession;
    @GetMapping("/kakaoPay")
    public void kakaoPayGet() {
    	System.out.println("kakaoPay post............................................");
    }
    
    @PostMapping("/kakaoPay/{id}") // 결제요청 QR
    public String kakaoPay(@PathVariable(value = "id") String id, @RequestBody List<NowPayDto> nowpay, HttpServletRequest req,HttpServletResponse response) throws IOException{
    	System.out.println("kakaoPay post............................................");
    	paydetail = nowpay;
    	return payService.kakaoPayReady(id,nowpay); //payService.kakaoPayReady() 주소 창 띄우기
    }
    
    @GetMapping("/PaySuccess/{id}/{total}") // 결제완료페이지
    public RedirectView kakaoPaySuccess(@RequestParam("pg_token") String pg_token, @PathVariable(value = "id") String id,@PathVariable(value = "total") int total,Model model) throws Exception {
        System.out.println("kakaoPaySuccess get............................................");
        System.out.println("kakaoPaySuccess pg_token : " + pg_token);
        PayApprovalDto pay = payService.kakaoPayInfo(pg_token,id,total);
        model.addAttribute("info", pay);
        String orderid = pay.getPartner_order_id();
        for(int i=0;i<paydetail.size();i++) {
        	NowPayDto nowpay = paydetail.get(i);
        	Map<String,Object> map = new HashMap<>();
        	map.put("order_id", orderid);
        	map.put("menu_id", nowpay.getItem_code());
        	map.put("amount", nowpay.getQuantity());       	
        	map.put("member_id", id);
        	sqlSession.insert("pay.detail",map);
            sqlSession.delete("cart.paydelete",map);

            // addr, etc, status, name, seller_id
            map.put("addr", paydetail.get(i).getAddr());
            map.put("etc", paydetail.get(i).getEtc());
            map.put("status", "1");
            map.put("name", paydetail.get(i).getName());
            map.put("mobile", paydetail.get(i).getMobile());
            sqlSession.insert("shipping.insert",map);
        }
        Map<String,Object> map = new HashMap<>();
        map.put("id", id);
    	map.put("points", paydetail.get(0).getPoint());
    	map.put("uppoint", paydetail.get(0).getUppoint());
    	map.put("name", paydetail.get(0).getName());
    	map.put("mobile", paydetail.get(0).getMobile());
//    	map.put("addr", paydetail.get(0).getAddr());
//    	map.put("etc", paydetail.get(0).getEtc());
    	map.put("order_id", orderid);
    	sqlSession.update("member.updatepoint",map);
//    	sqlSession.insert("shipping.insert",map);
        String hash = ethereumService.sendTransaction(pay);
        OrderDto order = new OrderDto();
        order.setId(pay.getPartner_order_id());
        order.setPayment_status("1");
        order.setPaymenthash(hash);
        orderService.paymentorder(order);
        return new RedirectView("https://j4a305.p.ssafy.io/orderend");
    }
    @GetMapping("/kakaoPayCancel") // 결제완료페이지
    public RedirectView kakaoPayCancel() throws Exception {
        return new RedirectView("https://j4a305.p.ssafy.io/cart");
    }
    @GetMapping("/kakaoPaySuccessFail") // 결제완료페이지
    public RedirectView kakaoPaySuccessFail() throws Exception {
        return new RedirectView("https://j4a305.p.ssafy.io/cart");
    }
}
