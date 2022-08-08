package com.db.grad.javaapi.model;

import java.util.*;

import javax.persistence.*;



@Entity
@Table(name = "trade")
public class Trade {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int TradeId; 
	private int BookId;
	private int SecurityId;
	private int CounterpartyId;
	private int Quantity;
	private int Price;
	private int TradeStatus;
	private int Buy_Sell;
	@Temporal(TemporalType.DATE)
	private Date TradeDate;
	@Temporal(TemporalType.DATE)
	private Date SettlementDate;
	
	@ManyToOne
    @JoinColumn(name="BookId", nullable=false)
    private Book book;

	
	@ManyToOne
    @JoinColumn(name="SecurityId", nullable=false)
    private Security security;
	
	@ManyToOne
    @JoinColumn(name="CounterpartyId", nullable=false)
    private Counterparty Counterparty;

	public Trade(int bookId, int securityId, int counterpartyId, int quantity, int price, int tradeStatus, int buy_Sell,
			Date tradeDate, Date settlementDate, Book book, Security security,
			com.db.grad.javaapi.model.Counterparty counterparty) {
		super();
		BookId = bookId;
		SecurityId = securityId;
		CounterpartyId = counterpartyId;
		Quantity = quantity;
		Price = price;
		TradeStatus = tradeStatus;
		Buy_Sell = buy_Sell;
		TradeDate = tradeDate;
		SettlementDate = settlementDate;
		this.book = book;
		this.security = security;
		Counterparty = counterparty;
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

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public Security getSecurity() {
		return security;
	}

	public void setSecurity(Security security) {
		this.security = security;
	}

	public Counterparty getCounterparty() {
		return Counterparty;
	}

	public void setCounterparty(Counterparty counterparty) {
		Counterparty = counterparty;
	}

	@Override
	public String toString() {
		return "Trade [TradeId=" + TradeId + ", BookId=" + BookId + ", SecurityId=" + SecurityId + ", CounterpartyId="
				+ CounterpartyId + ", Quantity=" + Quantity + ", Price=" + Price + ", TradeStatus=" + TradeStatus
				+ ", Buy_Sell=" + Buy_Sell + ", TradeDate=" + TradeDate + ", SettlementDate=" + SettlementDate
				+ ", book=" + book + ", security=" + security + ", Counterparty=" + Counterparty + "]";
	}

	
	
	
	
}
