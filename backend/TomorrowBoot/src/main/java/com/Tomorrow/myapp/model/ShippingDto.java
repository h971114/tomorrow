package com.Tomorrow.myapp.model;

public class ShippingDto {
	private int id;
	private String order_id, member_id, mobile, tracking_num,addr,etc;
	
	
	
	
	
	
	public ShippingDto() {
		super();
	}
	
	
	
	public ShippingDto(int id, String order_id, String member_id, String mobile, String tracking_num, String addr,
			String etc) {
		super();
		this.id = id;
		this.order_id = order_id;
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
	public String getOrder_id() {
		return order_id;
	}
	public void setOrder_id(String order_id) {
		this.order_id = order_id;
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
	
	
}
