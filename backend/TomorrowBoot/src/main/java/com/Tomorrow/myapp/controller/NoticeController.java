package com.Tomorrow.myapp.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Tomorrow.myapp.model.NoticeDto;
import com.Tomorrow.myapp.service.NoticeService;

import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://j4a305.p.ssafy.io"})
@RequestMapping("/notice")
public class NoticeController {
    private final NoticeService noticeService;

    @Autowired
    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    /**
	 *
	 * @param noticeDto: 공지사항 정보
	 *
	 */
    @ApiOperation(value = "공지사항 등록", notes = "공지사항 등록", response = Map.class)
    @PostMapping(value = ("/"))
    public ResponseEntity<String> writeNotice(@RequestBody NoticeDto noticeDto) throws SQLException {
        String conclusion = "";
        if (noticeService.writeNotice(noticeDto)) {
            conclusion = "SUCCESS";
        } else {
            conclusion = "FAIL";
        }
        return new ResponseEntity<String>(conclusion, HttpStatus.ACCEPTED);
    }

    @ApiOperation(value = "공지사항 목록", notes = "공지사항 목록", response = List.class)
    @GetMapping("/list")
    public ResponseEntity<List<NoticeDto>> listNotice() throws SQLException {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put(("conclusion"), "SUCCESS");
        resultMap.put(("notice"), noticeService.listNotice());
        return new ResponseEntity<>(noticeService.listNotice(), HttpStatus.ACCEPTED);
    }

    //공지사항 상세정보
    @ApiOperation(value = "공지사항 상세정보", notes = "공지사항 상세정보", response = Map.class)
    @GetMapping("/{no}")
    public ResponseEntity<NoticeDto> getNoticeInfo(@PathVariable(value = "no") int noticeNo) throws SQLException, IOException {
        return new ResponseEntity<NoticeDto>(noticeService.getNoticeInfo(noticeNo), HttpStatus.ACCEPTED);
    }

    //공지사항정보수정
    @ApiOperation(value = "공지사항 수정", notes = "공지사항 수정", response = Map.class)
    @PutMapping("")
    public ResponseEntity<String> updateNotice(@RequestBody NoticeDto noticeDto) throws SQLException, IOException {
        String conclusion = "";
        if (noticeService.updateNotice(noticeDto)) {
            conclusion = "SUCCESS";
        } else {
            conclusion = "FAIL";
        }
        return new ResponseEntity<String>(conclusion, HttpStatus.ACCEPTED);
    }

    //공지사항삭제
    @ApiOperation(value = "공지사항삭제", notes = "공지사항삭제", response = Map.class)
    @DeleteMapping("/{no}")
    public ResponseEntity<String> deletenotice(@PathVariable(value = "no") int noticeNo) {
        String conclusion = "";
        if(noticeService.deleteNotice(noticeNo)){
        	conclusion = "SUCCESS";
		}else {
        	conclusion = "FAIL";
		}
        return new ResponseEntity<>(conclusion, HttpStatus.ACCEPTED);
    }

}
