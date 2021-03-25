package com.Tomorrow.myapp.model;

public class WalletDto {
	public WalletDto(String owner_id, String receiving_count, String address, String private_key) {
		super();
		this.owner_id = owner_id;
		this.receiving_count = receiving_count;
		this.address = address;
		this.private_key = private_key;
	}
	private String owner_id;
	private String receiving_count;
	private String address;
	private String private_key;
	
	public String getOwner_id() {
		return owner_id;
	}
	public void setOwner_id(String owner_id) {
		this.owner_id = owner_id;
	}
	public String getReceiving_count() {
		return receiving_count;
	}
	public void setReceiving_count(String receiving_count) {
		this.receiving_count = receiving_count;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPrivate_key() {
		return private_key;
	}
	public void setPrivate_key(String private_key) {
		this.private_key = private_key;
	}
}
