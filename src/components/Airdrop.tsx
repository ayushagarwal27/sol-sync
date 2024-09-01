import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <Card className={"bg-black text-white"}>
      <CardHeader>
        <CardTitle className={"text-center"}>Airdrop</CardTitle>
        {/*<CardDescription>Card Description</CardDescription>*/}
      </CardHeader>
      <CardContent className={"mt-4"}>
        <Input
          type={"number"}
          min={1}
          value={amount}
          placeholder={"Enter amount"}
          className={"bg-purple-50 text-gray-700 px-4 py-2 rounded-lg"}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </CardContent>
      <CardFooter>
        <Button
          variant={"outline"}
          onClick={sendAirdropToUser}
          className={"bg-gray-800 w-full"}
        >
          Send
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Airdrop;
