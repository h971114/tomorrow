package com.Tomorrow.myapp.model;

import org.springframework.web.multipart.MultipartFile;

public class QuestionDto {

    private int ROWNUM;
    private int no;
    private String title;
    private String detail;
    private String writer;
    private String date;
    private MultipartFile file1;
    private MultipartFile file2;

    public QuestionDto(int no, String title, String detail, String writer, String date, MultipartFile file1, MultipartFile file2) {
        this.no = no;
        this.title = title;
        this.detail = detail;
        this.writer = writer;
        this.date = date;
        this.file1 = file1;
        this.file2 = file2;
    }

    public int getROWNUM() {
        return ROWNUM;
    }
    public void setROWNUM(int rnum) {
        ROWNUM = rnum;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public MultipartFile getFile1() {
        return file1;
    }

    public void setFile1(MultipartFile file1) {
        this.file1 = file1;
    }

    public MultipartFile getFile2() {
        return file2;
    }

    public void setFile2(MultipartFile file2) {
        this.file2 = file2;
    }

    @Override
    public String toString() {
        return "QuestionDto{" +
                "ROWNUM=" + ROWNUM +
                ", no=" + no +
                ", title='" + title + '\'' +
                ", detail='" + detail + '\'' +
                ", writer='" + writer + '\'' +
                ", date='" + date + '\'' +
                ", file1=" + file1 +
                ", file2=" + file2 +
                '}';
    }
}