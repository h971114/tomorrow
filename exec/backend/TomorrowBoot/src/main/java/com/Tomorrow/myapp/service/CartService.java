package com.Tomorrow.myapp.service;

import java.util.List;
import java.util.Map;

import com.Tomorrow.myapp.model.CartDto;

public interface CartService {
	List<CartDto> getCartlist(String id);
	void deleteCart(int id);
	void insertCart(CartDto cart);
    void changetoorder(String id);
	void getCartplus(Map<String, Object> map);
	void getCartminus(Map<String, Object> map);
}
