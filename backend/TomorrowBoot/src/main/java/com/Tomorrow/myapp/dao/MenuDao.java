package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;
import com.Tomorrow.myapp.model.WalletDto;

import java.util.List;

public interface MenuDao {
    // 상품: 등록 삭제 수정
    public void insertMenu(MenuDto menuDto);
    public void deleteMenu(String id);
    public void updateMenu(MenuDto menuDto);

    // 상품 검색(낮은가격,높은가격,베스트,신상품,세일상품,오늘의특가,카테고리)
    public MenuDto getMenuInfo(int id);
    public List<MenuDto> getMenu();
    public List<MenuDto> getMenuBySeller(String seller_id);
    public List<MenuDto> getMenuByLowPrice();
    public List<MenuDto> getMenuByHighPrice( );
    public List<MenuDto> getMenuByBest();
    public List<MenuDto> getMenuByNew();
    public List<MenuDto> getMenuBySale();
    public List<MenuDto> getMenuByTodaySale();
	public List<MenuDto> getMenuByCategory(int keyword);

	// 리뷰
	public List<ReviewDto> getReview(int id);
	public boolean postReview(ReviewDto reviewDto);
	public boolean updateReview(ReviewDto reviewDto);
	public boolean deleteReview(int id);
}
