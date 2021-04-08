package com.Tomorrow.myapp.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.Tomorrow.myapp.dao.NoticeDao;
import com.Tomorrow.myapp.model.NoticeDto;

@Service
public class NoticeServiceImpl implements NoticeService {

    private final NoticeDao noticeDao;

    public NoticeServiceImpl(NoticeDao noticeDao) {
        this.noticeDao = noticeDao;
    }

    @Override
    public boolean writeNotice(NoticeDto noticeDto) throws SQLException {
        if(noticeDao.writeNotice(noticeDto)>0){
            return true;
        }else {
            return false;
        }
    }

    @Override
    public List<NoticeDto> listNotice() {
        return noticeDao.listNotice();
    }

    @Override
    public NoticeDto getNoticeInfo(int noticeNo) throws SQLException {
        return noticeDao.getNoticeInfo(noticeNo);
    }

    @Override
    public boolean updateNotice(NoticeDto noticeDto) throws SQLException {
        if(noticeDao.updateNotice(noticeDto)>0){
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteNotice(int noticeNo) {
        if(noticeDao.deleteNotice(noticeNo)>0){
            return true;
        }else {
            return false;
        }
    }
}
