import { Wallet } from "./components/CustomWalletAdapter";
import Airdrop from "./components/Airdrop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowBalance from "@/components/ShowBalance.tsx";
import SignMessage from "@/components/SignMessage.tsx";
import SendToken from "@/components/SendToken.tsx";

function App() {
  return (
    <div className={"h-screen w-screen bg-gray-900"}>
      <Wallet>
        <div
          className={
            "flex flex-col w-fit gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center"
          }
        >
          <ShowBalance />
          <div className={"flex gap-4"}>
            <Airdrop />
            <SignMessage />
          </div>
          <SendToken />
        </div>
      </Wallet>
      <ToastContainer position={"bottom-center"} />
    </div>
  );
}

export default App;
