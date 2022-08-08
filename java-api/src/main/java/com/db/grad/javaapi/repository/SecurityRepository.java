package com.db.grad.javaapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.SecurityTrade;

public interface SecurityRepository extends JpaRepository<Security,Integer>{
	@Query("SELECT new com.db.grad.javaapi.model.SecurityTrade("
			+ "s.securityid,s.isin,s.cusip,s.issuername,s.securitytype,"
			+ "s.maturitydate,s.facevalue,s.securitystatus,t.tradeid,"
			+ "t.bookid,t.counterpartyid,t.quantity,t.price,t.tradestatus,"
			+ "t.buy_sell,t.tradedate,t.settlementdate) "
			+ "FROM securities s inner join trade t "
			+ "ON s.securityid=t.securityid")
	public List<SecurityTrade> getTradesOfSecurities();

	public Optional<Security> findBySecurityandUser(Integer UserId, Integer SecurityId);

}
