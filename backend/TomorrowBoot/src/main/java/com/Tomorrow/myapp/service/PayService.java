package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.PayApprovalDto;

public interface PayService {
	public String kakaoPayReady();
	public PayApprovalDto kakaoPayInfo(String pg_token);
}
