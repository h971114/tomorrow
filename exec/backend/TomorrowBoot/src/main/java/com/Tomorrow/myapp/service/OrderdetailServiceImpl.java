
package com.Tomorrow.myapp.service;

import org.springframework.stereotype.Service;

import com.Tomorrow.myapp.dao.OrderdetailDao;
import com.Tomorrow.myapp.model.Orderdetail;
@Service
public class OrderdetailServiceImpl implements OrderdetailService {
	private final OrderdetailDao orderdetailDao;
	public OrderdetailServiceImpl(OrderdetailDao orderdetailDao){
	    this.orderdetailDao = orderdetailDao;
    }
	@Override
	public void insertOrderdetail(Orderdetail orderdetail) {
		orderdetailDao.insertOrder(orderdetail);
		
	}
	@Override
	public void deleteOrderdetail(String id) {
		orderdetailDao.deleteOrder(id);
	}
	@Override
	public Orderdetail getdetail(String id) {
		return orderdetailDao.getOrder(id);
	}
	
	@Override
	public void sendOrderdetail(Orderdetail orderdetail) {
		orderdetailDao.sendOrder(orderdetail);
		
	}
}
