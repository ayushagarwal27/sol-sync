import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(0);

  async function sendAirdropToUser() {
    try {
      await connection.requestAirdrop(
        wallet.publicKey!,
        amount * LAMPORTS_PER_SOL
      );
      setAmount(0);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <input
        type={"number"}
        min={1}
        value={amount}
        placeholder={"Enter amount"}
        style={{ padding: "8px", borderRadius: 5 }}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        style={{
          padding: "9.5px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: 5,
          marginLeft: 10,
        }}
        onClick={sendAirdropToUser}
      >
        Send
      </button>
    </>
  );
};

export default Airdrop;
