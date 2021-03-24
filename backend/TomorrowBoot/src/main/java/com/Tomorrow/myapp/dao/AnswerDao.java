package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.AnswerDto;

import java.sql.SQLException;

public interface AnswerDao {

    int writeAnswer(AnswerDto answerDto) throws SQLException;

    AnswerDto getAnswerInfo(int question_no);

    int updateAnswer(AnswerDto answerDto) throws SQLException;

    int deleteAnswer(int no) throws SQLException;

}