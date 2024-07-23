import React, { useState } from 'react';
import { ethers } from 'ethers';

const Form = ({ contract }) => {
  const [newOwner, setNewOwner] = useState("");
  const [shareFirst, setShareFirst] = useState("");
  const [shareSecond, setShareSecond] = useState("");
  const [amount, setAmount] = useState("");

  const handleChangeOwner = async () => {
    try {
      const t = await contract.changeOwner(newOwner);
      await t.wait();
      console.log("Owner changed successfully");
    } catch (error) {
      console.error("Error changing owner:", error);
    }
  };

  const handleSetRewardAddress = async () => {
    try {
      const t = await contract.setRewardAddress(shareFirst, shareSecond);
      await t.wait();
      console.log("set reward successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePay = async () => {
    try {
      const t = await contract.pay({ value: ethers.utils.parseEther(amount) });
      await t.wait();
      console.log("Payment successful");
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div>
      <div>
        <h2>Change Owner</h2>
        <input type="text" value={newOwner} onChange={(e) => setNewOwner(e.target.value)} placeholder="New Owner Address"/>
        <button onClick={handleChangeOwner}>Change Owner</button>
      </div>

      <div>
        <h2>Set Reward Addresses</h2>
        <input type="text" value={shareFirst} onChange={(e) => setShareFirst(e.target.value)} placeholder="Share First Address"/>
        <input type="text" value={shareSecond} onChange={(e) => setShareSecond(e.target.value)} placeholder="Share Second Address"/>
        <button onClick={handleSetRewardAddress}>Set Reward Addresses</button>
      </div>

      <div>
        <h2>Pay</h2>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount in ETH"/>
        <button onClick={handlePay}>Pay</button>
      </div>
      
    </div>
  );
};

export default Form;
