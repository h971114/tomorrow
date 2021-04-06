package com.Tomorrow.myapp.service;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import org.apache.commons.codec.binary.Hex;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.core.methods.response.EthGasPrice;
import org.web3j.protocol.core.methods.response.EthGetBalance;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.http.HttpService;
import org.web3j.utils.Numeric;

import com.Tomorrow.myapp.dao.WalletDao;
import com.Tomorrow.myapp.model.PayApprovalDto;
import com.Tomorrow.myapp.model.WalletDto;

@Service
public class EthereumService {

	static WalletDao walletdao;
	 public String sendTransaction(PayApprovalDto pay) throws Exception{

		//sqlSession.insert("menu.insert", menuDto);
    	 Web3j web3j = Web3j.build(new HttpService("https://ropsten.infura.io/v3/2f2fef8198294642973eb684e8634122"));
    	 Credentials maincredentials = Credentials.create("bb4b87f3601fd2c6779593cc662d4ff6109389e187d9a1869bf804d4d4203585");
    	 //구매자에 맞는 private key -> credential
    	 try {
        	 
     		EthGetTransactionCount ethGetTransactionCount = web3j.ethGetTransactionCount(maincredentials.getAddress(), DefaultBlockParameterName.PENDING).send();
          BigInteger nonce =  ethGetTransactionCount.getTransactionCount();//raw transaction 생성할때 필요!, 파라미터로 사용
          EthBlock ethblock = web3j.ethGetBlockByNumber(DefaultBlockParameterName.LATEST, false).sendAsync().get();
          BigInteger gaslimit = ethblock.getBlock().getGasLimit();//파라미터로 사용
          EthGasPrice gasPrice = web3j.ethGasPrice().send();//gasPrice를 받기위해 사용
          EthGetBalance ethGetBalance= web3j.ethGetBalance("0x55eaeCE45fe268d9a58a36a38cfAAb47b9111A1d",DefaultBlockParameterName.LATEST).sendAsync().get();
          WalletDto wallet = walletdao.walletinfo(pay.getPartner_user_id());
          System.out.println("출력할랭 : "+wallet.toString());
     	  Credentials credentials = Credentials.create(wallet.getPrivate_key());
//          Credentials credentials = Credentials.create("c969656128f6e36fc18c2847100eb7640b34bf04f1015b17458de3bbd11ad586");
          char[] chars = Hex.encodeHex(pay.toString().getBytes(StandardCharsets.UTF_8));
          String test = String.valueOf(chars);
          RawTransaction rawTransaction =
                  RawTransaction.createTransaction(nonce, gasPrice.getGasPrice(), gaslimit, credentials.getAddress(), BigInteger.valueOf(100), test);
         //파라미터 -> nonce, gasPrice, gaslimit, to, value, data
          byte[] signedMessage;//16진법포장
          signedMessage = TransactionEncoder.signMessage(rawTransaction, maincredentials);
          //rawtransaction = sign and send, transaction = send and sign 
          //from 필요 X
          String hexValue =Numeric.toHexString(signedMessage);//포장완료
          EthSendTransaction ethSendTransaction = web3j.ethSendRawTransaction(hexValue).send();//트랜잭션 전송!
          ethGetBalance= web3j.ethGetBalance(credentials.getAddress(),DefaultBlockParameterName.LATEST).sendAsync().get();
          // EthGetTransactionCount transactioncount =  web3j.ethGetTransactionCount(wallet.getAddress(), DefaultBlockParameterName.EARLIEST).send();
     	// System.out.println(transactioncount.getTransactionCount().toString());
          String transactionHash = ethSendTransaction.getTransactionHash();
//          String hex = web3j.ethGetTransactionByHash(transactionHash).send().getTransaction().get().getInput(); // 인풋받는 코드
//          hex = hex.substring(2);
//          byte[] bytes = hexStringToByteArray(hex);
//          String st = new String(bytes, StandardCharsets.UTF_8);
          return transactionHash;
    	 }
    	 catch(Exception e) {
             System.err.println("Error: " + e.getMessage());
             return "fail?";
	    }
	 }
	 public String sendTransaction(String seller_id, String data) throws Exception{

		//sqlSession.insert("menu.insert", menuDto);
    	 Web3j web3j = Web3j.build(new HttpService("https://ropsten.infura.io/v3/2f2fef8198294642973eb684e8634122"));
    	 Credentials maincredentials = Credentials.create("bb4b87f3601fd2c6779593cc662d4ff6109389e187d9a1869bf804d4d4203585");
    	 //구매자에 맞는 private key -> credential
    	 try {
        	 
     		EthGetTransactionCount ethGetTransactionCount = web3j.ethGetTransactionCount(maincredentials.getAddress(), DefaultBlockParameterName.PENDING).send();
          BigInteger nonce =  ethGetTransactionCount.getTransactionCount();//raw transaction 생성할때 필요!, 파라미터로 사용
          EthBlock ethblock = web3j.ethGetBlockByNumber(DefaultBlockParameterName.LATEST, false).sendAsync().get();
          BigInteger gaslimit = ethblock.getBlock().getGasLimit();//파라미터로 사용
          EthGasPrice gasPrice = web3j.ethGasPrice().send();//gasPrice를 받기위해 사용
          EthGetBalance ethGetBalance= web3j.ethGetBalance("0x55eaeCE45fe268d9a58a36a38cfAAb47b9111A1d",DefaultBlockParameterName.LATEST).sendAsync().get();
          WalletDto wallet = walletdao.walletinfo(seller_id);
     	  Credentials credentials = Credentials.create(wallet.getPrivate_key());
//          Credentials credentials = Credentials.create("c969656128f6e36fc18c2847100eb7640b34bf04f1015b17458de3bbd11ad586");
          char[] chars = Hex.encodeHex(data.getBytes(StandardCharsets.UTF_8));
          String test = String.valueOf(chars);
          RawTransaction rawTransaction =
                  RawTransaction.createTransaction(nonce, gasPrice.getGasPrice(), gaslimit, credentials.getAddress(), BigInteger.valueOf(100), test);
         //파라미터 -> nonce, gasPrice, gaslimit, to, value, data
          byte[] signedMessage;//16진법포장
          signedMessage = TransactionEncoder.signMessage(rawTransaction, maincredentials);
          //rawtransaction = sign and send, transaction = send and sign 
          //from 필요 X
          String hexValue =Numeric.toHexString(signedMessage);//포장완료
          EthSendTransaction ethSendTransaction = web3j.ethSendRawTransaction(hexValue).send();//트랜잭션 전송!
          ethGetBalance= web3j.ethGetBalance(credentials.getAddress(),DefaultBlockParameterName.LATEST).sendAsync().get();
          // EthGetTransactionCount transactioncount =  web3j.ethGetTransactionCount(wallet.getAddress(), DefaultBlockParameterName.EARLIEST).send();
     	// System.out.println(transactioncount.getTransactionCount().toString());
          String transactionHash = ethSendTransaction.getTransactionHash();
//          String hex = web3j.ethGetTransactionByHash(transactionHash).send().getTransaction().get().getInput(); // 인풋받는 코드
//          hex = hex.substring(2);
//          byte[] bytes = hexStringToByteArray(hex);
//          String st = new String(bytes, StandardCharsets.UTF_8);
          return transactionHash;
    	 }
    	 catch(Exception e) {
             System.err.println("Error: " + e.getMessage());
             return "fail?";
	    }
	 }
	 public static byte[] hexStringToByteArray(String hex) {
	        int l = hex.length();
	        byte[] data = new byte[l / 2];
	        for (int i = 0; i < l; i += 2) {
	            data[i / 2] = (byte) ((Character.digit(hex.charAt(i), 16) << 4)
	                    + Character.digit(hex.charAt(i + 1), 16));
	        }
	        return data;
	    }// hexstring string으로 바꾸는 메서드

}
