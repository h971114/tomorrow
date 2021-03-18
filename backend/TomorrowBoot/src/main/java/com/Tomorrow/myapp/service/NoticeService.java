package  com.Tomorrow.myapp.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import  com.Tomorrow.myapp.model.NoticeDto;

public interface  NoticeService {

	boolean writeNotice(NoticeDto notice, Map<String,Object> noticemap);

	List<NoticeDto> listNotice();

	NoticeDto getNoticeInfo(int noticeno) throws SQLException;

	boolean update(NoticeDto notice, Map<String,Object> noticemap)  throws SQLException;

	void delete(int noticeno);
	 Map<String, Object> getByteImage();
}
