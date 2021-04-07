package com.Tomorrow.myapp.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.Tomorrow.myapp.dao.CartDao;
import com.Tomorrow.myapp.dao.MemberDao;
import com.Tomorrow.myapp.model.CartDto;

@Service
public class CartServiceImpl implements CartService {

    private final CartDao cartDao;

    public CartServiceImpl(CartDao cartDao) {
        this.cartDao = cartDao;
    }

    @Override
    public List<CartDto> getCartlist(String id) {
        return cartDao.getCart(id);
    }

    @Override
    public void deleteCart(int id) {
        cartDao.deleteCart(id);
    }

    @Override
    public void insertCart(CartDto cart) {
        CartDto cartDto = null;
        cartDto = cartDao.getOne(cart);
        if(cartDto == null)
            cartDao.insertCart(cart);
        else
            cartDao.updateCart(cart);
    }

    @Override
    public void changetoorder(String id) {

    }

	@Override
	public void getCartplus(Map<String, Object> map) {
		cartDao.updatePlus(map);
		
	}

	@Override
	public void getCartminus(Map<String, Object> map) {
		cartDao.updateMinus(map);
		
	}

}
