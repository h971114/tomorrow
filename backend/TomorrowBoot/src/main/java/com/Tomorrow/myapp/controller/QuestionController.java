package com.Tomorrow.myapp.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.Tomorrow.myapp.model.QuestionDto;
import com.Tomorrow.myapp.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://j4a305.p.ssafy.io"})
@RequestMapping("/question")
public class QuestionController {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping("")
    public ResponseEntity<String> writeQuestion(@RequestBody QuestionDto questionDto) throws IOException, SQLException {
        String conclusion = "";
        Map<String, Object> questionMap = new HashMap<String, Object>();

        if(questionDto.getFile1()!=null) questionMap.put("file1", questionDto.getFile1().getBytes());
        if(questionDto.getFile2()!=null) questionMap.put("file2", questionDto.getFile2().getBytes());

        if(questionService.writeQuestion(questionDto, questionMap)) {
            conclusion = "SUCCESS";
        }
        else {
            conclusion = "FAIL";
        }
        return new ResponseEntity<String>(conclusion, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{writer}")
    public ResponseEntity<Map<String, Object>> listQuestion(@PathVariable("writer") String writer, HttpServletRequest req) throws SQLException {
        Map<String, Object> resultMap = new HashMap<>();
        List<QuestionDto> list = questionService.listQuestion(writer);

        if(list.size()>0) {
            resultMap.put("list", list);
            resultMap.put("conclusion", "SUCCESS");
        }else{
            resultMap.put("list",null);
            resultMap.put("conclusion", "FAIL");
        }
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    @GetMapping("")
    public ResponseEntity<Map<String, Object>> listAllQuestion(HttpServletRequest req) throws SQLException {
        Map<String, Object> resultMap = new HashMap<>();
        List<QuestionDto> list = questionService.listAllQuestion();

        if(list.size()>0) {
            resultMap.put("list", list);
            resultMap.put("conclusion", "SUCCESS");
        }else{
            resultMap.put("list",null);
            resultMap.put("conclusion", "FAIL");
        }
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }
    //문의사항 상세정보
    @ApiOperation(value = "문의사항 상세정보", notes = "문의사항 상세정보", response = Map.class)
    @GetMapping("/{no}")
    public ResponseEntity<QuestionDto> getQuestionInfo(@PathVariable(value="no") int no, HttpServletRequest req) throws SQLException {
        return new ResponseEntity<QuestionDto>(questionService.getQuestionInfo(no), HttpStatus.ACCEPTED);
    }

    //문의사항정보수정
    @ApiOperation(value = "문의사항 수정", notes = "문의사항 수정", response = Map.class)
    @PutMapping("")
    public ResponseEntity<String> updateQuestion(@RequestBody QuestionDto questionDto, HttpServletRequest req) throws SQLException, IOException {
        String conclusion = "";
        Map<String, Object> questionMap = new HashMap<String, Object>();
        if(questionDto.getFile1()!=null) questionMap.put("file1", questionDto.getFile1().getBytes());
        if(questionDto.getFile2()!=null) questionMap.put("file2", questionDto.getFile2().getBytes());

        if(questionService.updateQuestion(questionDto, questionMap)) {
            conclusion = "SUCCESS";
        }
        else {
            conclusion = "FAIL";
        }
        return new ResponseEntity<String>(conclusion, HttpStatus.ACCEPTED);
    }

    //공지사항삭제
    @ApiOperation(value = "문의사항삭제", notes = "문의사항삭제", response = Map.class)
    @DeleteMapping("/{no}")
    public ResponseEntity<String> deletequestion(@PathVariable(value="no") int no, HttpServletRequest req) throws SQLException {
        String conclusion = "";

        if(questionService.deleteQuestion(no))
            conclusion = "SUCCESS";
        else
            conclusion = "FAIL";

        return new ResponseEntity<String>(conclusion, HttpStatus.ACCEPTED);
    }
}
