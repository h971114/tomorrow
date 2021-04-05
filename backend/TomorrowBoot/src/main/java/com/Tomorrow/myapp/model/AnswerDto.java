package com.Tomorrow.myapp.model;

public class AnswerDto {
    private int no;
    private int question_no;
    private String detail;
    private String date;

    public AnswerDto(int no, int question_no, String detail, String date) {
        this.no = no;
        this.question_no = question_no;
        this.detail = detail;
        this.date = date;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public int getQuestionNo() {
        return question_no;
    }

    public void setQuestionNo(int question_no) {
        this.question_no = question_no;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "AnswerDto{" +
                "no=" + no +
                ", question_no=" + question_no +
                ", detail='" + detail + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}

