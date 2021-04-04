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
@CrossOrigin(origins = {"http://localhost:3000", "https://j4a305.p.ssafy.io"})
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }
    //장바구니 담기
    @PostMapping()
    public ResponseEntity<String> insertCart(@RequestBody CartDto cart, HttpServletRequest req){
    	HttpStatus hs = HttpStatus.ACCEPTED;
    	cartService.insertCart(cart);
    	return new ResponseEntity<String>("Success", hs);
    }
    
    //장바구니 삭제
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteCart(@RequestBody CartDto cart, HttpServletRequest req){
    	HttpStatus hs = HttpStatus.ACCEPTED;
    	cartService.deleteCart(cart);
    	return new ResponseEntity<String>("Success", hs);
    }
    //장바구니 검색(전부긁어오기)
    @GetMapping("/list")
    public ResponseEntity<List<CartDto>> getCart(@RequestParam("member_id") String member_id){
        HttpStatus hs = HttpStatus.ACCEPTED;
        return new ResponseEntity<>(cartService.getCartlist(member_id), hs);
    }
    // 장바구니 갯수 검색
    @GetMapping("/count")
    public ResponseEntity<Integer> getCartCount(@RequestParam("member_id") String member_id){
        HttpStatus hs = HttpStatus.ACCEPTED;
        List<CartDto> cartlist =  cartService.getCartlist(member_id);
        System.out.println(cartlist);
       	int count = cartlist.size(); 
       	System.out.println(count);
        return new ResponseEntity<>(count, hs);
    }
}
