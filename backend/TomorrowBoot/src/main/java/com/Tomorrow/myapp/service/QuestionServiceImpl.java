package com.Tomorrow.myapp.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.Tomorrow.myapp.dao.QuestionDao;
import com.Tomorrow.myapp.model.QuestionDto;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService{

    private final QuestionDao questionDao;

    public QuestionServiceImpl(QuestionDao questionDao){
        this.questionDao = questionDao;
    }


    @Override
    public boolean  writeQuestion(QuestionDto questionDto, Map<String, Object> questionMap) throws SQLException {
        if(questionDao.writeQuestion(questionDto, questionMap)>0)
            return true;
        else
            return false;
    }

    @Override
    public List<QuestionDto> listQuestion(String writer) {
        return questionDao.listQuestion(writer);
    }

    @Override
    public List<QuestionDto> listAllQuestion() {
        return questionDao.listAllQuestion();
    }

    @Override
    public QuestionDto getQuestionInfo(int no) throws SQLException {
        return questionDao.getQuestionInfo(no);
    }

    @Override
    public boolean updateQuestion(QuestionDto questionDto, Map<String,Object> questionMap) throws SQLException {
        if(questionDao.updateQuestion(questionDto,questionMap)>0)
            return true;
        else
            return false;
    }

    @Override
    public boolean deleteQuestion(int no) throws SQLException {
        if(questionDao.deleteQuestion(no)>0)
            return true;
        else
            return false;
    }
}
