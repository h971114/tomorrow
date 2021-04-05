package com.Tomorrow.myapp.service;

import java.util.List;

import com.Tomorrow.myapp.model.CartDto;

public interface CartService {
	List<CartDto> getCartlist(String id);
	void deleteCart(int id);
	void insertCart(CartDto cart);
    void changetoorder(String id);
}
