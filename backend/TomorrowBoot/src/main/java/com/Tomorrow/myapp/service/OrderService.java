package com.Tomorrow.myapp.service;

import java.util.List;

import com.Tomorrow.myapp.model.OrderDto;

public interface OrderService {
	void insertorder(OrderDto order);
	void deleteorder(String id);
	List<OrderDto> getorderlist(String memberid);
}
