package com.Tomorrow.myapp.dao;

import java.util.List;

import com.Tomorrow.myapp.model.Orderdetail;



public interface OrderdetailDao {

	void insertOrder(Orderdetail order);
	void deleteOrder(String id);
	Orderdetail getOrder(String id);
	void sendOrder(Orderdetail order);
}
