package com.Tomorrow.myapp.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
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
}
