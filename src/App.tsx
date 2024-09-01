import { Wallet } from "./components/CustomWalletAdapter";
import Airdrop from "./components/Airdrop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className={"h-screen w-screen bg-gray-900"}>
      <Wallet>
        <Airdrop />
        <Airdrop />
        <Airdrop />
      </Wallet>
      <ToastContainer position={"bottom-center"} />
    </div>
  );
}

export default App;
