import Image from "next/image";
import Form from "@components/Form";
import Expenses from "@/components/Expenses";
import Main from "@/components/Main";
export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-between  p-10">
      <Form />
      <div className="w-full">
        <Main />
      </div>
      {/* <Expenses /> */}
    </main>
  );
}
