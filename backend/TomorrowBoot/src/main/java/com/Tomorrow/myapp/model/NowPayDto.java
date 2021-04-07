package com.Tomorrow.myapp.model;


public class NowPayDto {
    private String item_name, item_code, name, mobile,addr,etc;
    private int quantity, total_mount, tax_free_amount, point, uppoint;

    public NowPayDto() {
        super();
    }


    public NowPayDto(String item_name, String item_code, String name, String mobile, String addr, String etc,
			int quantity, int total_mount, int tax_free_amount, int point, int uppoint) {
		super();
		this.item_name = item_name;
		this.item_code = item_code;
		this.name = name;
		this.mobile = mobile;
		this.addr = addr;
		this.etc = etc;
		this.quantity = quantity;
		this.total_mount = total_mount;
		this.tax_free_amount = tax_free_amount;
		this.point = point;
		this.uppoint = uppoint;
	}

	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getAddr() {
		return addr;
	}


	public void setAddr(String addr) {
		this.addr = addr;
	}


	public String getEtc() {
		return etc;
	}


	public void setEtc(String etc) {
		this.etc = etc;
	}


	public int getUppoint() {
		return uppoint;
	}


	public void setUppoint(int uppoint) {
		this.uppoint = uppoint;
	}


	public int getPoint() {
		return point;
	}

	public void setPoint(int point) {
		this.point = point;
	}

	public String getItem_code() {
        return item_code;
    }

    public void setItem_code(String item_code) {
        this.item_code = item_code;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getTotal_mount() {
        return total_mount;
    }

    public void setTotal_mount(int total_mount) {
        this.total_mount = total_mount;
    }

    public int getTax_free_amount() {
        return tax_free_amount;
    }

    public void setTax_free_amount(int tax_free_amount) {
        this.tax_free_amount = tax_free_amount;
    }

	@Override
	public String toString() {
		return "NowPayDto [item_name=" + item_name + ", item_code=" + item_code + ", name=" + name + ", mobile="
				+ mobile + ", addr=" + addr + ", etc=" + etc + ", quantity=" + quantity + ", total_mount=" + total_mount
				+ ", tax_free_amount=" + tax_free_amount + ", point=" + point + ", uppoint=" + uppoint + "]";
	}



}
