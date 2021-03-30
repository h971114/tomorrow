package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;

import java.util.HashMap;
import java.util.List;

public interface MenuService {
    void insertMenu(MenuDto menu);
    void deleteMenu(String id);
    void updateMenu(MenuDto menu);

    MenuDto getMenuInfo(int id);
    List<MenuDto> getMenu();
    List<MenuDto> getMenuBySeller(String seller_id);
    List<MenuDto> getMenuByLowPrice();
    List<MenuDto> getMenuByHighPrice( );
    List<MenuDto> getMenuByBest();
    List<MenuDto> getMenuByNew();
    List<HashMap<String, Object>> getMenuBySale();
    List<HashMap<String, Object>> getMenuByTodaySale();
	List<MenuDto> getMenuByCategory(int keyword);

	List<ReviewDto> getReview(int id);
	boolean postReview(ReviewDto reviewDto);
	boolean updateReview(ReviewDto reviewDto);
	boolean deleteReview(int id);
}
