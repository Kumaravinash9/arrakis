package com.db.grad.javaapi.controller;


import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

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
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeRepository;

@RestController
@RequestMapping("/{userId}/trades")
public class TradeController {
	
	@Autowired
	private TradeRepository tradeRepository;
	
//	// View all trades irrespective of book of a user
//	@GetMapping("/")
//	public ResponseEntity<List<Trade>> getAllTrades(@PathVariable Integer userId){
//		List<Trade> trades = tradeRepository.findAllTrades(userId);
//		return ResponseEntity.ok(trades);
//	}
//
//	// View all trades of a book
//	@GetMapping("/{bookId}")
//	public ResponseEntity<List<Trade>> getAllTradesOfBook(@PathVariable Integer userId,@PathVariable Integer bookId) {
//	      List<Trade> trade = tradeRepository.findAllTradesByBookId(userId,bookId);
//	      return ResponseEntity.ok(trade);
//	  }
//	
//	// View a particular trade
//	@GetMapping("/{tradeId}")
//	public Trade getTradeDetails(@PathVariable Integer userId,@PathVariable Integer tradeId) throws ResourceNotFoundException {
//	      Trade trade = tradeRepository.findByTradeById(userId,tradeId)
//	    		  .orElseThrow(() -> new ResourceNotFoundException("Trade not found for id :: " + tradeId));
//	      return trade;
//	  }
//	
//	// Update a Trade
//	@PutMapping("update/{tradeId}")
//	public ResponseEntity<Trade> updateTrade(@PathVariable Integer userId,@PathVariable Integer tradeId,@Valid @RequestBody Trade tradeDetails) throws ResourceNotFoundException{
//  	Trade getTrade = getTradeDetails(userId,tradeId);
//  	
//  	getTrade.setBookId(tradeDetails.getBookId());
//  	getTrade.setSecurityId(tradeDetails.getSecurityId());
//  	getTrade.setCounterpartyId(tradeDetails.getCounterpartyId());
//  	getTrade.setBuy_Sell(tradeDetails.getBuy_Sell());
//  	getTrade.setQuantity(tradeDetails.getQuantity());
//  	getTrade.setPrice(tradeDetails.getPrice());
//  	getTrade.setTradeStatus(tradeDetails.getTradeStatus());
//  	getTrade.setTradeDate(tradeDetails.getTradeDate());
//  	getTrade.setSettlementDate(tradeDetails.getSettlementDate());
//  	
//  
//    final Trade updatedTrade = tradeRepository.save(getTrade);
//    return ResponseEntity.ok(updatedTrade);
//  }
//	
//	 //Add new trade
//	@PostMapping("/new-trade")
//    public Trade createTrade(@Valid @RequestBody Trade trades, @PathVariable Integer userId) {
//        return tradeRepository.saveAndFlush(trades);
//    }
//	
//	
	
	
	

}
