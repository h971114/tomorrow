package com.Tomorrow.myapp.model;

public class OrderDto {
    private String id;
    private String member_id;
    private String price;
    private String payment;
    private String time;
    private String payment_status;
    private String order_num;
    private String order_status;
    private String paymenthash;
    private String menu_name;
    public OrderDto() {

    }
    
    public String getMenu_name() {
		return menu_name;
	}

	public void setMenu_name(String menu_name) {
		this.menu_name = menu_name;
	}

	public OrderDto(String id, String member_id, String price, String payment, String time, String payment_status,
			String order_num, String order_status, String paymenthash, String menu_name) {
		super();
		this.id = id;
		this.member_id = member_id;
		this.price = price;
		this.payment = payment;
		this.time = time;
		this.payment_status = payment_status;
		this.order_num = order_num;
		this.order_status = order_status;
		this.paymenthash = paymenthash;
		this.menu_name = menu_name;
	}

	@Override
	public String toString() {
		return "OrderDto [id=" + id + ", member_id=" + member_id + ", price=" + price + ", payment=" + payment
				+ ", time=" + time + ", payment_status=" + payment_status + ", order_num=" + order_num
				+ ", order_status=" + order_status + ", paymenthash=" + paymenthash + ", menu_name=" + menu_name + "]";
	}

	public OrderDto(String id, String member_id, String price, String payment, String time, String payment_status) {
        super();
        this.id = id;
        this.member_id = member_id;
        this.price = price;
        this.payment = payment;
        this.time = time;
        this.payment_status = payment_status;
    }

    public OrderDto(String id, String member_id, String price, String payment, String time, String payment_status,
                    String order_num, String order_status, String paymenthash) {
        super();
        this.id = id;
        this.member_id = member_id;
        this.price = price;
        this.payment = payment;
        this.time = time;
        this.payment_status = payment_status;
        this.order_num = order_num;
        this.order_status = order_status;
        this.paymenthash = paymenthash;
    }

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

    public String getOrder_num() {
        return order_num;
    }

    public void setOrder_num(String order_num) {
        this.order_num = order_num;
    }

    public String getOrder_status() {
        return order_status;
    }

    public void setOrder_status(String order_status) {
        this.order_status = order_status;
    }

    public String getPaymenthash() {
        return paymenthash;
    }

    public void setPaymenthash(String paymenthash) {
        this.paymenthash = paymenthash;
    }
}
