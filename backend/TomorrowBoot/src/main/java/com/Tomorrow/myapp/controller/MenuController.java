package com.Tomorrow.myapp.controller;

import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.service.MenuService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
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

}
