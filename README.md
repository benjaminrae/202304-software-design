Challenge 1 – Password input field validation
Create a function that can be used as a validator for the password field of a user registration form. The validation function takes a string as an input and returns a validation result. The validation result should contain a boolean indicating if the password is valid or not, and also a field with the possible validation errors.

**Requirements**

1. The password must be at least 8 characters long. If it is not met, then the following error message should be returned: “Password must be at least 8 characters”

2. The password must contain at least 2 numbers. If it is not met, then the following error message should be returned: “The password must contain at least 2 numbers”

3. The validation function should handle multiple validation errors.

For example, “somepassword” should an error message: “Password must be at least 8 characters\nThe password must contain at least 2 numbers” 4. The password must contain at least one capital letter. If it is not met, then the following error message should be returned: “password must contain at least one capital letter”

5. The password must contain at least one special character. If it is not met, then the following error message should be returned: “password must contain at least one special character”

Challenge 2: Banking kata

Note: This is an advanced example where the solution requires knowledge of using a mocking framework. The possible solution can also have an elaborated design.

Create a simple bank application with features of depositing, withdrawing, and printing account statements.

Constraints

1. Start with a class with the following structure

public class Account {
public void deposit(int amount)
public void withdraw(int amount)
public void printStatement()
} 2. You are not allowed to add any other public methods in this class

3. Use Strings and Integers for dates and amounts (keep it simple)

4. Don’t worry about the spacing in the statement printed in the console

Requirements

1. Deposit into Account

2. Withdraw from an Account

3. Print the Account statement to the console

DATE | AMOUNT | BALANCE
10/04/2014 | 500.00 | 1400.00
02/04/2014 | -100.00 | 900.00
01/04/2014 | 1000.00 | 1000.00
