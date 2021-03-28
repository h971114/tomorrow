package com.Tomorrow.myapp.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.Tomorrow.myapp.model.Orderdetail;
@Repository
public class OrderdetailDaoImpl implements OrderdetailDao {
	
	@Autowired
	private SqlSession sqlSession;
	@Override
	public void insertOrder(Orderdetail order) {
		sqlSession.insert("orderdetail.insert", order);
	}

	@Override
	public void deleteOrder(String id) {
		sqlSession.delete("orderdetail.delete", id);
	}

	@Override
	public Orderdetail getOrder(String id) {
		return sqlSession.selectOne("orderdetail.get", id);
	}

}
