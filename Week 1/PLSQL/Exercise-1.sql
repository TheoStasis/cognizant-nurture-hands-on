BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Loans';
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Customers';
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

CREATE TABLE Customers (
    CustomerID NUMBER,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(10)
);

CREATE TABLE Loans (
    LoanID NUMBER,
    CustomerID NUMBER,
    CustomerName VARCHAR2(50),
    InterestRate NUMBER,
    LoanDueDate DATE
);

INSERT INTO Customers VALUES (1, 'Rahul', 65, 15000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Anita', 45, 8000, 'FALSE');
INSERT INTO Customers VALUES (3, 'Vikas', 70, 20000, 'FALSE');

INSERT INTO Loans VALUES (101, 1, 'Rahul', 9, SYSDATE + 10);
INSERT INTO Loans VALUES (102, 2, 'Anita', 10, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, 'Vikas', 8, SYSDATE + 20);

COMMIT;

DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, Age
        FROM Customers;

BEGIN
    FOR customer_record IN customer_cursor LOOP

        IF customer_record.Age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = customer_record.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Interest rate discount applied.');

END;
/

DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, Balance
        FROM Customers;

BEGIN
    FOR customer_record IN customer_cursor LOOP

        IF customer_record.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = customer_record.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP status updated.');

END;
/

DECLARE
    CURSOR loan_cursor IS
        SELECT CustomerName, LoanDueDate
        FROM Loans
        WHERE LoanDueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR loan_record IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan due for customer '
            || loan_record.CustomerName
            || ' on '
            || loan_record.LoanDueDate
        );

    END LOOP;

END;