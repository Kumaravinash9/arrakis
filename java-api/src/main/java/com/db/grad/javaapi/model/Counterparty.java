package com.db.grad.javaapi.model;



import java.util.Collection;

//import java.util.*;
import javax.persistence.*;




@Entity
@Table(name = "counterparty")
public class Counterparty {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="CounterpartyId")
	int CounterpartyId;
	private String CounterpartyName;
	
	
	@OneToMany(mappedBy="Counterparties")
	private Collection<Trade> trades;

	public Counterparty() {
		
	}

	public Counterparty(int counterpartyId, String counterpartyName, Collection<Trade> trades) {
		super();
		CounterpartyId = counterpartyId;
		CounterpartyName = counterpartyName;
		this.trades = trades;
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


	public Collection<Trade> getTrades() {
		return trades;
	}


	public void setTrades(Collection<Trade> trades) {
		this.trades = trades;
	}


	@Override
	public String toString() {
		return "Counterparty [CounterpartyId=" + CounterpartyId + ", CounterpartyName=" + CounterpartyName + ", trades="
				+ trades + "]";
	}


	
	
	
}
