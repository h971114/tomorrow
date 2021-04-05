package com.Tomorrow.myapp.model;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class QuestionDto {
    private int ROWNUM;
    private int no;
    private String title;
    private String detail;
    private String writer;
    private String date;
    private MultipartFile file1;
    private MultipartFile file2;
}