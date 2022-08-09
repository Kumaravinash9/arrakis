package com.db.grad.javaapi.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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
import com.db.grad.javaapi.model.SecurityTrade;
import com.db.grad.javaapi.repository.SecurityRepository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

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
	    @GetMapping("/{securityId}/trades")
	    public List<SecurityTrade> getSecurityTrades(@PathVariable("securityId") Integer securityId) {
	        List<SecurityTrade> tradeSecurity = securityRepository.getTradesOfSecurities(securityId);
			return tradeSecurity;
	    }
	    @GetMapping("/{startDate}/{endDate}")
	    public List<Security> getSecurityRange(@PathVariable("UserId") Integer userId,@PathVariable("startDate") String startDate, @PathVariable("endDate") String endDate) throws ParseException {
	        Date sd=new SimpleDateFormat("yyyy-mm-dd").parse(startDate);
	        Date ed=new SimpleDateFormat("yyyy-mm-dd").parse(endDate);
	    	List<Security> securities = securityRepository.getSecurityInRange(userId).stream()
	    			.filter(p->p.getMaturityDate().getTime()>sd.getTime()).filter(p->p.getMaturityDate().getTime()<=ed.getTime()).collect(Collectors.toList());
			return securities;
	    }
//	    @GetMapping("/{SecurityId}")
//	    public ResponseEntity < Security > getSecurityById(@PathVariable Integer UserId, Integer SecurityId)
//	    	    throws ResourceNotFoundException {
//	    	        Security security = securityRepository.findBySecurityandUser(UserId,SecurityId)
//	    	            .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + SecurityId));
//	    	        return ResponseEntity.ok().body(security);
//	    	    }

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

	    