package com.Tomorrow.myapp.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.Tomorrow.myapp.model.ShippingDto;

import java.util.List;
import java.util.Map;

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
    public List getShippingDto(String seller_id) {
        return sqlSession.selectList("shipping.getShippingDto", seller_id);
    }

    @Override
    public List<Map<String, Object>> getAllShipping(String seller_id) {
        return sqlSession.selectList("shipping.getAllShipping", seller_id);
    }
}
