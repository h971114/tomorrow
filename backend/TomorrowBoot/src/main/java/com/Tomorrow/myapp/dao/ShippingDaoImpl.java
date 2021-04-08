package com.Tomorrow.myapp.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.Tomorrow.myapp.model.ShippingDto;

import java.util.List;

@Repository
public class ShippingDaoImpl implements ShippingDao {
    @Autowired
    private SqlSession sqlSession;

    @Override
    public void insertInfo(ShippingDto shipping) {
        sqlSession.insert("shipping.insert", shipping);
    }

    @Override
    public void updateStatus(ShippingDto shippingDto) {
        sqlSession.update("shipping.updateStatus", shippingDto);
    }

    @Override
    public List getShippingDto(ShippingDto shippingDto) {
        return sqlSession.selectList("shipping.getShippingDto", shippingDto);
    }
}
