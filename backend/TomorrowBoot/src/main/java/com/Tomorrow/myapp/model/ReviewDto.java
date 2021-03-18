package com.Tomorrow.myapp.model;

public class ReviewDto {
    private int no;
    private int menuid;
    private String date;
    private String writer;
    private String review;

    public ReviewDto() {
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public int getMenuid() {
        return menuid;
    }

    public void setMeetingno(int menuid) {
        this.menuid = menuid;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    @Override
    public String toString() {
        return "ReviewDto{" +
                "no=" + no +
                ", menuid=" + menuid +
                ", date='" + date + '\'' +
                ", writer='" + writer + '\'' +
                ", review='" + review + '\'' +
                '}';
    }
}
