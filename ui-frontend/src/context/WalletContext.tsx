import {Contract, JsonRpcSigner} from "ethers";
import {BrowserProvider} from "ethers";
import {createContext, useEffect, useState} from "react";
import abi from "../Assessment.json";
import {Network} from "ethers";

const WalletContext = createContext<{
   account: string;
   connectWallet: () => void;
   contract: Contract | undefined;
}>({
   account: "",
   connectWallet: () => { },
   contract: undefined
});

const contractAddr = "0x13a8ee2FA364E2De2453e40Bf07e8235B790fD53";


export const WalletProvider = ({children}: {children: React.ReactNode;}) => {
   const [account, setAccount] = useState("");
   const [eth, setEth] = useState<BrowserProvider>();
   const [contract, setContract] = useState<Contract>();

   const initWallet = async () => {
      const provider = new BrowserProvider(window.ethereum);
      if (provider) {
         setEth(provider);
      }
   };

   const connectWallet = async () => {
      if (eth) {
         const signer = await eth.getSigner();

         const network = await eth.getNetwork();

         if (network.chainId !== Network.from("sepolia").chainId) {
            await eth.send("wallet_addEthereumChain", [
               {
                  chainId: "0xaa36a7",
               }
            ]);
         }

         setAccount(signer.address);

         getContract(signer);
      }
   };

   const getContract = async (signer: JsonRpcSigner) => {
      const contract = new Contract(contractAddr, abi.abi, signer);
      setContract(contract);
   };


   useEffect(() => {
      initWallet();
   }, []);




   return (
      <WalletContext.Provider value={
         {
            account,
            connectWallet,
            contract
         }}>
         {children}
      </WalletContext.Provider>
   );
};



export default WalletContext;