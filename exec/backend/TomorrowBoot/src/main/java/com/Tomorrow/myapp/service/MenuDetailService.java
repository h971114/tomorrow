package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.model.MenuDetailDto;


public interface MenuDetailService {
    void insertMenuDetail(MenuDetailDto menu);
    void deleteMenuDetail(String id);
    void updateMenuDetail(MenuDetailDto menu);

    MenuDetailDto getMenuDetailInfo(String id);
}
