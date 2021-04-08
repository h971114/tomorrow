package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.MenuDetailDto;
import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;
import com.Tomorrow.myapp.model.WalletDto;
import com.Tomorrow.myapp.service.WalletServiceImpl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.core.methods.response.EthGasPrice;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.http.HttpService;
import org.web3j.utils.Numeric;

import java.math.BigInteger;
import java.sql.SQLException;
import java.util.List;

@Repository
public class MenuDetailDaoImpl implements MenuDetailDao {

    @Autowired
    private SqlSession sqlSession;


	@Override
	public void insertMenuDetail(MenuDetailDto menuDetailDto) {
		sqlSession.insert("menudetail.insert",menuDetailDto);
	}

	@Override
	public void deleteMenuDetail(String id) {
		sqlSession.delete("menudetail.delete", id);
	}

	@Override
	public void updateMenuDetail(MenuDetailDto menuDetailDto) {
		sqlSession.update("menudetail.update", menuDetailDto);
	}

	@Override
	public MenuDetailDto getinfoMenuDetail(String id) {
		return sqlSession.selectOne("menudetail.getinfo", id);
	}
}
