package com.Tomorrow.myapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Tomorrow.myapp.model.MemberDto;

public interface MemberService {

	MemberDto getMemberInfo(String memberId);
    boolean join(MemberDto member);
    boolean login(MemberDto member);
    boolean sameId(String memberId);
    void delete(String memberId);
    void update(MemberDto member);
//    void logout(Long memberId);
	boolean sameNick(String memberNickname);
	String findid(MemberDto member);
	String findpw(MemberDto member);
	boolean sameEmail(String memberEmail);
	boolean sameCert(String memberCert);
}

