import { TOKEN_PROGRAM_ID, AccountLayout } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

type TokenType = { tokenKey: string; tokenAmount: number }[];

const ShowTokens = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [tokens, setTokens] = useState<TokenType>([]);

  async function getTokenAccounts() {
    // const pubKey = wallet.publicKey?.toString() || "";
    const tokenAccounts = await connection.getTokenAccountsByOwner(
      wallet.publicKey!,
      {
        programId: TOKEN_PROGRAM_ID,
      }
    );
    const nextToken: TokenType = [];
    tokenAccounts.value.forEach((tokenAccount) => {
      const accountData = AccountLayout.decode(tokenAccount.account.data);
      console.log(accountData);
      nextToken.push({
        tokenKey: accountData.mint.toString(),
        tokenAmount: Number(accountData.amount) / LAMPORTS_PER_SOL,
      });
    });
    setTokens(nextToken);
  }

  useEffect(() => {
    if (wallet.publicKey) {
      getTokenAccounts();
    }
  }, [wallet.publicKey]);

  if (!wallet.publicKey) {
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

  return (
    <div className={"mt-4"}>
      {tokens.map((token) => (
        <div
          className={
            "flex justify-around text-white px-4 py-1 bg-gray-700 items-center rounded-lg"
          }
          key={token.tokenKey}
        >
          <div className={"flex items-center gap-2"}>
            Token Key:{" "}
            <span
              className={
                "bg-black p-1 flex justify-center items-center rounded-md"
              }
            >
              {token.tokenKey.substring(0, 2)}
            </span>
          </div>
          <div className={""}>Balance: {token.tokenAmount}</div>
        </div>
      ))}
    </div>
  );
};

export default ShowTokens;
