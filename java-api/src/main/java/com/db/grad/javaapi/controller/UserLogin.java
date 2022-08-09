package com.db.grad.javaapi.controller;

public class UserLogin {
	public String Email;
	public String Password;
	public UserLogin(String email, String password) {
		super();
		Email = email;
		Password = password;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	@Override
	public String toString() {
		return "UserLogin [Email=" + Email + ", Password=" + Password + "]";
	}
	
	

}
