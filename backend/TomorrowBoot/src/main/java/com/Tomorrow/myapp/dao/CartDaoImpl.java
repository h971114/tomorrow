package com.Tomorrow.myapp.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.Tomorrow.myapp.model.CartDto;
@Repository
public class CartDaoImpl implements CartDao {

	@Autowired
	private SqlSession sqlSession;

	@Override
	public List<CartDto> getCart(String memberId) {
		return sqlSession.selectList("cart.getlist",memberId);
	}

	@Override
	public void insertCart(CartDto cart) {
		sqlSession.insert("cart.insert",cart);
	}

	@Override
	public void deleteCart(int id) {
		sqlSession.delete("cart.delete", id);
	}
}
