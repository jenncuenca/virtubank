-- Drops the bank_db if it exists currently --
DROP DATABASE IF EXISTS bank_db;

-- Create the schema / Database 
CREATE DATABASE bank_db;
USE bank_db;

-- Create the Customer Table -- 
CREATE TABLE Customer(
    customer_no INT(5) NOT NULL,
    customer_name VARCHAR(45) NOT NULL,
    customer_email VARCHAR(45) NOT NULL,
    customer_phone INT(9) NOT NULL,
    customer_address VARCHAR(45) NOT NULL,
    customer_loginid VARCHAR(45) NOT NULL,
    customer_password VARCHAR(45) NOT NULL,
    PRIMARY KEY (customer_no));

-- Create the Cash Account Table -- 
CREATE TABLE Account(
    ac_number INT(5) NOT NULL,   
    customer_no INT(5) NOT NULL,
    ac_balance DECIMAL(20),
    ac_currency VARCHAR(3) NOT NULL,
    PRIMARY KEY(ac_number));

-- Create the Loan Table --
CREATE TABLE Loan(
    loan_no INT(5) NOT NULL,
    customer_no INT(5) NOT NULL,
    loan_amt DECIMAL(10),
    loan_vdate DATE,
    loan_mdate DATE,
    loan_rate DECIMAL(5),
    PRIMARY KEY(loan_no));

-- Create the Transaction or Journal Table for recording the transaction.
CREATE TABLE Txnjournal(
    txn_ref VARCHAR(15) NOT NULL, 
    txn_date DATE NOT NULL,
    customer_no INT(5) NOT NULL,
    txn_type VARCHAR(20) NOT NULL,
    txn_amt DECIMAL(20) NOT NULL,
    txn_sign VARCHAR(2) NOT NULL,
    PRIMARY KEY(txn_ref));