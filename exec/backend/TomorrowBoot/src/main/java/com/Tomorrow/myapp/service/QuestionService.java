package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.QuestionDto;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;


public interface QuestionService {
    boolean writeQuestion(QuestionDto questionDto, Map<String, Object> questionMap) throws SQLException;

    List<QuestionDto> listQuestion(String writer);

    List<QuestionDto> listAllQuestion();

    QuestionDto getQuestionInfo(int no) throws SQLException;

    boolean updateQuestion(QuestionDto questionDto, Map<String,Object> questionMap)  throws SQLException;

    boolean deleteQuestion(int no) throws SQLException;
}
