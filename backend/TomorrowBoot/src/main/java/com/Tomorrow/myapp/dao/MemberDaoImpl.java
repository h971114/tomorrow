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
	public List<Object> userMeetingFive(String userid)  throws SQLException{
		Map<String,String> map = new HashMap<>();
		map.put("id", userid);
		String pattern = "yyyy-MM-dd";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		String date = simpleDateFormat.format(new Date());
		map.put("today", date);
		return sqlSession.selectList("member.usermeet",userid);
	}
	@Override
	public void start () {
//		sqlSession.getConnection();
		try {
//			getEthClientVersionSync();
//			getEthClientVersionASync();
//			getEthClientVersionRx();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

//    public void getEthClientVersionSync() throws Exception
//    {
//        Web3j web3j = Web3j.build(new HttpService("https://ropsten.infura.io/v3/184f3bb959504956a9a5db1c11ac8a2f"));
//        Web3ClientVersion web3ClientVersion = web3j.web3ClientVersion().send();
//        System.out.println(web3ClientVersion.getWeb3ClientVersion());
//        System.out.println(web3j.ethBlockNumber());
//        EthBlockNumber result1 = web3j.ethBlockNumber().sendAsync().get();
//        System.out.println(web3j.ethAccounts().send().getAccounts().toString());
//        System.out.println(" result: " + result1.getBlockNumber().toString());
//        EthGetBalance ethGetBalance= web3j.ethGetBalance("0x5D9E4e5BE5AD159f8518eC51f6E02f951cC765fa",DefaultBlockParameterName.LATEST).sendAsync().get();
//        BigInteger wei = ethGetBalance.getBalance();
//        java.math.BigDecimal tokenValue = Convert.fromWei(String.valueOf(wei), Convert.Unit.ETHER);
//        String strTokenAmount = String.valueOf(tokenValue);
//        System.out.println(strTokenAmount);
//        System.out.println("why?");
//        Credentials maincredentials = Credentials.create("e556623f9caa78f79992389fae16ce33502cb82ce75b3aebcbf151058a22e7f7");
//        EthGetTransactionCount ethGetTransactionCount = web3j.ethGetTransactionCount(maincredentials.getAddress(), DefaultBlockParameterName.PENDING).send();
//        BigInteger nonce =  ethGetTransactionCount.getTransactionCount();
//        EthBlock ethblock = web3j.ethGetBlockByNumber(DefaultBlockParameterName.LATEST, false).sendAsync().get();
//        BigInteger gaslimit = ethblock.getBlock().getGasLimit();
//        EthGasPrice gasPrice = web3j.ethGasPrice().send();
//        System.out.println(gasPrice.getGasPrice());
//        try {
//            String password = "secr3t";
//            ECKeyPair keyPair = Keys.createEcKeyPair();
//            WalletFile wallet = Wallet.createStandard(password, keyPair);
//            Credentials credentials = Credentials.create(Wallet.decrypt(password, wallet));
//            RawTransaction rawTransaction =
//                    RawTransaction.createTransaction(nonce, gasPrice.getGasPrice(), gaslimit, credentials.getAddress(), BigInteger.valueOf(100),"test");
//            byte[] signedMessage;
//            signedMessage = TransactionEncoder.signMessage(rawTransaction, maincredentials);
//            String hexValue =Numeric.toHexString(signedMessage);
//            EthSendTransaction ethSendTransaction = web3j.ethSendRawTransaction(hexValue).send();
//            if(ethSendTransaction.getError() != null){
//                System.out.println(ethSendTransaction.getError().getMessage());
//            }
//            String hashvalue = ethSendTransaction.getResult();
//            System.out.println(hashvalue);
//            System.out.println(web3j.ethGetTransactionReceipt("0x7eda5e3634a6cd92e8183402b2fc767d468144df8a220128821b6991990f964f").send().getTransactionReceipt());
//            System.out.println(web3j.ethGetTransactionReceipt(hashvalue).send().getTransactionReceipt());
//            ethGetBalance= web3j.ethGetBalance(credentials.getAddress(),DefaultBlockParameterName.LATEST).sendAsync().get();
//            System.out.println(credentials.getAddress());
//            wei = ethGetBalance.getBalance();
//            tokenValue = Convert.fromWei(String.valueOf(wei), Convert.Unit.ETHER);
//            strTokenAmount = String.valueOf(tokenValue);
//            System.out.println(strTokenAmount);
//            
//        } catch(Exception e) {
//            System.err.println("Error: " + e.getMessage());
//        }
//        
//    }

}
