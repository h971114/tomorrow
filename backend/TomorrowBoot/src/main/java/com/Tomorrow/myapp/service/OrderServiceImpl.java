package com.Tomorrow.myapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Tomorrow.myapp.dao.OrderDao;
import com.Tomorrow.myapp.model.OrderDto;
@Service
public class OrderServiceImpl implements OrderService {
	private final OrderDao orderDao;
	public OrderServiceImpl(OrderDao orderDao){
	    this.orderDao = orderDao;
    }
	@Override
	public void insertorder(OrderDto order) {
		orderDao.insertOrder(order);
	}
	@Override
	public void deleteorder(String id) {
		orderDao.deleteOrder(id);
	}
	@Override
	public List<OrderDto> getorderlist(String memberid) {
		return orderDao.getOrder(memberid);
	}
	
	@Override
	public void paymentorder(OrderDto order) {
		orderDao.paymentOrder(order);
	}
	@Override
	public String getLastOrder(String member_id) {
		return orderDao.getLastOrder(member_id);
	}
}
