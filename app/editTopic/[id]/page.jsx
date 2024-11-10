import EditTopic from '@/components/EditTopic';
import React from 'react';

const getTopicsById = async(id) => {
  try{
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache: "no-store"
    });
    if(!res.ok){
      throw new Error('Failed to fetch topics');
    }
    return res.json();
  }catch(error){
    console.log(error);
  }
}

const page = async({params}) => {
  const {id} = params;
  const {topic} = await getTopicsById(id);
  const {title,description} = topic;
  console.log("ID: ",id);
  
  return (
    // <EditTopic id = {id} title = {title} description = {description}/>
    <EditTopic id = {id} title={title} description={description}/>
  )
  

}


export default page;