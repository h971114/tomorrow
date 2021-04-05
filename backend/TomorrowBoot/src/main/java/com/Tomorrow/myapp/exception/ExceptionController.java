package com.Tomorrow.myapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.nio.file.AccessDeniedException;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
//@Slf4j
public class ExceptionController {
    private final String FAIL = "FAIL";

    // 400
    @ExceptionHandler({
            RuntimeException.class
    })
    public ResponseEntity<Object> BadRequestException(final RuntimeException ex) {
//        log.warn("error", ex);
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

    // 401
    @ExceptionHandler({AccessDeniedException.class })
    public ResponseEntity handleAccessDeniedException(final AccessDeniedException ex) {
//        log.warn("error", ex);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
    }

    // 500
    @ExceptionHandler({ Exception.class })
    public ResponseEntity<Map<String, Object>> handleAll(final Exception ex) {
//        log.info(ex.getClass().getName());
//        log.error("error", ex);

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("message", FAIL);
        resultMap.put("error", ex.getMessage());
        return new ResponseEntity<>(resultMap, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
