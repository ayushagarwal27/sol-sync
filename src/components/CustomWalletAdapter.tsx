import { FC, ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
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
              "w-screen fixed top-0 flex gap-4 justify-end px-4 py-2 drop-shadow-2xl bg-black/40"
            }
          >
            <WalletMultiButton
              style={{
                background: "black",
                color: "white",
                border: "0.3px solid #C0C0C0",
                borderRadius: 5000,
                cursor: "pointer",
              }}
            />
            <WalletDisconnectButton
              style={{
                background: "black",
                color: "white",
                border: "0.3px solid #C0C0C0",
                borderRadius: 5000,
                cursor: "pointer",
              }}
            />
          </nav>
          <div
            className={
              "flex gap-4 justify-center align-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            }
          >
            {children}
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
