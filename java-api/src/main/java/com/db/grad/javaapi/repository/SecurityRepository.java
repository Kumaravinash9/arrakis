package com.db.grad.javaapi.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.model.SecurityTrade;

@Repository
public interface SecurityRepository extends JpaRepository<Security,Integer>{
	@Query("SELECT new com.db.grad.javaapi.model.SecurityTrade("
			+ "s.SecurityId,s.ISIN,s.CUSIP,s.IssuerName,s.SecurityType,"
			+ "s.MaturityDate,s.Coupon,s.FaceValue,s.SecurityStatus,t.TradeId,"
			+ "t.BookId,t.CounterpartyId,t.Quantity,t.Price,t.TradeStatus,"
			+ "t.Buy_Sell,t.TradeDate,t.SettlementDate) "
			+ "FROM Security s inner join Trade t "
			+ "ON s.SecurityId=t.SecurityId "
			+ "where s.SecurityId= :securityId")
	public List<SecurityTrade> getTradesOfSecurities(@Param("securityId") Integer securityId);
	


	@Query("SELECT new com.db.grad.javaapi.model.Security(s.SecurityId,s.ISIN,s.CUSIP,s.IssuerName,s.SecurityType, "
			+ "s.MaturityDate,s.Coupon,s.FaceValue,s.SecurityStatus) from "
			+ "BookUser b , Trade t,Security s WHERE b.BookId=t.BookId "
			+ "AND t.SecurityId=s.SecurityId AND"
			+ " b.UserId= :userId")
	public List<Security> getSecurityInRange(@Param("userId") Integer userId);
}