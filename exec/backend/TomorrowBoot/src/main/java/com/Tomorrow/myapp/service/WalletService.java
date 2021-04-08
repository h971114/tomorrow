package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.WalletDto;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Service;

public interface WalletService {

	WalletDto getWalletInfo(String memberId) throws SQLException;
    boolean join(String memberid);
    void delete(String memberId);
}

