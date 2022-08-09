package com.db.grad.javaapi.repository;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class SecurityProjection {

	public int UserId;
//	public int BookId;
	public String ISIN;
	public String CUSIP;
	public int BookId;
	public String IssuerName;
	public String SecurityType;
	@Temporal(TemporalType.DATE)
	public Date MaturityDate;
	public int Coupon;
	public int FaceValue;
	public int SecurityStatus;
//	public int getUserId() {
//		return UserId;
//	}
	
	
	public SecurityProjection() {}
public SecurityProjection(int userId, String iSIN, String cUSIP, int bookId, String issuerName, String securityType,
		Date maturityDate, int coupon, int faceValue, int securityStatus) {
	super();
	UserId = userId;
	ISIN = iSIN;
	CUSIP = cUSIP;
	BookId = bookId;
	IssuerName = issuerName;
	SecurityType = securityType;
	MaturityDate = maturityDate;
	Coupon = coupon;
	FaceValue = faceValue;
	SecurityStatus = securityStatus;
}


	
}
