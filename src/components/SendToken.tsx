import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { toast } from "react-toastify";

const SendToken = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [toAddress, setToAddress] = useState<string>("");
  const [amount, setAmount] = useState(0);
  const [isSending, setIsSending] = useState(false);

  if (!wallet.publicKey) {
    return (
      <p
        className={"text-xl text-white text-center bg-gray-900 py-2 rounded-xl"}
      >
        Please connect your wallet 🪪
      </p>
    );
  }

  async function sendTokens() {
    setIsSending(true);
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey!,
        toPubkey: new PublicKey(toAddress),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );
    try {
      await wallet.sendTransaction(transaction, connection);
      toast.dark("Sent " + amount + " SOL to " + toAddress);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setToAddress("");
      setAmount(0);
    }
    setIsSending(false);
  }

  return (
    <Card className={"bg-black text-white"}>
      <CardHeader>
        <CardTitle className={"text-center"}>Send SOL Token</CardTitle>
        {/*<CardDescription>Card Description</CardDescription>*/}
      </CardHeader>
      <CardContent className={"mt-4 flex flex-col gap-3"}>
        <Input
          type={"number"}
          min={1}
          value={amount}
          placeholder={"Enter SOL amount"}
          className={"bg-purple-50 text-gray-700 px-4 py-2 rounded-lg"}
          onChange={(e) => setAmount(Number(e.target.value))}
        />{" "}
        <Input
          type={"text"}
          value={toAddress}
          placeholder={"Enter Receiver's Address"}
          className={"bg-purple-50 text-gray-700 px-4 py-2 rounded-lg"}
          onChange={(e) => setToAddress(e.target.value)}
        />
      </CardContent>
      <CardFooter>
        <Button
          variant={"outline"}
          onClick={sendTokens}
          className={"bg-gray-800 w-full"}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SendToken;
