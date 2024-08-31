import { Wallet } from "./components/CustomWalletAdapter";
import Airdrop from "./components/Airdrop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div
      className={
        "h-screen w-screen bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#ff218c]  to-[#ce90f4]"
      }
    >
      <Wallet>
        <Airdrop />
      </Wallet>
      <ToastContainer position={"bottom-center"} />
    </div>
  );
}

export default App;
