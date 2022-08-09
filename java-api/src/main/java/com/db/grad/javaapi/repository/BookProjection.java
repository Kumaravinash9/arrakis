package com.db.grad.javaapi.repository;

public class BookProjection {

	public int UserId;
	public int BookId;
	public String BookName;
	
	public BookProjection(int userId,int bookId, String bookName) {
		UserId = userId;
		BookId = bookId;
		BookName = bookName;
	}
	
	
}
