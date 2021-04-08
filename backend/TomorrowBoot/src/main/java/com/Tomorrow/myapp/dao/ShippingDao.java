package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.ShippingDto;

import java.util.List;

public interface ShippingDao {
	public void insertInfo(ShippingDto shipping);
	public void updateStatus(ShippingDto shippingDto);
	public List getShippingDto(String seller_id);
}
