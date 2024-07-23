// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Finance {
    address payable public owner;
    address payable public shareFirst;
    address payable public shareSecond;

    uint256 constant OWNER_SHARE_PERCENT = 10;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "You are not owner");
        _;
    }

    function changeOwner(address _owner) public onlyOwner {
        owner = payable(_owner);
    }

    function setRewardAddress(address _shareFirst, address _shareSecond)
        public
        onlyOwner
    {
        shareFirst = payable(_shareFirst);
        shareSecond = payable(_shareSecond);
    }

    function pay() external payable {
        require(msg.value > 0, "Payment must be greater than zero");
        require(
            shareFirst != address(0) && shareSecond != address(0),
            "Reward addresses not set"
        );

        uint256 ownerShare = (msg.value * OWNER_SHARE_PERCENT) / 100;
        uint256 remainingShare = msg.value - ownerShare;
        uint256 share = remainingShare / 2;

        owner.transfer(ownerShare);
        shareFirst.transfer(share);
        shareSecond.transfer(share);
    }
}
