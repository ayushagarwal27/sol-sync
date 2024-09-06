import { FC, ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

interface Props {
  children: ReactNode;
}

export const Wallet: FC<Props> = ({ children }) => {
  return (
    <ConnectionProvider
      endpoint={
        "https://solana-devnet.g.alchemy.com/v2/NXPBVxsNC7ibJue5qAMmlpz-sLPLEcXO"
      }
    >
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <nav
            className={
              "w-screen fixed top-0  gap-4 py-2 drop-shadow-2xl bg-black/40"
            }
          >
            <div className={"container mx-auto flex justify-between"}>
              <div
                className={
                  "flex flex-row items-center text-2xl  font-semibold bg-gradient-to-r from-blue-400 via-violet-400 to-rose-400 bg-clip-text text-transparent"
                }
              >
                SolSync
              </div>
              <WalletMultiButton
                style={{
                  background: "black",
                  color: "white",
                  border: "0.3px solid #C0C0C0",
                  borderRadius: 5000,
                  cursor: "pointer",
                }}
              />
            </div>
          </nav>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
