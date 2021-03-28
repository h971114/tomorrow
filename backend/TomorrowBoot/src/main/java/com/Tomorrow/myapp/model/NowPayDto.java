package com.Tomorrow.myapp.model;


public class NowPayDto {
	private String item_name;
	private int quantity, total_mount, tax_free_amount;
	public NowPayDto() {
		super();
	}
	public NowPayDto(String item_name, int quantity, int total_mount, int tax_free_amount) {
		super();
		this.item_name = item_name;
		this.quantity = quantity;
		this.total_mount = total_mount;
		this.tax_free_amount = tax_free_amount;
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
	
}
