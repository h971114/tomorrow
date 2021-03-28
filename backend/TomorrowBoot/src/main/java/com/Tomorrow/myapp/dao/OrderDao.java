package com.Tomorrow.myapp.dao;

import java.util.List;

import com.Tomorrow.myapp.model.OrderDto;


public interface OrderDao {
	void insertOrder(OrderDto order);
	void deleteOrder(String id);
	List<OrderDto> getOrder(String memberid);
}
