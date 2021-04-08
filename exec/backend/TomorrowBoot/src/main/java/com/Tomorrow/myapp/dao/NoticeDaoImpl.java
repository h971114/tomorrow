package  com.Tomorrow.myapp.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import  com.Tomorrow.myapp.model.NoticeDto;

@Repository
public class NoticeDaoImpl implements NoticeDao{

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public int writeNotice(NoticeDto noticeDto)  throws SQLException{
		return sqlSession.insert("notice.writeNotice", noticeDto);
	}

	@Override
	public List<NoticeDto> listNotice() {
		return sqlSession.selectList("notice.listNotice");
	}

	@Override
	public NoticeDto getNoticeInfo(int noticeNo) {
		return sqlSession.selectOne("notice.getNoticeInfo",noticeNo);
	}

	@Override
	public int updateNotice(NoticeDto noticeDto) {
		return sqlSession.update("notice.updateNotice", noticeDto);
	}

	@Override
	public int deleteNotice(int noticeNo) {
		return sqlSession.delete("notice.deleteNotice", noticeNo);
	}
}
