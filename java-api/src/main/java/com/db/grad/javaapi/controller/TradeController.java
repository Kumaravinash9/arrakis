package com.db.grad.javaapi.controller;


import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeProjection;
import com.db.grad.javaapi.repository.TradeRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/{userId}/trades")
public class TradeController {
	
	@Autowired
	private TradeRepository tradeRepository;
	
	// View all trades irrespective of book of a user
	@GetMapping("/")
	public ResponseEntity<List<TradeProjection>> getAllTrades(@PathVariable("userId") Integer userId){
		List<TradeProjection> trades = tradeRepository.findAllTrades(userId);
		return ResponseEntity.ok(trades);
	}

	// View all trades of a book
	@GetMapping("/{bookId}")
	public ResponseEntity<List<TradeProjection>> getAllTradesOfBook(@PathVariable Integer userId,@PathVariable Integer bookId) {
	      List<TradeProjection> trade = tradeRepository.findAllTradesByBookId(userId,bookId);
	      return ResponseEntity.ok(trade);
	  }
	
	// View a particular trade
	@GetMapping("getTrade/{tradeId}")
	public TradeProjection getTradeDetails(@PathVariable("userId") Integer userId,@PathVariable("tradeId") Integer tradeId) throws ResourceNotFoundException {
		TradeProjection trade = tradeRepository.findTradeById(userId,tradeId)
	    		  .orElseThrow(() -> new ResourceNotFoundException("Trade not found for id :: " + tradeId));
	      return trade;
	  }
	
	
	
	// Update a Trade
	@PutMapping(value="/update/{tradeId}", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> updateTrade(@RequestBody Trade tradeDetails,@PathVariable Integer tradeId) throws ResourceNotFoundException{

	//Trade newtradeDetails = new Trade(tradeId);
	
	Trade getTrade = tradeRepository.findById(tradeId).orElseThrow(() -> new ResourceNotFoundException("Trade not found for id :: " + tradeId));
	System.out.println(tradeDetails);
	//System.out.println(getTrade.toString());
  	
//		getTrade.setBookId(tradeDetails.getBookId());
//	  	getTrade.setSecurityId(tradeDetails.getSecurityId());
//	  	getTrade.setCounterpartyId(tradeDetails.getCounterpartyId());
//	  	getTrade.setBuy_Sell(tradeDetails.getBuy_Sell());
		getTrade.setQuantity(tradeDetails.getQuantity());
//	  	getTrade.setPrice(tradeDetails.getPrice());
//	  	getTrade.setTradeStatus(tradeDetails.getTradeStatus());
//	  	getTrade.setTradeDate(tradeDetails.getTradeDate());
//	  	getTrade.setSettlementDate(tradeDetails.getSettlementDate());  	
//  
	    final Trade updatedTrade = tradeRepository.save(getTrade);
	    System.out.println(updatedTrade);
	    return ResponseEntity.ok("Success");
  }
	
	 //Add new trade
	@PostMapping(value="/{bookId}/addtrade",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Trade> createTrade(@RequestBody Trade newtrade,@PathVariable("bookId") Integer bookId) {

        newtrade.setBookId(bookId); 
        newtrade.setBuy_Sell(newtrade.getBuy_Sell());
        newtrade.setCounterpartyId(newtrade.getCounterpartyId());
        newtrade.setSecurityId(newtrade.getSecurityId());
        newtrade.setQuantity(newtrade.getQuantity());
        newtrade.setPrice(newtrade.getPrice());
        newtrade.setTradeStatus(1);
        newtrade.setTradeDate(new java.util.Date());
        newtrade.setSettlementDate(new Date(System.currentTimeMillis() + 86400 * 1000 * 2));
        final Trade updatedTrade = tradeRepository.save(newtrade);
        System.out.println(updatedTrade);
        return ResponseEntity.ok(updatedTrade);
    }
	

	
	
	

}
