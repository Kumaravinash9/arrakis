
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS securities;
DROP TABLE IF EXISTS bookuser;
DROP TABLE IF EXISTS trade;
DROP TABLE IF EXISTS counterparty;

CREATE TABLE users (
UserId INT PRIMARY KEY AUTO_INCREMENT,
Name VARCHAR(80) NOT NULL,
Email VARCHAR(70) NOT NULL,
Password VARCHAR(70) NOT NULL,
Role VARCHAR(70) NOT NULL
);
create table book(
BookId INT PRIMARY KEY AUTO_INCREMENT,
BookName VARCHAR(70) NOT NULL
);
create table bookuser(
BookId INT,
UserId INT,
FOREIGN KEY (BookId) REFERENCES book(BookId),
FOREIGN KEY (UserId) REFERENCES users(UserId)
);

create table securities(
SecurityId INT PRIMARY KEY AUTO_INCREMENT,
ISIN VARCHAR(12) NOT NULL,
CUSIP VARCHAR(9) NOT NULL,
IssuerName VARCHAR(50) NOT NULL,
MaturityDate DATE NOT NULL,
Coupon INT NOT NULL,
SecurityType varchar(30) NOT NULL,
FaceValue INT NOT NULL,
SecurityStatus INT NOT NULL
);

create table counterparty(
CounterpartyId INT PRIMARY KEY,
CounterpartyName VARCHAR(50) NOT NULL
);
create table trade(
TradeId INT PRIMARY KEY AUTO_INCREMENT,
BookId INT,
CounterpartyId INT,
SecurityId INT,
Quantity INT NOT NULL,
TradeStatus INT NOT NULL,
Price INT NOT NULL,
Buy_Sell INT NOT NULL,
TradeDate DATE NOT NULL,
SettlementDate DATE NOT NULL,
FOREIGN KEY (BookId) REFERENCES book(BookId),
FOREIGN KEY (CounterpartyId) REFERENCES counterparty(CounterpartyId),
FOREIGN KEY (SecurityId) REFERENCES securities(SecurityId)
);








