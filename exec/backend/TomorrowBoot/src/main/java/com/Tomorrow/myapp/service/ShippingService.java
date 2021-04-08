package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.ShippingDto;

import java.util.List;

public interface ShippingService {

	public void insertInfo(ShippingDto shipping);
	public void updateStatus(ShippingDto shippingDto);
	public List getShippingDto(String seller_id);
}