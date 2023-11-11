import {useContext, useEffect, useState} from 'react';
import './App.css';
import WalletContext from './context/WalletContext';

function App() {
  const {account, connectWallet, contract} = useContext(WalletContext);
  const [number, setNumber] = useState(0);
  const [refetch, setRefetch] = useState(true);
  const [rand, setRand] = useState(0);

  useEffect(() => {
    if (contract && refetch) {
      contract.showNumber().then((number: bigint) => {
        setNumber(Number(number));
        setRefetch(false);
      });
    }
  }, [refetch, contract]);

  const handleContractInteraction = async (action: "increment" | "decrement") => {
    const tx = action === "increment" ? await contract?.increment() : await contract?.decrement();

    await tx.wait();

    setRefetch(true);

  };

  const showRandomNumber = async () => {
    const num = await contract?.showRandomNumber();
    console.log(num);

    setRand(Number(num));
  };

  return (
    <>
      {
        account ?
          <>
            <p>{account}</p>
            <p>Current Number: {number}</p>

            <div>
              <button onClick={() => handleContractInteraction("increment")}>Increment</button>
              <button onClick={() => handleContractInteraction("decrement")}>Decrement</button>
            </div>

            <p>Random Number: {rand}</p>

            <button onClick={showRandomNumber}>Show Random Number</button>
          </>
          :
          <button onClick={connectWallet}>
            Connect
          </button>
      }

    </>
  );
}

export default App;
