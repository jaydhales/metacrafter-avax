// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

// Contract successfully uses require()
// Contract successfully uses assert()
// Contract successfully uses revert() statements

contract FirstToClaim {
    bool hasClaimedOwnership;
    address public owner;
    address admin;

    constructor() {
        admin = msg.sender;
    }

    function claimOwnership() external {
        require(!hasClaimedOwnership, "Ownership has already been claimed");
        hasClaimedOwnership = true;
        owner = msg.sender;
    }

    function transferOwnership(address newOwner) external {
        if(owner != msg.sender) revert("You are not the owner");
        owner = newOwner;
    }

    function reset() external {
        assert(msg.sender == admin);
        hasClaimedOwnership = false;
        owner = address(0);
    }

}
