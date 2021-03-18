package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.MenuDto;

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
}
