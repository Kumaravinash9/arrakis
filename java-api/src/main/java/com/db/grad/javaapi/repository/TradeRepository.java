package com.db.grad.javaapi.repository;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeProjection;


@Repository
public interface TradeRepository extends JpaRepository<Trade, Integer >{
	
	@Query("select new com.db.grad.javaapi.repository.TradeProjection (u.UserId, t.TradeId, b.BookId, t.SecurityId,"
		+"t.CounterpartyId,t.Quantity,t.Price,t.TradeStatus,t.Buy_Sell,t.TradeDate,t.SettlementDate)"
			+" from Trade t inner join Book b on t.BookId = b.BookId"
			+" inner join BookUser u on b.BookId = u.BookId"
			+ " where u.UserId = :userId and b.BookId = :bookId")
	public List<TradeProjection> findAllTradesByBookId(@Param("userId") Integer userId,@Param("bookId") Integer bookId);


	@Query("select new com.db.grad.javaapi.repository.TradeProjection (u.UserId, t.TradeId, b.BookId, t.SecurityId,"
			+ "t.CounterpartyId,t.Quantity,t.Price,t.TradeStatus,t.Buy_Sell,t.TradeDate,t.SettlementDate)"
			+ " from Trade t inner join Book b on t.BookId = b.BookId"
			+ " inner join BookUser u on b.BookId = u.BookId"
			+ " where u.UserId = :userId")
	public List<TradeProjection> findAllTrades(@Param("userId") Integer userId);

	@Query("select new com.db.grad.javaapi.repository.TradeProjection (u.UserId, t.TradeId, b.BookId, t.SecurityId,"
			+ "t.CounterpartyId,t.Quantity,t.Price,t.TradeStatus,t.Buy_Sell,t.TradeDate,t.SettlementDate)"
			+ " from Trade t inner join Book b on t.BookId = b.BookId"
			+ " inner join BookUser u on b.BookId = u.BookId"
			+ " where u.UserId = :userId and t.TradeId = :tradeId")
	public Optional<TradeProjection> findTradeById(Integer userId, Integer tradeId);

//	@Query("insert into new com.db.grad.javaapi.model.Trade(BookId,CounterpartyId,SecurityId,Quantity,Price,Buy_Sell) values(:bookId,:counterpartyId,"
//			+ ":securityId,:quantity, :price,:buy_sell)")
//	public Trade saveTrade(@Param("counterpartyId")int counterpartyId,@Param("securityId") int securityId,@Param("quantity") int quantity, 
//			@Param("price")int price,@Param("buy_sell") int buy_Sell,
//			@Param("bookId")Integer bookId);

	

}
