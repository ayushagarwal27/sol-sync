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
          <nav className={"w-screen flex gap-4 justify-end p-4"}>
            <WalletMultiButton />
            <WalletDisconnectButton />
          </nav>
          <div className={"mt-[120px]"}>{children}</div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
