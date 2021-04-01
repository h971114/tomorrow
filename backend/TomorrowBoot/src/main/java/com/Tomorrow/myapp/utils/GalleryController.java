package com.Tomorrow.myapp.utils;

import com.Tomorrow.myapp.utils.GalleryService;
import com.amazonaws.SdkClientException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.annotations.ApiOperation;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/gallery")
public class GalleryController {
    private final GalleryService galleryService;

    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    @ApiOperation(value = "데이터 등록", notes = "데이터 등록")
    @RequestMapping(value=("/upload"), headers = ("content-type=multipart/form-data"), method=RequestMethod.POST)
    public ResponseEntity<HashMap<String, Object>> uploadGallery(@RequestParam("data") MultipartFile multipartFile,
                                                                 @RequestParam("hostid") String id,
                                                                 @RequestParam("dirNum") int dirNum) throws Exception, SQLException {

        // 현재 dirName: "static", 이후 페이지별 디렉토리 추가 가능
        String dirName = "static";
        if(dirNum == 0){
            dirName = "menu";
        }else if(dirNum == 1){
            dirName = "member";
        }else if(dirNum == 2) {
            dirName = "notice";
        }else if(dirNum == 3) {
            dirName = "review";
        }
        System.out.println("dirName = " + dirName+"/"+id);
        HashMap<String, Object> conclusionMap = new HashMap<>();
        try{
            conclusionMap.put("path", galleryService.upload(dirName, id, multipartFile));
            conclusionMap.put("message", "SUCCESS");
        } catch (Exception e){
            e.printStackTrace();
            conclusionMap.put("path","");
            conclusionMap.put("message", "FAIL");
        }
        return new ResponseEntity<>(conclusionMap, HttpStatus.ACCEPTED);
    }

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<String> handleMaxUploadSizeExceededException(Exception ex){
         return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                .contentType(MediaType.TEXT_PLAIN)
                .body("Message for user");
    }
}
