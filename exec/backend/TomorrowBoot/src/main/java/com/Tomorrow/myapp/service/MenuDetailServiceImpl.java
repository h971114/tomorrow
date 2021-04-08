package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.dao.MenuDao;
import com.Tomorrow.myapp.dao.MenuDetailDao;
import com.Tomorrow.myapp.model.MenuDetailDto;
import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;
import com.Tomorrow.myapp.utils.UtilsClass;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class MenuDetailServiceImpl implements MenuDetailService {
    private final MenuDetailDao menuDetailDao;

    public MenuDetailServiceImpl(MenuDetailDao menuDetailDao) {
        this.menuDetailDao = menuDetailDao;
    }

	@Override
	public void insertMenuDetail(MenuDetailDto menu) {
		menuDetailDao.insertMenuDetail(menu);
	}

	@Override
	public void deleteMenuDetail(String id) {
		menuDetailDao.deleteMenuDetail(id);
	}

	@Override
	public void updateMenuDetail(MenuDetailDto menu) {
		menuDetailDao.updateMenuDetail(menu);
	}

	@Override
	public MenuDetailDto getMenuDetailInfo(String id) {
		return menuDetailDao.getinfoMenuDetail(id);
	}


}
