package com.Tomorrow.myapp.model;

public class MenuDto {

	private int id;
    private String name;
    private int price;
    private int amount;      // 재고
    private int sell_amount; // 판매 수량
    private int discount_rate;
    private int today_discount_rate;
    private String todaysale;
    private String create_at;
    private int category;
    private String img1;
    private String img2;
    private String seller_id;
    private String data;
    private String subname;
    private String detail;
    private int shipping_fee;

    public MenuDto() {
    }

    public MenuDto(int id, String name, int price, int amount, int sell_amount, int discount_rate, int today_discount_rate, String todaysale, String create_at, int category, String img1, String img2, String seller_id, String data, String subname, String detail, int shipping_fee) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.sell_amount = sell_amount;
        this.discount_rate = discount_rate;
        this.today_discount_rate = today_discount_rate;
        this.todaysale = todaysale;
        this.create_at = create_at;
        this.category = category;
        this.img1 = img1;
        this.img2 = img2;
        this.seller_id = seller_id;
        this.data = data;
        this.subname = subname;
        this.detail = detail;
        this.shipping_fee = shipping_fee;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getSell_amount() {
        return sell_amount;
    }

    public void setSell_amount(int sell_amount) {
        this.sell_amount = sell_amount;
    }

    public int getDiscount_rate() {
        return discount_rate;
    }

    public void setDiscount_rate(int discount_rate) {
        this.discount_rate = discount_rate;
    }

    public int getToday_discount_rate() {
        return today_discount_rate;
    }

    public void setToday_discount_rate(int today_discount_rate) {
        this.today_discount_rate = today_discount_rate;
    }

    public String getTodaysale() {
        return todaysale;
    }

    public void setTodaysale(String todaysale) {
        this.todaysale = todaysale;
    }

    public String getCreate_at() {
        return create_at;
    }

    public void setCreate_at(String create_at) {
        this.create_at = create_at;
    }

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    public String getImg1() {
        return img1;
    }

    public void setImg1(String img1) {
        this.img1 = img1;
    }

    public String getImg2() {
        return img2;
    }

    public void setImg2(String img2) {
        this.img2 = img2;
    }

    public String getSeller_id() {
        return seller_id;
    }

    public void setSeller_id(String seller_id) {
        this.seller_id = seller_id;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getSubname() {
        return subname;
    }

    public void setSubname(String subname) {
        this.subname = subname;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public int getShipping_fee() {
        return shipping_fee;
    }

    public void setShipping_fee(int shipping_fee) {
        this.shipping_fee = shipping_fee;
    }

    @Override
    public String toString() {
        return "MenuDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", amount=" + amount +
                ", sell_amount=" + sell_amount +
                ", discount_rate=" + discount_rate +
                ", today_discount_rate=" + today_discount_rate +
                ", todaysale='" + todaysale + '\'' +
                ", create_at='" + create_at + '\'' +
                ", category=" + category +
                ", img1='" + img1 + '\'' +
                ", img2='" + img2 + '\'' +
                ", seller_id='" + seller_id + '\'' +
                ", data='" + data + '\'' +
                ", subname='" + subname + '\'' +
                ", detail='" + detail + '\'' +
                ", shipping_fee=" + shipping_fee +
                '}';
    }
}
