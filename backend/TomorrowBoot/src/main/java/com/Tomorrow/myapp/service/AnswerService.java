package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.AnswerDto;

import java.sql.SQLException;

public interface AnswerService {
    boolean writeAnswer(AnswerDto answerDto) throws SQLException;

    AnswerDto getAnswerInfo(int question_no);

    boolean updateAnswer(AnswerDto answerDto) throws SQLException;

    boolean deleteAnswer(int no) throws SQLException;
}
