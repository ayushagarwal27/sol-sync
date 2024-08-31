import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { toast } from "react-toastify";

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
      toast.success("Added " + amount + " SOL");
      setAmount(0);
    } catch (e) {
      let res = "";
      if (typeof e === "string") {
        res = e.toUpperCase(); // works, `e` narrowed to string
      } else if (e instanceof Error) {
        res = e.message; // works, `e` narrowed to Error
      }
      toast.error(res);
    }
  }

  return (
    <div
      className={
        "flex flex-col justify-center items-center w-fit mx-auto gap-4 border-2 border-pink-200 px-4 rounded-3xl h-[300px]"
      }
    >
      <h3 className={"text-xl text-white font-semibold"}>Airdrop</h3>
      <input
        type={"number"}
        min={1}
        value={amount}
        placeholder={"Enter amount"}
        className={"bg-purple-50 text-gray-700 px-4 py-2 rounded-lg"}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        className={
          "bg-pink-200 px-4 py-2 rounded-lg cursor-pointer hover:bg-pink-900/30 w-full"
        }
        onClick={sendAirdropToUser}
      >
        Send
      </button>
    </div>
  );
};

export default Airdrop;
