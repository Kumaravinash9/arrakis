package com.db.grad.javaapi.repository;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.db.grad.javaapi.model.Trade;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Integer >{
	
//	@Query(value="",nativeQuery=true)
//	public List<Trade> findAllTradesByBookId(Integer userId, Integer bookId);
//
//	@Query(value="",nativeQuery=true)
//	public Trade saveTrade(@Valid Trade trades, Integer userId);
//
//	@Query(value="",nativeQuery=true)
//	public List<Trade> findAllTrades(Integer userId);
//
//	@Query(value="",nativeQuery=true)
//	public Optional<Trade> findByTradeById(Integer userId, Integer tradeId);

	

}
