// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;
contract calculator{
    
    function sum(uint first,uint second) public pure returns(uint){
        return first+second;
    }
    function difference(uint first,uint second) public pure returns(uint){
        if(first>second)
        return first-second;
        else 
        return second-first;
    }function multiply(uint first,uint second) public pure returns(uint){
        return first*second;
    }function divide(uint first,uint second) public pure returns(uint){
        if(second==0) return 0;
        return first/second;
    }
}