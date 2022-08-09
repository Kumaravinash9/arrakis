package com.db.grad.javaapi.model;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class CounterpartyTrade {
	
	int CounterpartyId;
	private String CounterpartyName;
	int TradeId; 
	private int BookId;
	private int SecurityId;
	private int Quantity;
	private int Price;
	private int TradeStatus;
	private int Buy_Sell;
	@Temporal(TemporalType.DATE)
	private Date TradeDate;
	@Temporal(TemporalType.DATE)
	private Date SettlementDate;
	
	public CounterpartyTrade(int counterpartyId, String counterpartyName, int tradeId, int bookId, int securityId,
			int quantity, int price, int tradeStatus, int buy_Sell, Date tradeDate, Date settlementDate) {
		super();
		CounterpartyId = counterpartyId;
		CounterpartyName = counterpartyName;
		TradeId = tradeId;
		BookId = bookId;
		SecurityId = securityId;
		Quantity = quantity;
		Price = price;
		TradeStatus = tradeStatus;
		Buy_Sell = buy_Sell;
		TradeDate = tradeDate;
		SettlementDate = settlementDate;
	}
	public int getCounterpartyId() {
		return CounterpartyId;
	}
	public void setCounterpartyId(int counterpartyId) {
		CounterpartyId = counterpartyId;
	}
	public String getCounterpartyName() {
		return CounterpartyName;
	}
	public void setCounterpartyName(String counterpartyName) {
		CounterpartyName = counterpartyName;
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
	public int getSecurityId() {
		return SecurityId;
	}
	public void setSecurityId(int securityId) {
		SecurityId = securityId;
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
	
}
