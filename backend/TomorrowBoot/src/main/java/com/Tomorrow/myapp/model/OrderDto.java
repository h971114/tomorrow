package com.Tomorrow.myapp.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
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
}
