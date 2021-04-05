package com.Tomorrow.myapp.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@ToString
public class CartDto {
    private int id;
    private String member_id;
    private String menu_id;
    private String name;
    private String amount;
    private String price;
}
