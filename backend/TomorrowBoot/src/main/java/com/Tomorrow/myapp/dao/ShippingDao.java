package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.ShippingDto;

import java.util.List;
import java.util.Map;

public interface ShippingDao {
	public void insertInfo(ShippingDto shipping);
	public void updateStatus(ShippingDto shippingDto);
	public List getShippingDto(String seller_id);
	public List<Map<String, Object>> getBySellerId(String seller_id);
	public List<Map<String, Object>> getByMemberId(Map<String, String> parameterMap);
}
