package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.MenuDetailDto;
import java.util.List;

public interface MenuDetailDao {
    // 상품: 등록 삭제 수정
    public void insertMenuDetail(MenuDetailDto menuDetailDto);
    public void deleteMenuDetail(String id);
    public void updateMenuDetail(MenuDetailDto menuDetailDto);
    public MenuDetailDto getinfoMenuDetail(String id);
}
