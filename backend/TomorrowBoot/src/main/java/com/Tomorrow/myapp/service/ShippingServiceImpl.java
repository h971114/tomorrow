package com.Tomorrow.myapp.service;

import org.springframework.stereotype.Service;

import com.Tomorrow.myapp.dao.MenuDetailDao;
import com.Tomorrow.myapp.dao.ShippingDao;
import com.Tomorrow.myapp.model.MenuDetailDto;
import com.Tomorrow.myapp.model.ShippingDto;

@Service
public class ShippingServiceImpl implements ShippingService{

	    private final ShippingDao shippingDao;

		public  ShippingServiceImpl(ShippingDao shippingDao) {
			this.shippingDao = shippingDao;
			
		}
		@Override
		public void insertInfo(ShippingDto shipping) {
			shippingDao.insertInfo(shipping);
		}
}
