package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.dao.AnswerDao;
import com.Tomorrow.myapp.model.AnswerDto;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class AnswerServiceImpl implements AnswerService {

    private final AnswerDao answerDao;

    public AnswerServiceImpl(AnswerDao answerDao) {
        this.answerDao = answerDao;
    }

    @Override
    public boolean writeAnswer(AnswerDto answerDto) throws SQLException {
        if(answerDao.writeAnswer(answerDto)>0)
            return true;
        else
            return false;
    }

    @Override
    public AnswerDto getAnswerInfo(int question_no) {
        return answerDao.getAnswerInfo(question_no);
    }

    @Override
    public boolean updateAnswer(AnswerDto answerDto) throws SQLException {
        if(answerDao.updateAnswer(answerDto)>0)
            return true;
        else
            return false;
    }

    @Override
    public boolean deleteAnswer(int no) throws SQLException {
        if(answerDao.deleteAnswer(no)>0)
            return true;
        else
            return false;
    }
}
