package com.db.grad.javaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.db.grad.javaapi.model.Counterparty;
import com.db.grad.javaapi.model.CounterpartyTrade;


public interface CounterpartyRepository extends JpaRepository<Counterparty,Integer>{
	@Query("SELECT new com.db.grad.javaapi.model.CounterpartyTrade("
			+ "c.counterpartyid,c.counterpartyname,t.tradeid,"
			+ "t.bookid,t.securityid,t.quantity,t.price,"
			+ "t.tradestatus,t.buy_sell,t.tradedate,t.settlementdate)"
			+ "FROM counterparty c INNER JOIN trade t"
			+ "ON c.counterpartyid=t.counterpartyid"
			+ "ORDER BY c.counterpartyid;")
	public List<CounterpartyTrade> getCounterpartyTrades();
}
