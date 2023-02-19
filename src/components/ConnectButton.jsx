import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { Button } from "reactstrap";

const ConnectButton = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Metamask not detected.");
    }
  };

  useEffect(() => {
    connectMetamask();
  }, []);

  const disconnectMetamask = () => {
    setWeb3(null);
    setAccounts([]);
  };

  window.ethereum.on("accountsChanged", async () => {
    connectMetamask();
  });

  return (
    <div>
      {accounts.length > 0 ? (
        <div>
          <Button color="info" outline disabled>
            {accounts[0]}
          </Button>
          <Button color="warning" onClick={disconnectMetamask}>
            Disconnect
          </Button>
        </div>
      ) : (
        <div>
          <Button color="info" outline disabled>
            Not Connected to Metamask
          </Button>
          <Button
            color="danger"
            onClick={() => {
              connectMetamask();
            }}
          >
            Connect Metamask
          </Button>
        </div>
      )}
    </div>
  );
};

export default ConnectButton;
