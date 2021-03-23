package com.Tomorrow.myapp.controller;

import com.Tomorrow.myapp.model.CartDto;
import com.Tomorrow.myapp.model.MemberDto;
import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.service.CartService;
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
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }
    
    @PostMapping("/insert")
    public ResponseEntity<String> insertCart(@RequestBody CartDto cart, HttpServletRequest req){
    	HttpStatus hs = HttpStatus.ACCEPTED;
    	cartService.insertCart(cart);
    	return new ResponseEntity<String>("Success", hs);
    }
    
    
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteCart(@RequestBody CartDto cart, HttpServletRequest req){
    	HttpStatus hs = HttpStatus.ACCEPTED;
    	cartService.deleteCart(cart);
    	return new ResponseEntity<String>("Success", hs);
    }
    
    @GetMapping("/list")
    public ResponseEntity<List<CartDto>> getCart(@RequestParam("id") String id){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(cartService.getCartlist(id), hs);
    }

}
