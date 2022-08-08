package com.db.grad.javaapi.model;


import java.util.*;

import javax.persistence.*;

@Entity
@Table(name = "book")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer BookId; 
	private String BookName;
	
	@OneToMany(mappedBy="books")
	private Collection<Trade> trades;
	public Book() {
		
	}

	public Book(Integer BookId, String BookName) {
		this.BookId = BookId;
		this.BookName = BookName;
	}
	public Book(String bookName, Collection<Trade> trades) {
		super();
		BookName = bookName;
		this.trades = trades;
	}

	public Integer getBookId() {
		return BookId;
	}

	public void setBookId(Integer bookId) {
		BookId = bookId;
	}

	public String getBookName() {
		return BookName;
	}

	public void setBookName(String bookName) {
		BookName = bookName;
	}

	public Collection<Trade> getTrades() {
		return trades;
	}

	public void setTrades(Collection<Trade> trades) {
		this.trades = trades;
	}

	@Override
	public String toString() {
		return "Book [BookId=" + BookId + ", BookName=" + BookName + ", trades=" + trades + "]";
	}

	


	
	
}
