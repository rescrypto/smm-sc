pragma solidity ^0.4.16;

//************* ERC20

contract ERC20 {
    uint256 public totalSupply;
    function balanceOf(address who)public constant returns (uint256);
    function transfer(address to, uint256 value)public returns (bool);
    function transferFrom(address from, address to, uint256 value)public returns (bool);
    function allowance(address owner, address spender)public constant returns (uint256);
    function approve(address spender, uint256 value)public returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event ExchangeTokenPushed(address indexed buyer, uint256 amount);
    event TokenPurchase(address indexed purchaser, uint256 value,uint256 amount);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}