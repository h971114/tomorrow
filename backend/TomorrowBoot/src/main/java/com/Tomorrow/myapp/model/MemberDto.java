package com.Tomorrow.myapp.model;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class MemberDto {
	private String id;
	private String pw;
	private String name;
	private String nickname;
	private String mobile;
	private String email;
	private String address;
	private int seller;
	private String cert;
	private int points;

	public MemberDto(String id, String pw, String name, String nickname, String mobile, String email) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.nickname = nickname;
		this.mobile = mobile;
		this.email = email;
	}
}
