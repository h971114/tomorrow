package com.Tomorrow.myapp.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class NowPayDto {
	private String item_name,item_code;
	private int quantity, total_mount, tax_free_amount;
}
