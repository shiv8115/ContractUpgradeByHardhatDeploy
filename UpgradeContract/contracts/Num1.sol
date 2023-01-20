// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Num1 {
    uint256 private num;
    function update(uint256 _num) public{
        num= _num;
    }
    function get() public view returns(uint256){
        return num;
    }
}