package com.Tomorrow.myapp.controller;

import com.Tomorrow.myapp.model.MemberDto;
import com.Tomorrow.myapp.model.MenuDetailDto;
import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;
import com.Tomorrow.myapp.service.MenuDetailService;
import com.Tomorrow.myapp.service.MenuService;
import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import retrofit2.http.Path;

import javax.servlet.http.HttpServletRequest;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","https://j4a305.p.ssafy.io"})
@RequestMapping("/menu")
public class MenuController {
    private final String SUCCESS = "SUCCESS";
    private final String FAIL = "FAIL";
    private final MenuService menuService;
    private final MenuDetailService menuDetailService;

    @Autowired
    public MenuController(MenuService menuService, MenuDetailService menuDetailService) {
        this.menuService = menuService;
        this.menuDetailService = menuDetailService;
    }

    /* 상품 Service: 등록 삭제 수정 */
    @PostMapping()
    public ResponseEntity<String> insertMenu(@RequestBody MenuDto menu, HttpServletRequest req) {
        menuService.insertMenu(menu);
        return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }

    @PutMapping()
    public ResponseEntity<String> updateMenu(@RequestBody MenuDto menu, HttpServletRequest req) {
        menuService.updateMenu(menu);
        return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMenu(@PathVariable(value = "id") String id, HttpServletRequest req) {
        menuService.deleteMenu(id);
        return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }

    /* 상품 조회: 상세, 전체, 판매자, 낮은가격, 높은가격, 베스트, 신상품, 세일, 오늘특가, 카테고리별*/
    @GetMapping("gm/{no}")
    public ResponseEntity<MenuDto> getMenuInfo(@PathVariable(value = "no") int id, HttpServletRequest req) throws SQLException {
        return new ResponseEntity<MenuDto>(menuService.getMenuInfo(id), HttpStatus.ACCEPTED);
    }
    @GetMapping("gmbi/{no}")
    public ResponseEntity<MenuDto> getMenubyid(@PathVariable(value = "no") int id, HttpServletRequest req) throws SQLException {
        return new ResponseEntity<MenuDto>(menuService.getMenubyid(id), HttpStatus.ACCEPTED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<MenuDto>> getMenu() {
        return new ResponseEntity<>(menuService.getMenu(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/seller")
    public ResponseEntity<List<MenuDto>> getMenuBySeller(@RequestParam("seller_id") String seller_id, HttpServletRequest req) {
        return new ResponseEntity<>(menuService.getMenuBySeller(seller_id), HttpStatus.ACCEPTED);
    }

    @GetMapping("/gmblp")
    public ResponseEntity<List<MenuDto>> getMenuByLowPrice() {
        return new ResponseEntity<>(menuService.getMenuByLowPrice(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/gmbhp")
    public ResponseEntity<List<MenuDto>> getMenuByHighPrice() {
        return new ResponseEntity<>(menuService.getMenuByHighPrice(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/gmbb")
    public ResponseEntity<List<MenuDto>> getMenuByBest() {
        return new ResponseEntity<>(menuService.getMenuByBest(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/gmbn")
    public ResponseEntity<List<MenuDto>> getMenuByNew() {
        return new ResponseEntity<>(menuService.getMenuByNew(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/gmbs") // 세일 상품
    public ResponseEntity<List<HashMap<String, Object>>> getMenuBySale() {
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuBySale(), hs);
    }

    @GetMapping("/gmbts") // 오늘만 특가
    public ResponseEntity<List<HashMap<String, Object>>> getMenuByTodaySale() {
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByTodaySale(), hs);
    }

    // 메뉴 검색
    @GetMapping("/gmbc")
    public ResponseEntity<Map<String, Object>> getMenuByCategory(@RequestParam(value = "keyword", defaultValue = "") String keyword,
                                                                 HttpServletRequest req) throws SQLException {
        Map<String, Object> conclusionMap = new HashMap<>();
        List<MenuDto> list = new ArrayList<>();
        if(keyword.equals(""))
            list = menuService.getMenuByCategory(0);
        else
            list = menuService.getMenuByCategory(Integer.parseInt(keyword));
        
        System.out.println(keyword);

        conclusionMap.put("list", list);
        if (list.size() != 0)
            conclusionMap.put("message", SUCCESS);
        else
            conclusionMap.put("message", FAIL);
        System.out.println(conclusionMap);
        return new ResponseEntity<>(conclusionMap, HttpStatus.ACCEPTED);
    }

    // 메뉴 검색
    @GetMapping("/gmbk")
    public ResponseEntity<Map<String, Object>> getMenuByKeyword(@RequestParam(value = "keyword", defaultValue = "") String keyword,
                                                                 HttpServletRequest req) throws SQLException {
        Map<String, Object> conclusionMap = new HashMap<>();
        List<MenuDto> list = new ArrayList<>();
            list = menuService.getMenuByKeyword(keyword);
        
        System.out.println(keyword);

        conclusionMap.put("list", list);
        if (list.size() != 0)
            conclusionMap.put("message", SUCCESS);
        else
            conclusionMap.put("message", FAIL);
        System.out.println(conclusionMap);
        return new ResponseEntity<Map<String, Object>>(conclusionMap, HttpStatus.ACCEPTED);
    }

    /* 리뷰 Service */
    // 리뷰 목록
    @GetMapping("/review")
    public ResponseEntity<Map<String, Object>> getReview(@RequestParam int id, HttpServletRequest req) throws SQLException {
        Map<String, Object> map = new HashMap<>();
        List<ReviewDto> list = menuService.getReview(id);
        if (list.size() > 0) {
            map.put("list", list);
            map.put("conclusion", SUCCESS);
        } else {
            map.put("list", null);
            map.put("conclusion", FAIL);
        }
        return new ResponseEntity<>(map, HttpStatus.ACCEPTED);
    }

    // 리뷰 쓰기
    @PostMapping("/review")
    public ResponseEntity<String> postReview(@RequestBody ReviewDto reviewDto, HttpServletRequest req) throws SQLException {
        String conclusion = "";
        if (menuService.postReview(reviewDto))
            conclusion = SUCCESS;
        else
            conclusion = FAIL;
        return new ResponseEntity<>(conclusion, HttpStatus.ACCEPTED);
    }

    // 리뷰 수정
    @PutMapping("/review")
    public ResponseEntity<String> updateReview(@RequestBody ReviewDto reviewDto, HttpServletRequest req) throws SQLException {
        String conclusion = "";
        if (menuService.updateReview(reviewDto))
            conclusion = SUCCESS;
        else
            conclusion = FAIL;
        return new ResponseEntity<>(conclusion, HttpStatus.ACCEPTED);
    }

    // 리뷰 삭제
    @DeleteMapping("/review")
    public ResponseEntity<String> deleteReview(@RequestParam(value = "id") int id, HttpServletRequest req) throws SQLException {
        String conclusion = "";
        if (menuService.deleteReview(id))
            conclusion = SUCCESS;
        else
            conclusion = FAIL;
        return new ResponseEntity<>(conclusion, HttpStatus.ACCEPTED);
    }

}
