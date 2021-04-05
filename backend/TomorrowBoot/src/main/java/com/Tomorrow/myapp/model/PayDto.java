package com.Tomorrow.myapp.model;

import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PayDto {
	private String tid, next_redirect_pc_url;
    private Date created_at;
}
