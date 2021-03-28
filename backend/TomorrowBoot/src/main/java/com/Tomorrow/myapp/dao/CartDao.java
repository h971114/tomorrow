package com.Tomorrow.myapp.dao;

import java.util.List;

import com.Tomorrow.myapp.model.CartDto;

public interface CartDao {
	void insertCart(CartDto cart);
	void deleteCart(CartDto cart);
	List<CartDto> getCart(String memberid);
}
