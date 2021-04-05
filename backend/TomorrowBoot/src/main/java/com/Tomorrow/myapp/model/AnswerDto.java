package com.Tomorrow.myapp.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class AnswerDto {
    private int no;
    private int question_no;
    private String detail;
    private String date;
}

