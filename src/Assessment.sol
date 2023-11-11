// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Assessment {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    function decrement() public {
        number--;
    }

    function showNumber() public view returns (uint256) {
        return number;
    }

    function showRandomNumber() public view returns (uint8) {
        return uint8(uint256(blockhash(block.number - 1)));
    }
}
