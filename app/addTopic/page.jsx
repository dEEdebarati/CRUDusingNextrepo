"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function addTopic() {
  console.log("Hi");
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!title || !description){
      alert("Please enter something");
      return;
    }
    try{
        const res = await fetch("http://localhost:3000/api/topics",{
          method:"POST",
          headers:{
            "Content-type":"application/json",
          },
          body: JSON.stringify({title,description}),
        });
        if(res.ok){
          router.push('/')
        }else{
          throw new Error("Failed to create a new topic")
        }
    }catch(err){

    }
  }
  return (
   <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
    <input className='border-slate-300 border px-8 py-2'
    type='text'
    placeholder='Topic name'
    onChange={(e)=>setTitle(e.target.value)}
    value={title}
    />
    <input className='border-slate-300 border px-8 py-2'
    type='text'
    placeholder='Topic description'
    onChange={(e)=>setDescription(e.target.value)}
    value={description}
    />
    <button type = "submit" className='bg-green-600 w-fit text-white py-3 px-6 font-bold '>Add Topic</button>
   </form>
  )
}

