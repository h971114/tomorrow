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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://j4a305.p.ssafy.io"})
@RequestMapping("/cart")
public class CartController {
    private final String SUCCESS = "SUCCESS";
    private final String FAIL = "FAIL";
    private final CartService cartService;
    private final MenuService menuService;

    @Autowired
    public CartController(CartService cartService, MenuService menuService) {
        this.cartService = cartService;
        this.menuService = menuService;
    }
    //장바구니 담기
    @PostMapping("")
    public ResponseEntity<String> insertCart(@RequestBody CartDto cartDto, HttpServletRequest req){
    	cartService.insertCart(cartDto);
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }
    
    //장바구니 삭제
    @DeleteMapping("")
    public ResponseEntity<String> deleteCart(@RequestBody CartDto cart, HttpServletRequest req){
    	cartService.deleteCart(cart);
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.ACCEPTED);
    }
    //장바구니 검색(전부긁어오기)
    @GetMapping("")
    public ResponseEntity<List<Map<String, String>>> getCart(@RequestParam("id") String id){
    	List<CartDto> carts = cartService.getCartlist(id);
    	List<Map<String, String>> resultmap = new ArrayList<Map<String,String>>();
    	for(CartDto cart : carts) {
    		Map<String, String> tmpmap = new HashMap<String, String>();
    		MenuDto tmpmenu = menuService.getMenubyid(Integer.parseInt(id));
    		tmpmap.put("id", id);
    		tmpmap.put("name", tmpmenu.getName());
    		tmpmap.put("price", Integer.toString(tmpmenu.getPrice()));
    		tmpmap.put("amount", cart.getAmount());
    		tmpmap.put("discount_rate", Integer.toString(tmpmenu.getDiscount_rate()));
    		tmpmap.put("category", Integer.toString(tmpmenu.getCategory()));
    		tmpmap.put("img1", tmpmenu.getImg1());
    		tmpmap.put("img2",tmpmenu.getImg2());
    		tmpmap.put("seller_id", tmpmenu.getSeller_id());
    		tmpmap.put("subname", tmpmenu.getSubname());
    		tmpmap.put("create_at", tmpmenu.getCreate_at());
    		resultmap.add(tmpmap);
    	}
        return new ResponseEntity<>(resultmap, HttpStatus.ACCEPTED);
    }
    // 장바구니 갯수 검색
    @GetMapping("/count")
    public ResponseEntity<Integer> getCartCount(@RequestParam("id") String id){
        List<CartDto> cartlist = new ArrayList<>();
        cartlist = cartService.getCartlist(id);
        return new ResponseEntity<>(cartlist.size(), HttpStatus.ACCEPTED);
    }
}
