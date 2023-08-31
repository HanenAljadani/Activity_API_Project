"use client"
import { useState, FormEvent } from "react";
import { useRouter } from "@/node_modules/next/navigation";
export default function Home() {

   const [userInput , setuserInput] = useState("");
   const {push} = useRouter();

  const handleSubmit = (event: FormEvent) => {
     event.preventDefault();
     
     push(`/activity/${userInput}`);
  };

  return (
    <>
    <div className="h-screen bg-slate-300 w-full flex justify-center items-center ">
   
   
    <div className="w-1/3 bg-gray-400 rounded-2xl p-12 ">
      <h1 className="font-bold text-slate-800 text-4xl pb-12">Activities</h1>
      <h1 className="font-bold text-slate-950" >The Types Of Activities  </h1>

      <form onSubmit={handleSubmit} >

      <select name="types"
      value={userInput}
      onChange={(e) => setuserInput(e.target.value)}
      className="w-full mt-8 rounded-lg border-slate-800"
      >
        <option value="none" selected disabled hidden>Select type</option>
        <option value="social">social</option>
        <option value="education">education</option>
        <option value="music">music</option>
      </select>
     
      <br></br>
      <button type="submit" className="mt-20 items-center rounded-lg w-3/6 bg-slate-500  border-4  border-slate-500 hover:bg-transparent hover:text-slate-700 font-bold">Enter</button>
      </form>

    </div>
    
    
    </div>
    </>
  )
}
