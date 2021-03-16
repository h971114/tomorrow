package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.MenuDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MenuDaoImpl implements MenuDao{

    @Autowired
    private SqlSession sqlSession;

    @Override
    public void insertMenu(MenuDto menuDto) {

    }

    @Override
    public void deleteMenu(MenuDto menuDto) {

    }

    @Override
    public void updateMenu(MenuDto menuDto) {

    }

    @Override
    public List<MenuDto> getMenu() {
        return sqlSession.selectList("menu.getMenu");
    }

    @Override
    public List<MenuDto> getMenuByLowPrice() {
        return sqlSession.selectList("menu.getMenuByLowPrice");
    }

    @Override
    public List<MenuDto> getMenuByHighPrice() {
        return sqlSession.selectList("menu.getMenuByHighPrice");
    }

    @Override
    public List<MenuDto> getMenuByBest() {
        return sqlSession.selectList("menu.getMenuByBest");
    }

    @Override
    public List<MenuDto> getMenuByNew() {
        return sqlSession.selectList("menu.getMenuByNew");
    }

    @Override
    public List<MenuDto> getMenuBySale() {
        return sqlSession.selectList("menu.getMenuBySale");
    }

    @Override
    public List<MenuDto> getMenuByTodaySale() {
        return sqlSession.selectList("menu.getMenuByTodaySale");
    }
}
