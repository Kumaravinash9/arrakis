package com.db.grad.javaapi.controller;

import org.springframework.http.MediaType;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.db.grad.javaapi.model.User;

@Controller
public class AppController {

//	List<Vehicle> vehicle = new ArrayList<>();
	
//	private final CarService carService;
//	private VehicleService vehicleRepo;
//	@Autowired
//	private UserRepository userRepo;
//	@Autowired
//	private VehicleRepository repo;
//
//	
//	@Autowired
//	public AppController(VehicleService vehicleRepo, CarService carService) {
//		this.vehicleRepo =vehicleRepo;
//		this.carService=carService;
//	}
	
	@PostMapping(value="/login",consumes = MediaType.APPLICATION_JSON_VALUE)
 	public String showLoginForm(Model model) {

	System.out.println(model);
	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	String encodedPassword = passwordEncoder.encode("12345678"); 
	System.out.println(encodedPassword);

	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	if (authentication == null || authentication instanceof AnonymousAuthenticationToken) {
	    return "login1";
	}

	return "redirect:/dashboard";
 	}


		
	@GetMapping("/dashboard") 
	public String dashboard(){ 
		return "index"; 
	}
}