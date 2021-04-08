package com.Tomorrow.myapp.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.Tomorrow.myapp.model.QuestionDto;

public interface QuestionDao {
    public int writeQuestion(QuestionDto questionDto, Map<String, Object> questionMap)  throws SQLException;

    public List<QuestionDto> listQuestion(String writer);

    public List<QuestionDto> listAllQuestion();

    public QuestionDto getQuestionInfo(int no);

    public int updateQuestion(QuestionDto questionDto, Map<String,Object> questionMap);

    public int deleteQuestion(int no) throws SQLException;
}