package com.db.grad.javaapi.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;

import java.util.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/{UserId}/security")
public class SecurityController {

	    @Autowired
	    private SecurityRepository securityRepository;

	    @GetMapping("/")
	    public List < Security > getAllSecurity() {
	        return securityRepository.findAll();
	    }

//	    @GetMapping("/{SecurityId}")
//	    public Optional<Security> findById(@PathVariable final Integer SecurityId) {
//	        return securityRepository.findById(SecurityId);
//	    }
	    
	    @GetMapping("/{SecurityId}")
	    public ResponseEntity < Security > getSecurityById(@PathVariable Integer UserId, Integer SecurityId)
	    	    throws ResourceNotFoundException {
	    	        Security security = securityRepository.findBySecurityandUser(UserId,SecurityId)
	    	            .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + SecurityId));
	    	        return ResponseEntity.ok().body(security);
	    	    }

	    @PostMapping("/security")
	    public Security createDog(@Valid @RequestBody Security secure) {
	        return securityRepository.saveAndFlush(secure);
	    }
	    
	    @PutMapping("/{SecurityId}")
	    public ResponseEntity < Security > updateDog(@PathVariable(value = "SecurityId") Integer SecurityId,
	        @Valid @RequestBody Security secureDetails) throws ResourceNotFoundException {
	    	Security getsecure = securityRepository.findById(SecurityId)
	            .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + SecurityId));

	    	getsecure.setISIN(secureDetails.getISIN());
	    	getsecure.setCUSIP(secureDetails.getCUSIP());
	    	getsecure.setIssuerName(secureDetails.getIssuerName());
	    	getsecure.setSecurityType(secureDetails.getSecurityType());
	    	getsecure.setMaturityDate(secureDetails.getMaturityDate());
	    	getsecure.setCoupon(secureDetails.getCoupon());
	    	getsecure.setFaceValue(secureDetails.getFaceValue());
	    	getsecure.setSecurityStatus(secureDetails.getSecurityStatus());
	    
	        final Security updatedSecure = securityRepository.save(getsecure);
	        return ResponseEntity.ok(updatedSecure);
	    }
}

	    