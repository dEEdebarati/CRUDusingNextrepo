"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const EditTopic = ({id,title,description}) => {
  const [newTitle,setNewTitle] = useState(title);
  const [newDescription,setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({newTitle,newDescription}),
      });
      if(!res.ok){
        throw new Error("Failed to update topics");
      }
     
      router.push("/");
      router.refresh();
    }catch(error){
      console.log(error);
    }
  }
  return (
    <form onSubmit= {handleSubmit} className='flex flex-col gap-3'>
    <input className='border-slate-300 border px-8 py-2'
    type='text'
    placeholder='Topic name'
    onChange={(e)=>setNewTitle(e.target.value)}
    value = {newTitle}
    />
    <input className='border-slate-300 border px-8 py-2'
    type='text'
    placeholder='Topic description'
    onChange={(e)=>setNewDescription(e.target.value)}
    value = {newDescription}
    />
    <button className='bg-green-600 w-fit text-white py-3 px-6 font-bold '>Update</button>
   </form>
  )
}

export default EditTopic;