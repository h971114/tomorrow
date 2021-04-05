package com.Tomorrow.myapp.dao;

import java.util.List;

import com.Tomorrow.myapp.model.CartDto;

public interface CartDao {
	List<CartDto> getCart(String memberId);
	void insertCart(CartDto cart);
	void deleteCart(CartDto cart);
}
