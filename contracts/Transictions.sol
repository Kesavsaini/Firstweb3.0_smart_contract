//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
contract Transictions{
    uint256 transictioncount;
    event Transfer(address from, address reciver,uint amount,string message,uint256 timestamp, string keyword);
    
    struct Transferstruct{
        address sender;
        address reciver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    Transferstruct[] transiction;
    function addToBlockchain(address payable reciver,uint amount,string memory message,string memory keyword) public{
        transictioncount+=1;
        transiction.push(Transferstruct(msg.sender,reciver,amount,message,block.timestamp,keyword));
        emit Transfer(msg.sender,reciver,amount,message,block.timestamp,keyword);
    }
    function getTransictions() public view returns(Transferstruct[] memory){
        return transiction;
    }
    function getTransictionCount() public view returns(uint){
        return transictioncount;
    }

}
