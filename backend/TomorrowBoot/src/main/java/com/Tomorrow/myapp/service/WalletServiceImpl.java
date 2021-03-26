package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.dao.WalletDao;
import com.Tomorrow.myapp.model.WalletDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class WalletServiceImpl implements WalletService{
    
	private final WalletDao walletDao;
	public WalletServiceImpl(WalletDao walletDao){
	    this.walletDao = walletDao;
    }
	@Override
	public WalletDto getWalletInfo(String memberId) throws SQLException {
		return walletDao.walletinfo(memberId);
	}
	@Override
	public boolean join(String memberid) {
		try {
			walletDao.join(memberid);
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
	@Override
	public void delete(String memberId) {
		try {
			walletDao.delete(memberId);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
