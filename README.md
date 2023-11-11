# FirstToClaim Contract

## Contract Overview

The FirstToClaim is a simple game where every player competes to claim ownership and stops others from becoming owner. It includes functionalities for transferring ownership and admin functionality to reset the game.

All Error Handlings were successfully implemented.

## Contract Details

### State Variables

`hasClaimedOwnership`: A boolean variable that indicates whether ownership has been claimed.

- `owner`: The address of the current owner.
- `admin`: The address of the contract administrator.

### claimOwnership

This function allows a player to claim ownership provided that somebody else has not interacted before. This condition is fulfilled by the `require` statement in the function. If `hasClaimedOwnership` is already true, the function will fail.

### transferOwnership

This function allows the owner to transfer his ownership to another address. The error check in this function will revert if the address interacting with this function is not the owner.

### reset

This function allows the admin to restart the game by resetting all state variable to their default states. The function assert that its caller is the admin before running.
