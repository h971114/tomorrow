package com.Tomorrow.myapp.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class WalletDto {
	private String owner_id;
	private String receiving_count;
	private String address;
	private String private_key;
}
