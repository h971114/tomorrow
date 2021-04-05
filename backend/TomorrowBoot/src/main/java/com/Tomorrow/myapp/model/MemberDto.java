package com.Tomorrow.myapp.model;

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

    public MemberDto() {

    }

    public MemberDto(String id, String pw, String name, String nickname, String mobile, String email) {
        super();
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.nickname = nickname;
        this.mobile = mobile;
        this.email = email;
    }

    public MemberDto(String id, String pw, String name, String nickname, String mobile, String email, String address) {
        super();
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.nickname = nickname;
        this.mobile = mobile;
        this.email = email;
        this.address = address;
    }

    public MemberDto(String id, String pw, String name, String nickname, String mobile, String email, String address,
                     int seller, String cert, int points) {
        super();
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.nickname = nickname;
        this.mobile = mobile;
        this.email = email;
        this.address = address;
        this.seller = seller;
        this.cert = cert;
        this.points = points;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "MemberDto [id=" + id + ", pw=" + pw + ", name=" + name + ", nickname=" + nickname + ", mobile=" + mobile
                + ", email=" + email + "]";
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCert() {
        return cert;
    }

    public void setCert(String cert) {
        this.cert = cert;
    }

    public int getSeller() {
        return seller;
    }

    public void setSeller(int seller) {
        this.seller = seller;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }


}
