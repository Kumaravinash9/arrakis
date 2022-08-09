package com.db.grad.javaapi.model;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name = "securities")
public class Security {

	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int SecurityId;//
	private String ISIN;
	private String CUSIP;
	private String IssuerName;
	private String SecurityType;
	@Temporal(TemporalType.DATE)
	private Date MaturityDate;
	private int Coupon;
	private int FaceValue;
	private int SecurityStatus;
	
	@OneToMany(mappedBy="securities")
	private Collection<Trade> trades;

	
	public Security(int securityId, String iSIN, String cUSIP, String issuerName, String securityType,
			Date maturityDate, int coupon, int faceValue, int securityStatus) {
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
		this.trades = trades;
	}

	public Security(String iSIN, String cUSIP, String issuerName, String securityType, Date maturityDate, int coupon,
			int faceValue, int securityStatus) {
		super();
		ISIN = iSIN;
		CUSIP = cUSIP;
		IssuerName = issuerName;
		SecurityType = securityType;
		MaturityDate = maturityDate;
		Coupon = coupon;
		FaceValue = faceValue;
		SecurityStatus = securityStatus;
		this.trades = trades;
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

	public Collection<Trade> getTrades() {
		return trades;
	}

	public void setTrades(Collection<Trade> trades) {
		this.trades = trades;
	}

	@Override
	public String toString() {
		return "Security [SecurityId=" + SecurityId + ", ISIN=" + ISIN + ", CUSIP=" + CUSIP + ", IssuerName="
				+ IssuerName + ", SecurityType=" + SecurityType + ", MaturityDate=" + MaturityDate + ", Coupon="
				+ Coupon + ", FaceValue=" + FaceValue + ", SecurityStatus=" + SecurityStatus + ", trades=" + trades
				+ "]";
	}

	
}