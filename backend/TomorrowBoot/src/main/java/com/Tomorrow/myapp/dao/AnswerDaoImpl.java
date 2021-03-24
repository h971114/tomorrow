package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.AnswerDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;

@Repository
public class AnswerDaoImpl implements AnswerDao{

    @Autowired
    private SqlSession sqlSession;

    @Override
    public int writeAnswer(AnswerDto answerDto) throws SQLException {
        return sqlSession.insert("answer.writeAnswer", answerDto);
    }

    @Override
    public AnswerDto getAnswerInfo(int question_no) {
        return sqlSession.selectOne("answer.getAnswerInfo", question_no);
    }

    @Override
    public int updateAnswer(AnswerDto answerDto) throws SQLException {
        return sqlSession.update("answer.updateAnswer", answerDto);
    }

    @Override
    public int deleteAnswer(int no) throws SQLException {
        return sqlSession.delete("answer.deleteAnswer", no);
    }
}
