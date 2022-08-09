package com.db.grad.javaapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.UserRepository;

@CrossOrigin(origins = "*")
@RestController
public class AppController {
	@Autowired
	private UserRepository userRepository;

	@PostMapping(value = "/login")
	public ResponseEntity<?> authenticateUser(@RequestBody UserLogin user) {
		
		User loginuser = userRepository.findByEmail(user.getEmail());
		
		if (loginuser != null) {
			if (loginuser.getPassword().equals(user.getPassword())) {
				return ResponseEntity.ok(loginuser);
			} else {
				return new ResponseEntity<Error>(HttpStatus.UNAUTHORIZED);
			}
		} 
			return new ResponseEntity<Error>(HttpStatus.UNAUTHORIZED);

	}

}