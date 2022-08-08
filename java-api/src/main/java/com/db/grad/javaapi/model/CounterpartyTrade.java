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
}
