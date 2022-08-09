package com.db.grad.javaapi.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.SecurityTrade;
import com.db.grad.javaapi.repository.SecurityProjection;
import com.db.grad.javaapi.repository.SecurityRepository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

import javax.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/{UserId}/security")
public class SecurityController {

	    @Autowired
	    private SecurityRepository securityRepository;

//	    @GetMapping("/")
//	    public List < Security > getAllSecurity() {
//	        return securityRepository.findAll();
//	    }
//	    
	    
	    @GetMapping("/getAll")
	    public List <Security> getAllSecurity() {
	        return securityRepository.findAllSecurity();
	    }

	    @RequestMapping(value="getSecurity/{SecurityId}",method=RequestMethod.GET)
	    public Security findById(@PathVariable final Integer SecurityId) {
	        return securityRepository.findSecurityById(SecurityId);
	    }
	    
	    @GetMapping("/{securityId}/trades")
	    public List<SecurityTrade> getSecurityTrades(@PathVariable("UserId") Integer userId,@PathVariable("securityId") Integer securityId) {
	        List<SecurityTrade> tradeSecurity = securityRepository.getTradesOfSecurities(userId,securityId);
			return tradeSecurity;
	    }
	    @GetMapping("/{startDate}/{endDate}")
	    public List<Security> getSecurityRange(@PathVariable("UserId") Integer userId,@PathVariable("startDate") String startDate, @PathVariable("endDate") String endDate) throws ParseException {
	        Date sd=new SimpleDateFormat("yyyy-mm-dd").parse(startDate);
	        Date ed=new SimpleDateFormat("yyyy-mm-dd").parse(endDate);
	        System.out.println(sd);
	        System.out.println(ed);
	        System.out.println(securityRepository.getSecurityInRange(userId));
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

	    @PostMapping(value="/add",consumes = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<String> createSecurity(@RequestBody Security newsecurity)
	    {
//	    	newsecurity.setSecurityId(SecurityId);
//	    	newsecurity.setISIN("ING67L0U7HKJ");
	    	
	    	System.out.println(newsecurity);
	    	
	    	newsecurity.setISIN(newsecurity.getISIN());
	    	
	    	newsecurity.setCUSIP(newsecurity.getCUSIP());
	    	newsecurity.setIssuerName(newsecurity.getIssuerName());
	    	newsecurity.setSecurityType(newsecurity.getSecurityType());
	    	newsecurity.setMaturityDate(newsecurity.getMaturityDate());
	    	newsecurity.setCoupon(newsecurity.getCoupon());
	    	newsecurity.setFaceValue(newsecurity.getFaceValue());
	    	newsecurity.setSecurityStatus(1);
	    	System.out.println(newsecurity.getISIN());
	    	System.out.println(newsecurity.toString());
	    	final Security updatesecurity=securityRepository.save(newsecurity);
	    	System.out.println(updatesecurity);
	    	return ResponseEntity.ok("Success");
   }
	    
	    @PutMapping(value="/update/{SecurityId}",consumes = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity < String > updateSecusrity(@PathVariable(value = "SecurityId") Integer SecurityId,
	        @RequestBody Security secureDetails) throws ResourceNotFoundException {
	    	Security getsecure = securityRepository.findById(SecurityId)
	            .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + SecurityId));

//	    	getsecure.setISIN(secureDetails.getISIN());
//	    	getsecure.setCUSIP(secureDetails.getCUSIP());
//	    	getsecure.setIssuerName(secureDetails.getIssuerName());
//	    	getsecure.setSecurityType(secureDetails.getSecurityType());
//	    	getsecure.setMaturityDate(secureDetails.getMaturityDate());
	    	getsecure.setCoupon(secureDetails.getCoupon());
	    	getsecure.setFaceValue(secureDetails.getFaceValue());
	    	//getsecure.setSecurityStatus(secureDetails.getSecurityStatus());
	    
	        final Security updatedSecure = securityRepository.save(getsecure);
	        System.out.println(updatedSecure);
	        return ResponseEntity.ok("Security Updated Successfully!");
	    }
	    
	    
//	    @DeleteMapping("/delete/{SecurityId}")
//	    public Map < String, Boolean > deleteDog(@PathVariable(value = "SecurityId") Integer SecurityId)
//	    throws Exception {
//	    	Security security = securityRepository.findById(SecurityId)
//	            .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + SecurityId));
//
//	    	securityRepository.delete(security);
//	        Map < String, Boolean > response = new HashMap <>();
//	        response.put("deleted", Boolean.TRUE);
//	        return response;
//	    }
//	   
	    
	    //veiw a security belonging to a user
	    @GetMapping("/{SecurityId}")
	    public ResponseEntity< List<SecurityProjection>> GetByUserId(@PathVariable("UserId") Integer UserId, @PathVariable("SecurityId") Integer SecurityId) throws ResourceNotFoundException {
		     List<SecurityProjection> security = securityRepository.findSecurityById(UserId,SecurityId);	  
	        return ResponseEntity.ok(security);
	    }
	    
	    
}