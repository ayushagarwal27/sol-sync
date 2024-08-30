import { Wallet } from "./components/CustomWalletAdapter";
import Airdrop from "./components/Airdrop";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#362540",
      }}
    >
      <Wallet>
        <Airdrop />
      </Wallet>
    </div>
  );
}

export default App;
