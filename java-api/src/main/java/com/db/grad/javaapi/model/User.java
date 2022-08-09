package com.db.grad.javaapi.model;

import java.util.*;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		int UserId;
		private String Name;
		private String Email;
		private String Password;
		private String Role;
		
		
		@ManyToMany(fetch= FetchType.EAGER, cascade = CascadeType.ALL)
		@JoinTable(
				name="bookuser",
				joinColumns= @JoinColumn(name ="UserId", referencedColumnName="UserId"),
				inverseJoinColumns= @JoinColumn( name="BookId", referencedColumnName="BookId")
				
				)
		private Collection<Book> books;

		public int getUserId() {
			return UserId;
		}

		public void setUserId(int userId) {
			UserId = userId;
		}

		public String getName() {
			return Name;
		}

		public void setName(String name) {
			Name = name;
		}

		public String getEmail() {
			return Email;
		}

		public void setEmail(String email) {
			Email = email;
		}

		public String getRole() {
			return Role;
		}

		public void setRole(String role) {
			Role = role;
		}

		public String getPassword() {
			return Password;
		}

		public void setPassword(String password) {
			Password = password;
		}

		public Collection<Book> getBooks() {
			return books;
		}

		public void setBooks(Collection<Book> books) {
			this.books = books;
		}

		public User(String name, String email, String role, String password, Collection<Book> books) {
			super();
			Name = name;
			Email = email;
			Role = role;
			Password = password;
			this.books = books;
		}

		public User(String name, String email, String role, String password) {
			super();
			Name = name;
			Email = email;
			Role = role;
			Password = password;
			
		}
		
		@Override
		public String toString() {
			return "User [UserId=" + UserId + ", Name=" + Name + ", Email=" + Email + ", Role=" + Role + ", Password="
					+ Password + ", books=" + books + "]";
		}

		
		
	}


