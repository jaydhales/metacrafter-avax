# Assessment

## Contract Overview

This Contract is a simple counter contract that increases or decreases a number saved on the blockchain. It can also generates a random number for the user.

## Contract Details

### setNumber(uint256 newNumber)

Allows the user set any number he wishes

### increment()

Increase the number by 1 on every interaction.

### decrement()

Decrease the number by 1 on every interaction.

### showNumber()

A function that returns the saved number.

### showRandomNumber()

This function returns a random number, this function works only when clicked at twelve seconds interval (based on the randomization logic).

## Frontend Integration

A UI was built to display and interact with the contract using React.js and Ethers.

`To run the Frontend`

```zsh
   cd ui-frontend

   # Install dependencies
   yarn

   # Run Server
   yarn dev
```

After this, the project will be running on your localhost. Typically at http://localhost:5173/
