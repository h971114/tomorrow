package com.Tomorrow.myapp.service;

import java.util.List;

import com.Tomorrow.myapp.model.NowPayDto;
import com.Tomorrow.myapp.model.PayApprovalDto;

public interface PayService {
	public String kakaoPayReady(String id,  List<NowPayDto> nowpay);
	public PayApprovalDto kakaoPayInfo(String pg_token,String id,int total);
}
