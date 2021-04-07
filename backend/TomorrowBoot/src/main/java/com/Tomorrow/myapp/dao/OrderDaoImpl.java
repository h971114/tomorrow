package com.Tomorrow.myapp.dao;

import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

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
	@Override
	public void paymentOrder(OrderDto order) {
		sqlSession.update("order.payment", order);
	}

	@Override
	public String getLastOrder(String member_id) {
		List<String> list =  sqlSession.selectList("order.getlast", member_id);
		Map<Integer, String> map = new HashMap<Integer, String>();
		list.forEach(s-> map.put(Integer.parseInt(s.substring(7)),s));
		List<Map.Entry<Integer, String>> entries = new LinkedList<>(map.entrySet());
		Collections.sort(entries, (o1,o2)-> o2.getKey()-o1.getKey());
		return entries.get(0).getValue();
	}
	
}
