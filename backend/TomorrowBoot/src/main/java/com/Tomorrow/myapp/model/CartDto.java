package com.Tomorrow.myapp.model;

public class CartDto {
    private int id;
    private String member_id;
    private String menu_id;
    private String name;
    private String amount;
    private String price;

    public CartDto(int id, String member_id, String menu_id, String name, String amount, String price) {
        this.id = id;
        this.member_id = member_id;
        this.menu_id = menu_id;
        this.name = name;
        this.amount = amount;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMember_id() {
        return member_id;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
