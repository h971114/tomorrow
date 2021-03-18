package com.Tomorrow.myapp.dao;

import com.Tomorrow.myapp.model.MenuDto;
import com.Tomorrow.myapp.model.ReviewDto;

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
	@Override
	public void update(MenuDto menu) {
		sqlSession.update("menu.menuupdate",menu);
		
	}

	@Override
	public MenuDto getMenuInfo(int id) {
		return sqlSession.selectOne("menu.menuinfo",id);
	}

	@Override
	public List<MenuDto> searchall(String keyword) {
		return sqlSession.selectList("menu.searchAll", keyword);
	}

	@Override
	public List<MenuDto> searchbyname(String keyword) {
		return sqlSession.selectList("menu.searchbyname", keyword);
	}

	@Override
	public List<MenuDto> searchbyid(String keyword) {
		return sqlSession.selectList("menu.searchbyid", keyword);
	}

	@Override
	public List<ReviewDto> getReview(int id) {
		return sqlSession.selectList("menu.getreview", id);
	}

	@Override
	public boolean postReview(ReviewDto reviewDto) {
		int insert = sqlSession.insert("menu.postreview", reviewDto);
		if(insert==0)
			return false;
		return true;
	}

	@Override
	public boolean updateReview(ReviewDto reviewDto) {
		int update = sqlSession.update("menu.updatereview", reviewDto);
		if(update==0)
			return false;
		return true;
	}

	@Override
	public boolean deleteReview(int id) {
		int delete = sqlSession.delete("menu.deletereview", id);
		if(delete==0)
			return false;
		return true;
	}
}
