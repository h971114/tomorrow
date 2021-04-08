package com.Tomorrow.myapp.model;

public class Orderdetail {
    private String id;
    private String order_id;
    private String menu_id;
    private String name;
    private String amount;
    private String foodhash;
    private String partner_user_id;

    public Orderdetail(String id, String order_id, String menu_id, String name, String amount, String foodhash, String partner_user_id) {
        super();
        this.id = id;
        this.order_id = order_id;
        this.menu_id = menu_id;
        this.name = name;
        this.amount = amount;
        this.foodhash = foodhash;
        this.partner_user_id = partner_user_id;
    }

    public String getPartner_user_id() {
		return partner_user_id;
	}

	public void setPartner_user_id(String partner_user_id) {
		this.partner_user_id = partner_user_id;
	}

	public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getFoodhash() {
        return foodhash;
    }

    public void setFoodhash(String foodhash) {
        this.foodhash = foodhash;
    }
}
