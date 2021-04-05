package com.Tomorrow.myapp.service;

import java.util.List;

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
        cartDao.insertCart(cart);
    }

    @Override
    public void changetoorder(String id) {

    }

}
