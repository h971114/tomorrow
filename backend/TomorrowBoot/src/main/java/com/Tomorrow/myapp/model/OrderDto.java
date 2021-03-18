package com.Tomorrow.myapp.model;

public class OrderDto {
	public OrderDto(String id, String member_id, String price, String payment, String time, String payment_status) {
		super();
		this.id = id;
		this.member_id = member_id;
		this.price = price;
		this.payment = payment;
		this.time = time;
		this.payment_status = payment_status;
	}
	private String id;
	private String member_id;
	private String price;
	private String payment;
	private String time;
	private String payment_status;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMember_id() {
		return member_id;
	}
	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getPayment() {
		return payment;
	}
	public void setPayment(String payment) {
		this.payment = payment;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getPayment_status() {
		return payment_status;
	}
	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}
}
