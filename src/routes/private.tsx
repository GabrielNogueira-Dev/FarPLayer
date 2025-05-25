
import { type ReactNode,useEffect, useState } from "react";
import { auth } from "../services/firebaseConection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface PrivetProps{
    children:ReactNode;
}

export function Private({children}:PrivetProps):any{
   const [loading,setLoading] = useState(true)
    const [signed,setSigned] = useState(false)
useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(user)=>{
if(user){
  const userData= {
   uid : user?.uid,
   email : user?.email
  } 
  localStorage.setItem("@userdetail",JSON.stringify(userData))
  setLoading(false);
  setSigned(true);
}else{
   setLoading(false);
   setSigned(false);
}
    })
},[])

if(loading){
   return <div className="bg-red-900 flex justify-center items-center h-screen"><h2 className="font-bold text-white text-3xl">Carregando..</h2></div>
}

if(!signed){
    return <Navigate to="/login" />
}

return children
   
}