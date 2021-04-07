package com.Tomorrow.myapp.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.Tomorrow.myapp.model.ShippingDto;

@Repository
public class ShippingDaoImpl implements ShippingDao{
	  @Autowired
	    private SqlSession sqlSession;


		@Override
		public void insertInfo(ShippingDto shipping) {
			sqlSession.insert("shipping.insert",shipping);
		}
}
