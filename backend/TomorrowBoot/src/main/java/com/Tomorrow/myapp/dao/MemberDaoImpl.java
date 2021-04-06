package com.Tomorrow.myapp.dao;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.web3j.protocol.Web3jService;
import org.web3j.protocol.http.HttpService;

import com.Tomorrow.myapp.model.MemberDto;

@Repository
public class MemberDaoImpl implements MemberDao{
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	private static final Web3jService web3jService = new HttpService("https://ropsten.infura.io/v3/184f3bb959504956a9a5db1c11ac8a2f");
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public void join(MemberDto member)  throws SQLException{
        sqlSession.insert("member.join",member);
	}
	@Override
	public int login(String id, String pw)  throws SQLException{
		Map<String,String> map = new HashMap<>();
		map.put("id", id);
		map.put("pw", pw);
		return sqlSession.selectOne("member.login",map);
	}
	@Override
	public MemberDto userinfo(String id) throws SQLException {
		return sqlSession.selectOne("member.userinfo",id);
	}
	@Override
	public void delete(String id) throws SQLException{
		 sqlSession.delete("member.delete",id);
	}
	@Override
	public int sameId(String id)  throws SQLException{
		return sqlSession.selectOne("member.sameId",id);
	}
	@Override
	public int sameNick(String Nickname)  throws SQLException{
		return sqlSession.selectOne("member.sameNick",Nickname);
	}
	@Override
	public int sameCert(String Cert)  throws SQLException{
		return sqlSession.selectOne("member.sameCert",Cert);
	}
	@Override
	public void modify(MemberDto member) throws SQLException {
		sqlSession.update("member.modify",member);
	}
	@Override
	public String findid(MemberDto member) throws SQLException {
		// TODO Auto-generated method stub
		Map<String,String> map = new HashMap<>();
		map.put("name", member.getName());
		map.put("email", member.getEmail());
		return sqlSession.selectOne("member.findid", map);
	}
	@Override
	public String findpw(MemberDto member) throws SQLException {
		// TODO Auto-generated method stub
		Map<String,String> map = new HashMap<>();
		map.put("name", member.getName());
		map.put("email", member.getEmail());
		map.put("id", member.getId());
		return sqlSession.selectOne("member.findpw", map);
	}
	@Override
	public int sameEmail(String email)  throws SQLException{
		return sqlSession.selectOne("member.sameEmail",email);
	}
	@Override
	public void start () {
//		sqlSession.getConnection();
	}

}
