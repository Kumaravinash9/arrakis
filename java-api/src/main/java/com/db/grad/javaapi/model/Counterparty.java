package com.db.grad.javaapi.model;



import java.util.Collection;

//import java.util.*;
import javax.persistence.*;




@Entity
@Table(name = "counterparty")
public class Counterparty {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int CounterpartyId;
	private String CounterpartyName;
	
	
	@OneToMany(mappedBy="counterparty")
	private Collection<Trade> trades;


	public Counterparty(String counterpartyName, Collection<Trade> trades) {
		super();
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
