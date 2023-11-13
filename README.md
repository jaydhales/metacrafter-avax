# Degen Smart Contract

## Overview

`Degen` is an ERC-20 token where user can redeem items by burning the actual amount the item is worth. These items can only created by the owner of the contract. The contract is built on Open Zeppelin ERC20 standards.

The contract is deployed on Avalanche Fuji Testnet at the following address:
[0x38dA2b7dcD6170f2DBe25851E695bcB2DF1Bfe09](https://testnet.snowtrace.io/address/0x38dA2b7dcD6170f2DBe25851E695bcB2DF1Bfe09#code)

## Contract Details

### mint

- Mints new tokens to a specified address.
- Only the contract owner can call this function (based on onlyOwner Modifier).

### burn

- Remove a specified amount from the caller's balance and total supply.
- Caller must have a sufficient balance to burn.

### transfer

- Allows holders of the token to transfer an amount of the token to another address.
- Provided that their balance is greater than that amount.

### createItem

- Allows owner to create a new item for users to redeem.
- These items can be accessed with their unique id.

### redeem

- Allow users to redeem items by burning an amount required to redeem it.
- User can only only redeem items that has not been redeemed before.

### getFreeItems

- Returns the indexes of all free items as an array for the caller.
- An item is considered free if the registered owner is the contract.

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details
