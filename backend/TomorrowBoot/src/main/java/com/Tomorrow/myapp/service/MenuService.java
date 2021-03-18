package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;

import java.util.HashMap;
import java.util.List;

public interface MenuService {
    List<MenuDto> getMenu();
    List<MenuDto> getMenuByLowPrice();
    List<MenuDto> getMenuByHighPrice( );
    List<MenuDto> getMenuByBest();
    List<MenuDto> getMenuByNew();
    List<HashMap<String, Object>> getMenuBySale();
    List<HashMap<String, Object>> getMenuByTodaySale();
	void menuUpdate(MenuDto menu);
	MenuDto getMenuInfo(int id);
	List<MenuDto> searchAll(String keyword);
	List<MenuDto> searchByName(String keyword);
	List<MenuDto> searchById(String keyword);
	List<ReviewDto> getReview(int id);
	boolean postReview(ReviewDto reviewDto);
	boolean updateReview(ReviewDto reviewDto);
	boolean deleteReview(int id);
}
