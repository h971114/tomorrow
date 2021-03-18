package com.Tomorrow.myapp.controller;

import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;
import com.Tomorrow.myapp.service.MenuService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
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

import javax.servlet.http.HttpServletRequest;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/menu")
public class MenuController {
    private static Log log = LogFactory.getLog(MenuController.class);

    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<MenuDto>> getMenu(){
        return new ResponseEntity<>(menuService.getMenu(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/low-price")
    public ResponseEntity<List<MenuDto>> getMenuByLowPrice(){
        return new ResponseEntity<>(menuService.getMenuByLowPrice(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/high-price")
    public ResponseEntity<List<MenuDto>> getMenuByHighPrice(){
        return new ResponseEntity<>(menuService.getMenuByHighPrice(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/best")
    public ResponseEntity<List<MenuDto>> getMenuByBest(){
        return new ResponseEntity<>(menuService.getMenuByBest(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/new")
    public ResponseEntity<List<MenuDto>> getMenuByNew(){
        return new ResponseEntity<>(menuService.getMenuByNew(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/sale")
    public ResponseEntity getMenuBySale(){
        return new ResponseEntity<>(menuService.getMenuBySale(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/today-sale")
    public ResponseEntity getMenuByTodaySale(){
        return new ResponseEntity<>(menuService.getMenuByTodaySale(), HttpStatus.ACCEPTED);
    }
    //메뉴 상세정보
	  @GetMapping("data/{no}")
	  public ResponseEntity<MenuDto> getMeetingInfo(@PathVariable(value="no") int id, HttpServletRequest req) throws SQLException {
		    HttpStatus status = HttpStatus.ACCEPTED;
			 MenuDto menu = menuService.getMenuInfo(id);
		    return new ResponseEntity<MenuDto>(menu, status);
	  }
	  //메뉴정보수정
	  @PutMapping("")
	  public ResponseEntity<String> updateMeeting(@RequestBody MenuDto menu, HttpServletRequest req) {
	    String conclusion = "SUCCESS";
	    HttpStatus status = HttpStatus.ACCEPTED;
	    menuService.menuUpdate(menu);
	    return new ResponseEntity<String>(conclusion, status);
	  }
	  // 메뉴 검색
		@GetMapping("/search")
		public ResponseEntity<Map<String, Object>> searchMeeting( @RequestParam(value = "condition", defaultValue = "0") int num,
													 @RequestParam(value = "keyword", defaultValue = "") String keyword,
													 HttpServletRequest req) throws SQLException {
			HttpStatus status = HttpStatus.ACCEPTED;
			Map<String, Object> conclusionMap = new HashMap<>();
			List<MenuDto> list = new ArrayList<>();
			if(num==0){//전체검색
				list = menuService.searchAll(keyword);
			}
			else if(num==1){ // 제목으로 검색
				list = menuService.searchByName(keyword);
			}else { // 아이디로 검색
				list = menuService.searchById(keyword);
			}
			conclusionMap.put("list", list);
			if(list.size() != 0) conclusionMap.put("message", "SUCCESS");
			else conclusionMap.put("message", "FAIL");
			System.out.println(conclusionMap.get("message"));
			for(MenuDto menu : list)
				System.out.println(menu.toString());
			return new ResponseEntity<Map<String, Object>>(conclusionMap, status);
		}
		// 리뷰 목록
		@GetMapping("/review")
		public ResponseEntity<Map<String, Object>> getReview(@RequestParam int id, HttpServletRequest req) throws SQLException {
			Map<String, Object> map = new HashMap<>();
			HttpStatus httpStatus = HttpStatus.ACCEPTED;
			List<ReviewDto> list = menuService.getReview(id);
			System.out.println("get /review");
			if(list.size()>0) {
				for(ReviewDto reviewDto : list)
					System.out.println("reviewDto.getReview() = " + reviewDto.getReview());
				map.put("list", list);
				map.put("conclusion", "SUCCESS");
			}
			else {
				map.put("list", null);
				map.put("conclusion", "FAIL");
			}
			return new ResponseEntity<>(map, httpStatus);
		}
		// 리뷰 쓰기
		@PostMapping("/review")
		public ResponseEntity<String> postReview(@RequestBody ReviewDto reviewDto, HttpServletRequest req) throws SQLException {
			String conclusion = "";
			HttpStatus httpStatus = HttpStatus.ACCEPTED;
			System.out.println("post /review");
			if(menuService.postReview(reviewDto))
				conclusion = "SUCCESS";
			else
				conclusion = "FAIL";
			return new ResponseEntity<>(conclusion, httpStatus);
		}
		// 리뷰 수정
		@PutMapping("/review")
		public ResponseEntity<String> updateReview(@RequestBody ReviewDto reviewDto, HttpServletRequest req) throws SQLException {
			String conclusion = "";
			HttpStatus httpStatus = HttpStatus.ACCEPTED;
			System.out.println("put /review");
			if(menuService.updateReview(reviewDto))
				conclusion = "SUCCESS";
			else
				conclusion = "FAIL";
			return new ResponseEntity<>(conclusion, httpStatus);
		}
		// 리뷰 삭제
		@DeleteMapping("/review")
		public ResponseEntity<String> deleteReview(@RequestParam(value = "id") int id, HttpServletRequest req) throws SQLException {
			String conclusion = "";
			HttpStatus httpStatus = HttpStatus.ACCEPTED;
			System.out.println("del /review");
			if(menuService.deleteReview(id))
				conclusion = "SUCCESS";
			else
				conclusion = "FAIL";
			return new ResponseEntity<>(conclusion, httpStatus);
		}
}
