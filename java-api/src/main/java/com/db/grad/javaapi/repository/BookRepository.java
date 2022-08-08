package com.db.grad.javaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.repository.BookProjection;

public interface BookRepository extends JpaRepository<Book, Integer>{

	@Query("select new com.db.grad.javaapi.repository.BookProjection (b.BookId, b.BookName) from Book b inner join BookUser t on b.BookId = t.BookId where t.UserId= :UserId")
	List<BookProjection> findAllBooksByUser(@Param("UserId") Integer UserId);

	@Query("select new com.db.grad.javaapi.repository.BookProjection (b.BookId, b.BookName) from Book b inner join BookUser t on b.BookId = t.BookId where t.BookId= :bookId and t.UserId= :userId")
	BookProjection findBookById(@Param("bookId") Integer bookId, @Param("userId") Integer userId);

}
