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
			+ " s.SecurityId,s.ISIN,s.CUSIP,s.IssuerName,s.SecurityType,"
			+ "	s.MaturityDate,s.Coupon,s.FaceValue,s.SecurityStatus,t.TradeId,"
			+ "	t.BookId,t.CounterpartyId,t.Quantity,t.Price,t.TradeStatus,"
			+ "	t.Buy_Sell,t.TradeDate,t.SettlementDate)"
			+ "	FROM BookUser b,Trade t, Security s"
			+ "	Where b.BookId=t.BookId"
			+ "	AND t.SecurityId=s.SecurityId"
			+ "	AND t.SecurityId=:securityId"
			+ "	AND b.UserId=:userId")
	public List<SecurityTrade> getTradesOfSecurities(@Param("userId") Integer userId,@Param("securityId") Integer securityId);
	


	@Query("SELECT new com.db.grad.javaapi.model.Security(s.SecurityId,s.ISIN,s.CUSIP,s.IssuerName,s.SecurityType, "
			+ "s.MaturityDate,s.Coupon,s.FaceValue,s.SecurityStatus) from "
			+ "BookUser b , Trade t,Security s WHERE b.BookId=t.BookId "
			+ "AND t.SecurityId=s.SecurityId AND"
			+ " b.UserId= :userId")
	public List<Security> getSecurityInRange(@Param("userId") Integer userId);
	
	
	
	
	@Query("SELECT new com.db.grad.javaapi.model.Security(s.SecurityId,s.ISIN,s.CUSIP,s.IssuerName,s.SecurityType,"
			+"s.MaturityDate,s.Coupon,s.FaceValue,s.SecurityStatus) from Security s")
	public List<Security> findAllSecurity();
	
	
	
	
@Query("SELECT new com.db.grad.javaapi.repository.SecurityProjection (u.UserId, s.ISIN, s.CUSIP, t.BookId,"
	+" s.IssuerName, s.SecurityType, s.MaturityDate, s.Coupon, s.FaceValue, s.SecurityStatus)"
    +" from Security s inner join Trade t on s.SecurityId = t.SecurityId"
	+" inner join Book b on t.BookId = b.BookId"
    +" inner join BookUser u on b.BookId = u.BookId"
	+" where u.UserId = :UserId and s.SecurityId= :SecurityId")
	public List<SecurityProjection> findSecurityById(@Param("UserId") Integer UserId, @Param("SecurityId") Integer SecurityId);


@Query("SELECT  new com.db.grad.javaapi.model.Security (s.SecurityId,s.ISIN,s.CUSIP,s.IssuerName,s.SecurityType,"
		+ "s.MaturityDate,s.Coupon,s.FaceValue,s.SecurityStatus) from Security s where s.SecurityId= :securityId ")
public Security findSecurityById(@Param("securityId") Integer securityId);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}