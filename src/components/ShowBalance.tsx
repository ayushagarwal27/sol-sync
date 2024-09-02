import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const ShowBalance = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    async function getBalance() {
      const balance = await connection.getBalance(wallet.publicKey!);
      const parsedBalance = Number(
        parseFloat((balance / LAMPORTS_PER_SOL).toString()).toFixed(2)
      );
      setBalance(parsedBalance);
    }
    if (wallet.publicKey) {
      getBalance();
    }
  }, [wallet.publicKey]);

  if (!wallet.publicKey) {
    return null;
  }

  return (
    <div
      className={
        "bg-gradient-to-r from-[#c7d2fe] via-[#a5b4fc] to-[#818cf8] p-4 rounded-lg text-center font-light"
      }
    >
      {" "}
      <span className={"text-gray-800/70 mr-1 font-bold "}>Balance: </span>
      <span className={"text-gray-950"}> {balance} SOL</span>
    </div>
  );
};

export default ShowBalance;
