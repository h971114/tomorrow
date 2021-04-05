package com.Tomorrow.myapp.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ReviewDto {
    private int no;
    private int menuid;
    private String date;
    private String writer;
    private String review;
}
