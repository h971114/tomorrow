package com.Tomorrow.myapp.controller;

import com.Tomorrow.myapp.model.MemberDto;
import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/menu")
public class MenuController {
    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }
    
//    @PostMapping("/insert")
//    public ResponseEntity<String> insertMenu(@RequestBody MenuDto menu, HttpServletRequest req){
//    	HttpStatus hs = HttpStatus.ACCEPTED;
//    	menuService.insertMenu(menu);
//    	return new ResponseEntity<String>("Success", hs);
//    }
//    
//    @PutMapping("/update")
//    public ResponseEntity<String> updateMenu(@RequestBody MenuDto menu, HttpServletRequest req){
//    	HttpStatus hs = HttpStatus.ACCEPTED;
//    	menuService.updateMenu(menu);
//    	return new ResponseEntity<String>("Success", hs);
//    }
//    
//    @DeleteMapping("/delete")
//    public ResponseEntity<String> deleteMenu(@RequestParam("id") String id, HttpServletRequest req){
//    	HttpStatus hs = HttpStatus.ACCEPTED;
//    	menuService.deleteMenu(id);
//    	return new ResponseEntity<String>("Success", hs);
//    }
//    
    @GetMapping("/gm")
    public ResponseEntity<List<MenuDto>> getMenu(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenu(), hs);
    }

    @GetMapping("/gnblp")
    public ResponseEntity<List<MenuDto>> getMenuByLowPrice(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByLowPrice(), hs);
    }

    @GetMapping("/gmbhp")
    public ResponseEntity<List<MenuDto>> getMenuByHighPrice(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByHighPrice(), hs);
    }

    @GetMapping("/gmbb")
    public ResponseEntity<List<MenuDto>> getMenuByBest(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByBest(), hs);
    }

    @GetMapping("/gmbn")
    public ResponseEntity<List<MenuDto>> getMenuByNew(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByNew(), hs);
    }

//    @GetMapping("/gmbs")
//    public ResponseEntity<List<MenuDto>> getMenuBySale(){
//        HttpStatus hs = HttpStatus.ACCEPTED;
//        return new ResponseEntity<>(menuService.getMenuBySale(), hs);
//    }
//
//    @GetMapping("/gmbts")
//    public ResponseEntity<List<MenuDto>> getMenuByTodaySale(){
//        HttpStatus hs = HttpStatus.ACCEPTED;
//        return new ResponseEntity<>(menuService.getMenuByTodaySale(), hs);
//    }

}
