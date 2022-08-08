package com.db.grad.javaapi.model;


import java.util.*;

import javax.persistence.*;

@Entity
@Table(name = "book")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int BookId; 
	private String BookName;
	
	@OneToMany(mappedBy="book")
	private Collection<Trade> trades;

	public Book(String bookName, Collection<Trade> trades) {
		super();
		BookName = bookName;
		this.trades = trades;
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
