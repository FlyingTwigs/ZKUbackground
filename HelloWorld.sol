// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

/** 
 * @author Theodore Fabian
 * @title HelloWorld
 * @dev Simple Number Storage system
 */
contract HelloWorld {
    uint private number;


    function storeNumber(uint n) public {
        number = n;
    }
    
    function retrieveNumber() public view returns (uint) {
        return number;
    }
}
