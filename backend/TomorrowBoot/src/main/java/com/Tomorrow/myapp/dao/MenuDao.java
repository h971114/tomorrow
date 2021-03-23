package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;

import java.util.List;

public interface MenuDao {
    // 베스트 상품, 신상품, 세일상품, 오늘의 특가, 낮은 가격, 높은 가격
    // 상품 등록
    public void insertMenu(MenuDto menuDto);
    // 상품 삭제
    public void deleteMenu(String id);
    // 상품 수정
    public void updateMenu(MenuDto menuDto);
    // 상품 가져오기
    public List<MenuDto> getMenu();
    public List<MenuDto> getMenubySeller(String id);
    // 상품 조건에 따라 가져오기(낮은가격,높은가격,베스트,신상품,세일상품,오늘의특가
    public List<MenuDto> getMenuByLowPrice();
    public List<MenuDto> getMenuByHighPrice( );
    public List<MenuDto> getMenuByBest();
    public List<MenuDto> getMenuByNew();
    public List<MenuDto> getMenuBySale();
    public List<MenuDto> getMenuByTodaySale();
	public void update(MenuDto menu);
	public MenuDto getMenuInfo(int id);
	public List<MenuDto> searchall(String keyword);
	public List<MenuDto> searchbyname(String keyword);
	public List<MenuDto> searchbyid(String keyword);
	public List<ReviewDto> getReview(int id);
	public boolean postReview(ReviewDto reviewDto);
	public boolean updateReview(ReviewDto reviewDto);
	public boolean deleteReview(int id);
}
