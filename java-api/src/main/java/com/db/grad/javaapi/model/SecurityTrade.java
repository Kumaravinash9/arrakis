package com.db.grad.javaapi.model;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;



public class SecurityTrade {
	int SecurityId;
	private String ISIN;
	private String CUSIP;
	private String IssuerName;
	private String SecurityType;
	@Temporal(TemporalType.DATE)
	private Date MaturityDate;
	private int Coupon;
	private int FaceValue;
	private int SecurityStatus;
	int TradeId; 
	private int BookId;
	private int CounterpartyId;
	private int Quantity;
	private int Price;
	private int TradeStatus;
	private int Buy_Sell;
	@Temporal(TemporalType.DATE)
	private Date TradeDate;
	@Temporal(TemporalType.DATE)
	private Date SettlementDate;
	
	public SecurityTrade(int securityId, String iSIN, String cUSIP, String issuerName, String securityType,
			Date maturityDate, int coupon, int faceValue, int securityStatus, int tradeId, int bookId,
			int counterpartyId, int quantity, int price, int tradeStatus, int buy_Sell, Date tradeDate,
			Date settlementDate) {
		super();
		SecurityId = securityId;
		ISIN = iSIN;
		CUSIP = cUSIP;
		IssuerName = issuerName;
		SecurityType = securityType;
		MaturityDate = maturityDate;
		Coupon = coupon;
		FaceValue = faceValue;
		SecurityStatus = securityStatus;
		TradeId = tradeId;
		BookId = bookId;
		CounterpartyId = counterpartyId;
		Quantity = quantity;
		Price = price;
		TradeStatus = tradeStatus;
		Buy_Sell = buy_Sell;
		TradeDate = tradeDate;
		SettlementDate = settlementDate;
	}
	
	public int getSecurityId() {
		return SecurityId;
	}
	public void setSecurityId(int securityId) {
		SecurityId = securityId;
	}
	public String getISIN() {
		return ISIN;
	}
	public void setISIN(String iSIN) {
		ISIN = iSIN;
	}
	public String getCUSIP() {
		return CUSIP;
	}
	public void setCUSIP(String cUSIP) {
		CUSIP = cUSIP;
	}
	public String getIssuerName() {
		return IssuerName;
	}
	public void setIssuerName(String issuerName) {
		IssuerName = issuerName;
	}
	public String getSecurityType() {
		return SecurityType;
	}
	public void setSecurityType(String securityType) {
		SecurityType = securityType;
	}
	public Date getMaturityDate() {
		return MaturityDate;
	}
	public void setMaturityDate(Date maturityDate) {
		MaturityDate = maturityDate;
	}
	public int getCoupon() {
		return Coupon;
	}
	public void setCoupon(int coupon) {
		Coupon = coupon;
	}
	public int getFaceValue() {
		return FaceValue;
	}
	public void setFaceValue(int faceValue) {
		FaceValue = faceValue;
	}
	public int getSecurityStatus() {
		return SecurityStatus;
	}
	public void setSecurityStatus(int securityStatus) {
		SecurityStatus = securityStatus;
	}
	public int getTradeId() {
		return TradeId;
	}
	public void setTradeId(int tradeId) {
		TradeId = tradeId;
	}
	public int getBookId() {
		return BookId;
	}
	public void setBookId(int bookId) {
		BookId = bookId;
	}
	public int getCounterpartyId() {
		return CounterpartyId;
	}
	public void setCounterpartyId(int counterpartyId) {
		CounterpartyId = counterpartyId;
	}
	public int getQuantity() {
		return Quantity;
	}
	public void setQuantity(int quantity) {
		Quantity = quantity;
	}
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		Price = price;
	}
	public int getTradeStatus() {
		return TradeStatus;
	}
	public void setTradeStatus(int tradeStatus) {
		TradeStatus = tradeStatus;
	}
	public int getBuy_Sell() {
		return Buy_Sell;
	}
	public void setBuy_Sell(int buy_Sell) {
		Buy_Sell = buy_Sell;
	}
	public Date getTradeDate() {
		return TradeDate;
	}
	public void setTradeDate(Date tradeDate) {
		TradeDate = tradeDate;
	}
	public Date getSettlementDate() {
		return SettlementDate;
	}
	public void setSettlementDate(Date settlementDate) {
		SettlementDate = settlementDate;
	}

	@Override
	public String toString() {
		return "SecurityTrade [SecurityId=" + SecurityId + ", ISIN=" + ISIN + ", CUSIP=" + CUSIP + ", IssuerName="
				+ IssuerName + ", SecurityType=" + SecurityType + ", MaturityDate=" + MaturityDate + ", Coupon="
				+ Coupon + ", FaceValue=" + FaceValue + ", SecurityStatus=" + SecurityStatus + ", TradeId=" + TradeId
				+ ", BookId=" + BookId + ", CounterpartyId=" + CounterpartyId + ", Quantity=" + Quantity + ", Price="
				+ Price + ", TradeStatus=" + TradeStatus + ", Buy_Sell=" + Buy_Sell + ", TradeDate=" + TradeDate
				+ ", SettlementDate=" + SettlementDate + "]";
	}
	
}
