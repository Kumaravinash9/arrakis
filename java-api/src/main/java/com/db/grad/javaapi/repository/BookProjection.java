package com.db.grad.javaapi.repository;

public class BookProjection {

	public int BookId;
	public String BookName;
	
	public BookProjection(int bookId, String bookName) {
		super();
		BookId = bookId;
		BookName = bookName;
	}
	public int getBookId() {
		return BookId;
	}
	public void setBookId(int bookId) {
		BookId = bookId;
	}
	public String getBookName() {
		return BookName;
	}
	public void setBookName(String bookName) {
		BookName = bookName;
	}
	
}
