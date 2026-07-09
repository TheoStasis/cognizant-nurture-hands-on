

Scenario 1:

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_type = 'Savings';
    
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END ProcessMonthlyInterest;
/

Scenario 2:
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department_id IN Employees.department_id%TYPE,
    p_bonus_percentage IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET salary = salary + (salary * (p_bonus_percentage / 100))
    WHERE department_id = p_department_id;
    
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END UpdateEmployeeBonus;
/

Scenario 3:
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN Accounts.account_id%TYPE,
    p_to_account IN Accounts.account_id%TYPE,
    p_amount IN NUMBER
) IS
    v_current_balance Accounts.balance%TYPE;
BEGIN
    
    SELECT balance INTO v_current_balance
    FROM Accounts
    WHERE account_id = p_from_account
    FOR UPDATE;

    IF v_current_balance >= p_amount THEN
        
        UPDATE Accounts
        SET balance = balance - p_amount
        WHERE account_id = p_from_account;

       
        UPDATE Accounts
        SET balance = balance + p_amount
        WHERE account_id = p_to_account;

       
        COMMIT;
    ELSE
      
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds for transfer.');
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RAISE_APPLICATION_ERROR(-20002, 'Source account does not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END TransferFunds;
/

