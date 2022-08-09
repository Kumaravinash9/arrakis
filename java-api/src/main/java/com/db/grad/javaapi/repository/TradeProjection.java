package com.db.grad.javaapi.repository;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class TradeProjection {
	
	public int UserId;
	public int TradeId;
	public int BookId;
	public int SecurityId;
	public int CounterpartyId;
	public int Quantity;
	public int Price;
	public int TradeStatus;
	public int Buy_Sell;
	public Date TradeDate;
	public Date SettlementDate;
	public TradeProjection(int userId, int tradeId, int bookId, int securityId, int counterpartyId, int quantity,
			int price, int tradeStatus, int buy_Sell, Date tradeDate, Date settlementDate) {
		super();
		UserId = userId;
		TradeId = tradeId;
		BookId = bookId;
		SecurityId = securityId;
		CounterpartyId = counterpartyId;
		Quantity = quantity;
		Price = price;
		TradeStatus = tradeStatus;
		Buy_Sell = buy_Sell;
		TradeDate = tradeDate;
		SettlementDate = settlementDate;
	}
	
	
}
