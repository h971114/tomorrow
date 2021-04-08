package com.Tomorrow.myapp.dao;

import java.sql.SQLException;
import java.util.List;
import com.Tomorrow.myapp.model.WalletDto;

public interface WalletDao {
	public void join(String memberid) throws SQLException;
	public WalletDto walletinfo(String memberid) throws SQLException;
	public void delete(String memberid) throws SQLException;
}
