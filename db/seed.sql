--Inserting Rows into Customer Table.
-- CustomerNumber begins with 10001
INSERT INTO Customer(customer_no,customer_name,customer_email,customer_phone,customer_address,customer_loginid,customer_password) VALUES 
(10001,'CustomerOne','customer1@email.com',999-999-9999,'Address1','clogin1','cxx1');
INSERT INTO Customer(customer_no,customer_name,customer_email,customer_phone,customer_address,customer_loginid,customer_password) VALUES 
(10002,'CustomerTwo','customer2@email.com',888-888-8888,'Address2','clogin2','cxx2');
INSERT INTO Customer(customer_no,customer_name,customer_email,customer_phone,customer_address,customer_loginid,customer_password) VALUES 
(10003,'CustomerThree','customer3@email.com',777-777-7777,'Address3','clogin3','cxx3');
INSERT INTO Customer(customer_no,customer_name,customer_email,customer_phone,customer_address,customer_loginid,customer_password) VALUES 
(10004,'CustomerFour','customer4@email.com',666-666-6666,'Address4','clogin4','cxx4');
INSERT INTO Customer(customer_no,customer_name,customer_email,customer_phone,customer_address,customer_loginid,customer_password) VALUES 
(10005,'CustomerFive','customer5@email.com',555-555-5555,'Address5','clogin5','cxx5'); 

--Inserting Rows into Account Table.
--Account Numbers begin with 20001.

INSERT INTO Account(ac_number,customer_no,ac_balance,ac_currency) VALUES(20001,10001,9999,'USD');
INSERT INTO Account(ac_number,customer_no,ac_balance,ac_currency) VALUES(20002,10002,8888,'USD');
INSERT INTO Account(ac_number,customer_no,ac_balance,ac_currency) VALUES(20003,10003,7777,'USD');
INSERT INTO Account(ac_number,customer_no,ac_balance,ac_currency) VALUES(20004,10004,6666,'USD');
INSERT INTO Account(ac_number,customer_no,ac_balance,ac_currency) VALUES(20005,10005,5555,'USD');


-- Inserting Rows into Loan Table.
-- Loan Number begin with 30001.

INSERT INTO Loan(loan_no,customer_no,loan_amt,loan_vdate,loan_mdate,loan_rate) VALUES(30001,10001,1111,'2018-01-01','2018-12-31',10);
INSERT INTO Loan(loan_no,customer_no,loan_amt,loan_vdate,loan_mdate,loan_rate) VALUES(30002,10002,2222,'2018-02-01','2018-11-30',11);
INSERT INTO Loan(loan_no,customer_no,loan_amt,loan_vdate,loan_mdate,loan_rate) VALUES(30003,10003,3333,'2018-03-01','2018-10-31',12);
INSERT INTO Loan(loan_no,customer_no,loan_amt,loan_vdate,loan_mdate,loan_rate) VALUES(30004,10004,4444,'2018-04-01','2018-09-30',13);
INSERT INTO Loan(loan_no,customer_no,loan_amt,loan_vdate,loan_mdate,loan_rate) VALUES(30005,10005,5555,'2018-05-01','2018-08-31',14);

-- Inserting Rows into TransactionJournal Table.
-- Txn Reference begin with TXN001.

INSERT INTO Txnjournal(txn_ref,txn_date,customer_no,txn_type,txn_amt,txn_sign) VALUES ('TXN001','2018-01-15',10001,'Phone',100,'DB');
INSERT INTO Txnjournal(txn_ref,txn_date,customer_no,txn_type,txn_amt,txn_sign) VALUES ('TXN002','2018-01-15',10001,'Internet',200,'DB');
INSERT INTO Txnjournal(txn_ref,txn_date,customer_no,txn_type,txn_amt,txn_sign) VALUES ('TXN003','2018-01-15',10001,'Electricity',300,'DB');
INSERT INTO Txnjournal(txn_ref,txn_date,customer_no,txn_type,txn_amt,txn_sign) VALUES ('TXN004','2018-01-15',10001,'Mortgage',400,'DB');
INSERT INTO Txnjournal(txn_ref,txn_date,customer_no,txn_type,txn_amt,txn_sign) VALUES ('TXN005','2018-01-15',10001,'Insurance',500,'DB');


