package  com.Tomorrow.myapp.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import  com.Tomorrow.myapp.model.NoticeDto;

public interface  NoticeService {

	boolean writeNotice(NoticeDto noticeDto) throws SQLException;

	List<NoticeDto> listNotice();

	NoticeDto getNoticeInfo(int noticeNo) throws SQLException;

	boolean updateNotice(NoticeDto noticeDto)  throws SQLException;

	boolean deleteNotice(int noticeNo);
}
