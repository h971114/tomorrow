package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.Orderdetail;

public interface OrderdetailService {
	void insertOrderdetail(Orderdetail orderdetail);
	void deleteOrderdetail(String id);
	Orderdetail getdetail(String id);
}
