package com.Tomorrow.myapp.controller;

import com.Tomorrow.myapp.model.CartDto;
import com.Tomorrow.myapp.model.MemberDto;
import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.service.CartService;
import com.Tomorrow.myapp.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    
    @PostMapping("")
    public ResponseEntity<String> insertCart(@RequestBody CartDto cart, HttpServletRequest req){
    	cartService.insertCart(cart);
    	return new ResponseEntity<String>("SUCCESS", HttpStatus.ACCEPTED);
    }
    
    
    @DeleteMapping("")
    public ResponseEntity<String> deleteCart(@RequestBody CartDto cart, HttpServletRequest req){
    	cartService.deleteCart(cart);
    	return new ResponseEntity<String>("SUCCESS", HttpStatus.ACCEPTED);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<List<CartDto>> getCart(@PathVariable String id){
        return new ResponseEntity<>(cartService.getCartlist(id), HttpStatus.ACCEPTED);
    }

}
