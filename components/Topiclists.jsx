//"use client"
import React from 'react';
import Link from 'next/link';
import Removebtn from './Removebtn';
import {HiPencilAlt} from 'react-icons/hi';

const getTopics = async() =>{
  try{
    const res = await fetch("http://localhost:3000/api/topics",{
      cache:"no-store",
    });
    if(!res.ok){
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  }catch(error){
    console.log("Error landing topics: ",error);
  }
};
export default async function Topiclists () {
  const {topics} = await getTopics();
  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   async function fetchTopics() {
  //     const fetchedTopics = await getTopics(); // Assuming getTopics is defined elsewhere
  //     setTopics(fetchedTopics);
  //   }

  //   fetchTopics();
  // }, []);
  return (
    <>
    {topics.map(t =>(
    <div className='p-4 border-slate-300 justify-between flex py-3 gap-5 items-start'>
        <div >
            <h2 className='font-bold text-2xl'>{t.title}</h2>
            <div> {t.description}</div>
        </div>

        <div className='flex gap-2'>
            <Removebtn id = {t._id} />
            <Link href = {`/editTopic/${t._id}`}>
                <HiPencilAlt size = {24}/>
            </Link>
        </div>
    </div>
    ))}
    </>
  )
}

