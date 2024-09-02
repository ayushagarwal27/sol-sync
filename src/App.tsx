import { Wallet } from "./components/CustomWalletAdapter";
import Airdrop from "./components/Airdrop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowBalance from "@/components/ShowBalance.tsx";
import SignMessage from "@/components/SignMessage.tsx";
import SendToken from "@/components/SendToken.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

function App() {
  const [tabVal, setTabVal] = useState("info");
  return (
    <div className={"h-screen w-screen bg-gray-900"}>
      <Wallet>
        <div
          className={
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          }
        >
          <Tabs defaultValue={"info"} className="">
            <TabsList
              className={"w-[400px] bg-black my-2 text-white/80 py-[32px]"}
            >
              <TabsTrigger value="info" className={""}>
                Info
              </TabsTrigger>
              <TabsTrigger value="airdrop">Airdrop</TabsTrigger>
              <TabsTrigger value="sendToken">Send Token</TabsTrigger>
            </TabsList>
            <TabsContent value="info" className={"h-[400px] "}>
              <ShowBalance />
            </TabsContent>{" "}
            <TabsContent value="sendToken" className={"h-[400px]"}>
              <SendToken />
            </TabsContent>
            <TabsContent value="airdrop" className={"h-[400px]"}>
              <Airdrop />
            </TabsContent>
          </Tabs>
          <div className={"flex gap-4"}></div>
        </div>
      </Wallet>
      <ToastContainer position={"bottom-center"} />
    </div>
  );
}

export default App;
