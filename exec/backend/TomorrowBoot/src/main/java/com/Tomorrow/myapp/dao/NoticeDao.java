package  com.Tomorrow.myapp.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import  com.Tomorrow.myapp.model.NoticeDto;

public interface NoticeDao {

	public int writeNotice(NoticeDto noticeDto)  throws SQLException;

	public List<NoticeDto> listNotice();

	public NoticeDto getNoticeInfo(int noticeNo);

	public int updateNotice(NoticeDto noticeDto);

	public int deleteNotice(int noticeNo);
}
