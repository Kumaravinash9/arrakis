package com.db.grad.javaapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bookuser")
public class BookUser {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer pid;
	private Integer BookId;
	private Integer UserId;
	
	
	public BookUser(Integer bookId, Integer userId) {
		super();
		BookId = bookId;
		UserId = userId;
	}
	public Integer getBookId() {
		return BookId;
	}
	public void setBookId(Integer bookId) {
		BookId = bookId;
	}
	public Integer getUserId() {
		return UserId;
	}
	public void setUserId(Integer userId) {
		UserId = userId;
	}
	
	
	

}
