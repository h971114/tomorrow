package com.Tomorrow.myapp.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.Tomorrow.myapp.model.MemberDto;
import com.Tomorrow.myapp.model.PayApprovalDto;
import com.Tomorrow.myapp.model.PayDto;


@Service
public class PayServiceImpl implements PayService{
private static final String HOST = "https://kapi.kakao.com";
    
    private PayDto payDto;
    private PayApprovalDto payapprovalDto;
    @Autowired
	private SqlSession sqlSession;
	
    public String kakaoPayReady() {
 
        RestTemplate restTemplate = new RestTemplate();
 
        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "77776689222371028c2b592fd2b3ca19");
        headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
        
        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("partner_order_id", "1001");//주문번호
        params.add("partner_user_id", "gorany");//
        params.add("item_name", "내일");//상품이름 or 서비스이름
        params.add("quantity", "1");//총 수량
        params.add("total_amount", "2100");//총 가격
        params.add("tax_free_amount", "100");//세금
        params.add("approval_url", "http://localhost:8080/PaySuccess");
        params.add("cancel_url", "http://localhost:8080/kakaoPayCancel");
        params.add("fail_url", "http://localhost:8080/kakaoPaySuccessFail");
         HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
 
        try {
        	payDto = restTemplate.postForObject(new URI(HOST + "/v1/payment/ready"), body, PayDto.class);
            
            System.out.println("" + payDto);
            
            return payDto.getNext_redirect_pc_url();
 
        } catch (RestClientException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (URISyntaxException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        return "/pay";
        
    }
    public PayApprovalDto kakaoPayInfo(String pg_token,String id) {
    	 
    	System.out.println("KakaoPayInfoVO............................................");
        
        RestTemplate restTemplate = new RestTemplate();
 
        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "77776689222371028c2b592fd2b3ca19");
        headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
 
        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("tid", payDto.getTid());//결제고유번호
        params.add("partner_order_id", "1001");//주문번호
        params.add("partner_user_id", "gorany");
        params.add("pg_token", pg_token);
        params.add("total_amount", "2100");
        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
        
        try {
        	payapprovalDto = restTemplate.postForObject(new URI(HOST + "/v1/payment/approve"), body, PayApprovalDto.class);
           System.out.println("" + payapprovalDto);
           Map<String, String> map = new HashMap<String, String>();
           map.put("id",id);
           map.put("aid",payapprovalDto.getAid());
            return payapprovalDto;
        
        } catch (RestClientException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (URISyntaxException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        return null;
    }
    
}
