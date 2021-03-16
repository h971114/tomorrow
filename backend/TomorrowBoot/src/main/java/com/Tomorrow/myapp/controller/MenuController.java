package com.Tomorrow.myapp.controller;

import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("menu")
public class MenuController {
    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping("")
    public ResponseEntity<List<MenuDto>> getMenu(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenu(), hs);
    }

    @GetMapping("")
    public ResponseEntity<List<MenuDto>> getMenuByLowPrice(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByLowPrice(), hs);
    }

    @GetMapping("")
    public ResponseEntity<List<MenuDto>> getMenuByHighPrice(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByHighPrice(), hs);
    }

    @GetMapping("")
    public ResponseEntity<List<MenuDto>> getMenuByBest(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByBest(), hs);
    }

    @GetMapping("")
    public ResponseEntity<List<MenuDto>> getMenuByNew(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByNew(), hs);
    }

    @GetMapping("")
    public ResponseEntity<List<MenuDto>> getMenuBySale(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuBySale(), hs);
    }

    @GetMapping("")
    public ResponseEntity<List<MenuDto>> getMenuByTodaySale(){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(menuService.getMenuByTodaySale(), hs);
    }

}
