package com.Tomorrow.myapp.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.Tomorrow.myapp.model.QuestionDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class QuestionDaoImpl implements QuestionDao{

    @Autowired
    private SqlSession sqlSession;

    @Override
    public int writeQuestion(QuestionDto question, Map<String, Object> questionMap)  throws SQLException{
        int ret = 0;
        ret += sqlSession.insert("question.writeQuestion",question);
        if(ret>0 && questionMap.get("file1") != null) sqlSession.insert("question.putImage",questionMap);

        return ret;
    }
    @Override
    public List<QuestionDto> listQuestion(String writer) {
        return sqlSession.selectList("question.listQuestion", writer);
    }

    @Override
    public List<QuestionDto> listAllQuestion() {
        return sqlSession.selectList("question.listAllQuestion");
    }

    @Override
    public QuestionDto getQuestionInfo(int no) {
        return sqlSession.selectOne("question.getQuestionInfo", no);
    }

    @Override
    public int updateQuestion(QuestionDto questionDto, Map<String,Object> questionMap) {
        int ret = 0;
        ret += sqlSession.update("question.updateQuestion",questionDto);
        ret += sqlSession.update("question.updateQuestionFile",questionMap);

        return ret;
    }

    @Override
    public int deleteQuestion(int no) throws SQLException{
        return sqlSession.delete("question.deleteQuestion", no);
    }
}