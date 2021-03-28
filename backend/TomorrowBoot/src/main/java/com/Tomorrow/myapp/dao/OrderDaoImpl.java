package com.Tomorrow.myapp.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.Tomorrow.myapp.model.OrderDto;
@Repository
public class OrderDaoImpl implements OrderDao {
	
	@Autowired
	private SqlSession sqlSession;
	@Override
	public void insertOrder(OrderDto order) {
		sqlSession.insert("order.insert", order);
	}

	@Override
	public void deleteOrder(String id) {
		sqlSession.delete("order.delete", id);
	}

	@Override
	public List<OrderDto> getOrder(String memberid) {
		return sqlSession.selectList("order.get", memberid);
	}

}
