package com.Tomorrow.myapp.controller;

import com.Tomorrow.myapp.model.AnswerDto;
import com.Tomorrow.myapp.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://j4a305.p.ssafy.io"})
@RequestMapping("/answer")
public class AnswerController {
    private final String SUCCESS = "SUCCESS";
    private final String FAIL = "FAIL";
    private final AnswerService answerService;

    public AnswerController(AnswerService answerService){
        this.answerService = answerService;
    }

    @PostMapping ("")
    public ResponseEntity<String> writeAnswer(@RequestBody AnswerDto answerDto) throws SQLException {
        String conclusion = "";
        if(answerService.writeAnswer(answerDto))
            conclusion = SUCCESS;
        else
            conclusion = FAIL;

        return new ResponseEntity<String>(conclusion, HttpStatus.ACCEPTED);
    }
    @GetMapping("/{no}")
    public ResponseEntity<Map<String, Object>>  getAnswerInfo(@PathVariable(value="no") int question_no) throws SQLException {
        Map<String, Object> resultMap = new HashMap<>();
        AnswerDto answerDto = answerService.getAnswerInfo(question_no);

        if(answerDto!=null) {
            resultMap.put("answer", answerDto);
            resultMap.put("conclusion", SUCCESS);
        }else{
            resultMap.put("answer",null);
            resultMap.put("conclusion", FAIL);
        }

        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    @PutMapping("/")
    public ResponseEntity<String> updateAnswer(@RequestBody AnswerDto answerDto) throws SQLException {
        String conclusion = "";

        if(answerService.updateAnswer(answerDto))
            conclusion = SUCCESS;
        else
            conclusion = FAIL;

        return new ResponseEntity<String>(conclusion, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{no}")
    public ResponseEntity<String> deleteAnswer(@PathVariable(value="no") int no) throws SQLException {
        String conclusion = "";

        if(answerService.deleteAnswer(no))
            conclusion = SUCCESS;
        else
            conclusion = FAIL;

        return new ResponseEntity<>(conclusion, HttpStatus.ACCEPTED);
    }
}
