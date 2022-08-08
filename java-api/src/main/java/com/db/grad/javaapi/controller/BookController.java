package com.db.grad.javaapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.BookProjection;
import com.db.grad.javaapi.repository.BookRepository;

@RestController
@RequestMapping("/{userId}/books")
public class BookController {
	
	@Autowired
	private BookRepository booksRepository;
	
	// find all books of user
	@GetMapping("/")
	public ResponseEntity<List<BookProjection>> getAllBooks(@PathVariable("userId") Integer userId) {
		System.out.println(userId);  
		List<BookProjection> books = booksRepository.findAllBooksByUser(userId);
	      
	      return ResponseEntity.ok(books);
	  }
	
	// view a book
	@GetMapping("/{bookId}")
	public ResponseEntity<BookProjection> getBookById(@PathVariable("bookId") Integer bookId,@PathVariable("userId") Integer userId) throws ResourceNotFoundException {
	      BookProjection books = booksRepository.findBookById(bookId,userId);	  
	      return ResponseEntity.ok(books);
	  }

}
