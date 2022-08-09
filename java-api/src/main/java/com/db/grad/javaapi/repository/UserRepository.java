package com.db.grad.javaapi.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.db.grad.javaapi.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	
	@Query("SELECT new com.db.grad.javaapi.model.User(u.Name, u.Email,  u.Role, u.Password) FROM User u WHERE u.Email = :email") 
	public User findByEmail(@Param("email") String email);
	 
	
	/* public Users findByEmailAndRole(String email, String role); */
	/*
	 * @Query("SELECT u FROM User u WHERE role = 'ADMIN' AND u.email = ?1") public
	 * Users findByEmailAndAdmin(String email);
	 */
	/*
	 * @Query(value =
	 * "SELECT u FROM User u WHERE role = 'ADMIN' AND u.email = :email", nativeQuery
	 * = true) public Users findByEmailAndAdmin(@Param("email") String email);
	 */
//
//	 @Query("SELECT  new com.springdbproject.dbproj.model.Data(p.brand,p.model, u.firstName) FROM Users u JOIN u.vehicle p ON u.email=p.email AND u.firstName LIKE ?1")
//	    public List<Data> AnalyzeByVIN(String firstName);

	 
	
//	@Query(value= " SELECT * FROM users u INNER JOIN vh p ON u.email=p.email WHERE p.vin = :vinno",nativeQuery = true )
//	Users AnalyzeByVIN(@Param("vinno") String vin);
	  
}