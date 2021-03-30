package com.Tomorrow.myapp.dao;

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
public class MenuDaoImpl implements MenuDao {

    @Autowired
    private SqlSession sqlSession;
    private WalletDao walletDao;

    @Override
    public void insertMenu(MenuDto menuDto) {
        sqlSession.insert("menu.insert", menuDto);
        Web3j web3j = Web3j.build(new HttpService("https://ropsten.infura.io/v3/184f3bb959504956a9a5db1c11ac8a2f"));
        Credentials maincredentials = Credentials.create("e556623f9caa78f79992389fae16ce33502cb82ce75b3aebcbf151058a22e7f7");
        try {
            EthGetTransactionCount ethGetTransactionCount = web3j.ethGetTransactionCount(maincredentials.getAddress(), DefaultBlockParameterName.PENDING).send();
            BigInteger nonce = ethGetTransactionCount.getTransactionCount();
            EthBlock ethblock = web3j.ethGetBlockByNumber(DefaultBlockParameterName.LATEST, false).sendAsync().get();
            BigInteger gaslimit = ethblock.getBlock().getGasLimit();
            EthGasPrice gasPrice = web3j.ethGasPrice().send();
            WalletDto wallet = walletDao.walletinfo(menuDto.getSeller_id());
            Credentials credentials = Credentials.create(wallet.getPrivate_key());
            RawTransaction rawTransaction =
                    RawTransaction.createTransaction(nonce, gasPrice.getGasPrice(), gaslimit, credentials.getAddress(), BigInteger.valueOf(100), menuDto.getId() + " " + menuDto.getCreate_at());
            byte[] signedMessage;
            signedMessage = TransactionEncoder.signMessage(rawTransaction, maincredentials);
            String hexValue = Numeric.toHexString(signedMessage);
            EthSendTransaction ethSendTransaction = web3j.ethSendRawTransaction(hexValue).send();
            EthGetTransactionCount transactioncount = web3j.ethGetTransactionCount(wallet.getAddress(), DefaultBlockParameterName.EARLIEST).send();
            System.out.println(transactioncount.getTransactionCount().toString());
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    @Override
    public void deleteMenu(String id) {
        sqlSession.delete("menu.delete", id);
    }

    @Override
    public void updateMenu(MenuDto menuDto) {
        sqlSession.update("menu.update", menuDto);
    }

    @Override
    public MenuDto getMenuInfo(int id) {
        return sqlSession.selectOne("menu.getMenuInfo", id);
    }

    @Override
    public List<MenuDto> getMenu() {
        return sqlSession.selectList("menu.getMenu");
    }

    @Override
    public List<MenuDto> getMenuBySeller(String seller_id) {
        return sqlSession.selectList("menu.getMenuBySeller", seller_id);
    }

    @Override
    public List<MenuDto> getMenuByLowPrice() {
        return sqlSession.selectList("menu.getMenuByLowPrice");
    }

    @Override
    public List<MenuDto> getMenuByHighPrice() {
        return sqlSession.selectList("menu.getMenuByHighPrice");
    }

    @Override
    public List<MenuDto> getMenuByBest() {
        return sqlSession.selectList("menu.getMenuByBest");
    }

    @Override
    public List<MenuDto> getMenuByNew() {
        return sqlSession.selectList("menu.getMenuByNew");
    }

    @Override
    public List<MenuDto> getMenuBySale() {
        return sqlSession.selectList("menu.getMenuBySale");
    }

    @Override
    public List<MenuDto> getMenuByTodaySale() {
        return sqlSession.selectList("menu.getMenuByTodaySale");
    }

    @Override
    public List<MenuDto> getMenuByCategory(int keyword) {
        return sqlSession.selectList("menu.getMenuByCategory", keyword);
    }

    @Override
    public List<ReviewDto> getReview(int id) {
        return sqlSession.selectList("menu.getreview", id);
    }

    @Override
    public boolean postReview(ReviewDto reviewDto) {
        int insert = sqlSession.insert("menu.postreview", reviewDto);
        if (insert == 0)
            return false;
        return true;
    }

    @Override
    public boolean updateReview(ReviewDto reviewDto) {
        int update = sqlSession.update("menu.updatereview", reviewDto);
        if (update == 0)
            return false;
        return true;
    }

    @Override
    public boolean deleteReview(int id) {
        int delete = sqlSession.delete("menu.deletereview", id);
        if (delete == 0)
            return false;
        return true;
    }
}
