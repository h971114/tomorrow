package com.Tomorrow.myapp.service;

import com.Tomorrow.myapp.dao.MenuDao;
import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;
import com.Tomorrow.myapp.utils.UtilsClass;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class MenuServiceImpl implements MenuService {
    private final MenuDao menuDao;

    public MenuServiceImpl(MenuDao menuDao) {
        this.menuDao = menuDao;
    }

    /* 상품 Service: 등록 삭제 수정 */
    @Override
    public void insertMenu(MenuDto menu) {
        try {
            menuDao.insertMenu(menu);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public void deleteMenu(String id) {
        try {
            menuDao.deleteMenu(id);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public void updateMenu(MenuDto menu) {
        try {
            menuDao.updateMenu(menu);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    /* 상품 조회 */
    @Override
    public MenuDto getMenuInfo(int id) {
        MenuDto menu = null;
        try {
            menu = menuDao.getMenuInfo(id);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return menu;
    }
    


    @Override
    public List<MenuDto> getMenu() {
        List<MenuDto> menuDtoList = null;
        try {
            menuDtoList = menuDao.getMenu();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return menuDtoList;
    }

    @Override
    public List<MenuDto> getMenuBySeller(String seller_id) {
        List<MenuDto> menuDtoList = null;
        try {
            menuDtoList = menuDao.getMenuBySeller(seller_id);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return menuDtoList;
    }

    @Override
    public List<MenuDto> getMenuByLowPrice() {
        List<MenuDto> menuDtoList = null;
        try {
            menuDtoList = menuDao.getMenuByLowPrice();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return menuDtoList;
    }

    @Override
    public List<MenuDto> getMenuByHighPrice() {
        List<MenuDto> menuDtoList = null;
        try {
            menuDtoList = menuDao.getMenuByHighPrice();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return menuDtoList;
    }

    @Override
    public List<MenuDto> getMenuByBest() {
        List<MenuDto> menuDtoList = null;
        try {
            menuDtoList = menuDao.getMenuByBest();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return menuDtoList;
    }

    @Override
    public List<MenuDto> getMenuByNew() {
        List<MenuDto> menuDtoList = null;
        try {
            menuDtoList = menuDao.getMenuByNew();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return menuDtoList;
    }

    @Override
    public List<HashMap<String, Object>> getMenuBySale() {
        List<HashMap<String, Object>> menuList = new ArrayList<>();
        try {
            List<MenuDto> menuDtoList = menuDao.getMenuBySale();
            for (MenuDto menuDto : menuDtoList) {
                HashMap<String, Object> hashMap = new HashMap<>();
                hashMap.put("menu", menuDto);
                hashMap.put("sale_price", UtilsClass.getSalePrice(menuDto.getPrice(), menuDto.getDiscount_rate()));
                menuList.add(hashMap);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return menuList;
    }

    @Override
    public List<HashMap<String, Object>> getMenuByTodaySale() {
        List<HashMap<String, Object>> menuList = new ArrayList<>();
        try {
            List<MenuDto> menuDtoList = menuDao.getMenuByTodaySale();
            for (MenuDto menuDto : menuDtoList) {
                HashMap<String, Object> hashMap = new HashMap<>();
                hashMap.put("menu", menuDto);
                hashMap.put("sale_price", UtilsClass.getSalePrice(menuDto.getPrice(), menuDto.getToday_discount_rate()));
                menuList.add(hashMap);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return menuList;
    }

    @Override
    public List<MenuDto> getMenuByCategory(int keyword) {
        return menuDao.getMenuByCategory(keyword);
    }

    /* 리뷰 Service */
    @Override
    public List<ReviewDto> getReview(int id) {
        return menuDao.getReview(id);
    }

    @Override
    public boolean postReview(ReviewDto reviewDto) {
        return menuDao.postReview(reviewDto);
    }

    @Override
    public boolean updateReview(ReviewDto reviewDto) {
        return menuDao.updateReview(reviewDto);
    }

    @Override
    public boolean deleteReview(int id) {
        return menuDao.deleteReview(id);
    }
}
