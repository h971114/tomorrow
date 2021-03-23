package com.Tomorrow.myapp.model;

public class MenuDto {
    private int id;
    private String seller_id;
    private String name;
    private int price;
    private int amount;      // 재고
    private int sell_amount; // 판매 수량
    private int discount_rate;
    private int todaysale;
    private String create_at;
    private String category;

    public MenuDto(int id, String seller_id, String name, int price, int amount, int sell_amount, int discount_rate, int todaysale, String create_at) {
        this.id = id;
        this.seller_id = seller_id;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.sell_amount = sell_amount;
        this.discount_rate = discount_rate;
        this.todaysale = todaysale;
        this.create_at = create_at;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSeller_id() {
        return seller_id;
    }

    public void setSeller_id(String seller_id) {
        this.seller_id = seller_id;
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

    public int getTodaysale() {
        return todaysale;
    }

    public void setTodaysale(int todaysale) {
        this.todaysale = todaysale;
    }

    public String getCreate_at() {
        return create_at;
    }

    public void setCreate_at(String create_at) {
        this.create_at = create_at;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "MenuDto{" +
                "id=" + id +
                ", seller_id='" + seller_id + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", amount=" + amount +
                ", sell_amount=" + sell_amount +
                ", discount_rate=" + discount_rate +
                ", todaysale=" + todaysale +
                ", create_at='" + create_at + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
