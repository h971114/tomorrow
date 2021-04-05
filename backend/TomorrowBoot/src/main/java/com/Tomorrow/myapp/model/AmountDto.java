package com.Tomorrow.myapp.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class AmountDto {
    private Integer total, tax_free, vat, point, discount;
}
