package com.db.grad.javaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.db.grad.javaapi.model.Counterparty;
import com.db.grad.javaapi.model.CounterpartyTrade;


public interface CounterpartyRepository extends JpaRepository<Counterparty,Integer>{
	@Query("SELECT new com.db.grad.javaapi.model.CounterpartyTrade( "
			+ "c.CounterpartyId,c.CounterpartyName,t.TradeId, "
			+ "t.BookId,t.SecurityId,t.Quantity,t.Price, "
			+ "t.TradeStatus,t.Buy_Sell,t.TradeDate,t.SettlementDate) "
			+ "FROM Counterparty c INNER JOIN Trade t "
			+ "ON c.CounterpartyId=t.CounterpartyId "
			+ " ORDER BY c.CounterpartyId")
	public List<CounterpartyTrade> getCounterpartyTrades();
}
