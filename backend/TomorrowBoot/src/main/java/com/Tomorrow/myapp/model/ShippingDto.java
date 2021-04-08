package com.Tomorrow.myapp.model;

public class ShippingDto {
    private int id, status;
    private String name, order_id, menu_id, member_id, mobile, tracking_num, addr, etc, seller_id;

    public ShippingDto() {
    }

    public ShippingDto(int id, int status, String name, String order_id, String menu_id, String member_id, String mobile, String tracking_num, String addr, String etc, String seller_id) {
        this.id = id;
        this.status = status;
        this.name = name;
        this.order_id = order_id;
        this.menu_id = menu_id;
        this.member_id = member_id;
        this.mobile = mobile;
        this.tracking_num = tracking_num;
        this.addr = addr;
        this.etc = etc;
        this.seller_id = seller_id;
    }
    
    public ShippingDto(int id, int status, String name, String order_id, String menu_id, String member_id, String mobile, String tracking_num, String addr, String etc) {
        this.id = id;
        this.status = status;
        this.name = name;
        this.order_id = order_id;
        this.menu_id = menu_id;
        this.member_id = member_id;
        this.mobile = mobile;
        this.tracking_num = tracking_num;
        this.addr = addr;
        this.etc = etc;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrder_id() {
        return order_id;
    }

    public void setOrder_id(String order_id) {
        this.order_id = order_id;
    }

    public String getMenu_id() {
        return menu_id;
    }

    public void setMenu_id(String menu_id) {
        this.menu_id = menu_id;
    }

    public String getMember_id() {
        return member_id;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getTracking_num() {
        return tracking_num;
    }

    public void setTracking_num(String tracking_num) {
        this.tracking_num = tracking_num;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getEtc() {
        return etc;
    }

    public void setEtc(String etc) {
        this.etc = etc;
    }

    public String getSeller_id() {
        return seller_id;
    }

    public void setSeller_id(String seller_id) {
        this.seller_id = seller_id;
    }
}
