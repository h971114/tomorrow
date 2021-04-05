package com.Tomorrow.myapp.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Orderdetail {
	private String id;
	private String order_id;
	private String menu_id;
	private String name;
	private String amount;
	private String foodhash;
}
