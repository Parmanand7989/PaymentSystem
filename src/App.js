import { useState, useEffect } from 'react';
import './App.css';
import { ethers } from 'ethers';
import Form from './Form';
import Abi from './ABI.json';

function App() {
  const [contract, setContract] = useState();
  const [account, setAccount] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = '0xcEC64927397a64Cf0c12e04bfb9BDF8e7741cC50';
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contracts = new ethers.Contract(contractAddress, Abi, signer);
        setContract(contracts);
      } catch (error) {
        console.error(error);
        setError('Failed to connect to wallet.');
      } finally {
        setLoading(false);
      }
    };
    connectWallet();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>Connected Account: {account}</div>
      <Form contract={contract}></Form>
    </div>
  );
}

export default App;
