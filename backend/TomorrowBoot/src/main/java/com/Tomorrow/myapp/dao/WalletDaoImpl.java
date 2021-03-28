package com.Tomorrow.myapp.dao;

import java.math.BigInteger;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.ECKeyPair;
import org.web3j.crypto.Keys;
import org.web3j.crypto.Wallet;
import org.web3j.crypto.WalletFile;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;

import com.Tomorrow.myapp.model.WalletDto;

@Repository
public class WalletDaoImpl implements WalletDao{
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public void join(String memberid) throws SQLException {
		String address = "";
		String private_key = "";
		 Web3j web3j = Web3j.build(new HttpService("https://ropsten.infura.io/v3/184f3bb959504956a9a5db1c11ac8a2f"));
		 try {
	            String password = memberid;
	            ECKeyPair keyPair = Keys.createEcKeyPair();
	            WalletFile walletf = Wallet.createStandard(password, keyPair);
	            BigInteger privateKeyInDec = keyPair.getPrivateKey();
	            private_key = privateKeyInDec.toString(16);
	            address = walletf.getAddress();
	            Credentials credentials = Credentials.create(Wallet.decrypt(password, walletf));  
	        } catch(Exception e) {
	            System.err.println("Error: " + e.getMessage());
	        }
		 WalletDto wallet = new WalletDto(memberid, "0", address, private_key);
		sqlSession.insert("wallet.insert", wallet);
	}

	@Override
	public WalletDto walletinfo(String memberid) throws SQLException {
		return sqlSession.selectOne("wallet.get", memberid);
	}

	@Override
	public void delete(String memberid) throws SQLException {
		sqlSession.delete("wallet.delete", memberid);
		
	}

}
