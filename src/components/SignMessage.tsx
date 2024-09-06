import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

const SignMessage = () => {
  const { publicKey, signMessage } = useWallet();
  const [message, setMessage] = useState("");

  if (!publicKey) {
    return (
      <p
        className={
          "text-2xl text-white text-center bg-gray-900 py-2 rounded-xl"
        }
      >
        Please connect your wallet 🪪
      </p>
    );
  }

  async function handleSigning() {
    if (!signMessage) {
      toast.error("Wallet does not support message signing!");
    }

    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage!(encodedMessage);

    if (!ed25519.verify(signature, encodedMessage, publicKey!.toBytes())) {
      toast.error("Message signature invalid!");
      setMessage("");
    } else {
      toast.success(`Message signature: ${bs58.encode(signature)}`);
      setMessage("");
    }
  }

  return (
    <Card className={"bg-black text-white"}>
      <CardHeader>
        <CardTitle className={"text-center font-semibold"}>
          Sign Message
        </CardTitle>
      </CardHeader>

      <CardContent className={"mt-4"}>
        <Input
          type={"text"}
          value={message}
          placeholder={"Enter your message"}
          className={"bg-purple-50 text-gray-700 px-4 py-2 rounded-lg"}
          onChange={(e) => setMessage(e.target.value)}
        />
      </CardContent>
      <CardFooter>
        <Button
          variant={"outline"}
          onClick={handleSigning}
          className={"bg-gray-800 w-full"}
        >
          Sign
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignMessage;
