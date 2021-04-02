package com.Tomorrow.myapp.controller;

import com.Tomorrow.myapp.model.MenuDetailDto;
import com.Tomorrow.myapp.service.MenuDetailService;
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

import javax.servlet.http.HttpServletRequest;

import java.sql.SQLException;
@RestController
@CrossOrigin(origins = {"http://localhost:3000","https://j4a305.p.ssafy.io"})
@RequestMapping("/menudetail")
public class MenuDetailController {
    private final MenuDetailService menuDetailService;

    @Autowired
    public MenuDetailController(MenuDetailService menuDetailService) {
        this.menuDetailService = menuDetailService;
    }

    /* 상품 Service: 등록 삭제 수정 */
    @PostMapping()
    public ResponseEntity<String> insertMenu(@RequestBody MenuDetailDto menu, HttpServletRequest req) {
        menuDetailService.insertMenuDetail(menu);
        return new ResponseEntity<String>("SUCCESS", HttpStatus.ACCEPTED);
    }

    @PutMapping()
    public ResponseEntity<String> updateMenu(@RequestBody MenuDetailDto menu, HttpServletRequest req) {
        menuDetailService.updateMenuDetail(menu);
        return new ResponseEntity<String>("SUCCESS", HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMenu(@PathVariable(value = "id") String id, HttpServletRequest req) {
        menuDetailService.deleteMenuDetail(id);
        return new ResponseEntity<String>("SUCCESS", HttpStatus.ACCEPTED);
    }

    /* 상품 조회: 상세*/
    @GetMapping("gm/{no}")
    public ResponseEntity<MenuDetailDto> getMenuInfo(@PathVariable(value = "no") int id, HttpServletRequest req) throws SQLException {
        return new ResponseEntity<MenuDetailDto>(menuDetailService.getMenuDetailInfo(Integer.toString(id)), HttpStatus.ACCEPTED);
    }
}
