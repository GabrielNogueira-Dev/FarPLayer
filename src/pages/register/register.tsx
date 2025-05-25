import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import type { FormEvent } from "react"


import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../services/firebaseConection"

export function Register(){
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

function handleSubmit(e: FormEvent){
e.preventDefault()
if(email === "" || password ===""){
    alert("Preencha todos os campos!")
    return
}

createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log("Voce foi Logado",userCredential.user)
        navigate("/login",{replace:true})
    })
    .catch((error)=>{
        console.log("deu error", error.message)
    });

}

    return(
     <div className="min-h-screen bg-red-950 flex items-center justify-center px-4">
        <form
  onSubmit={handleSubmit}
  className=" max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg
             ring-1 ring-gray-200
             dark:bg-gray-900 dark:ring-gray-700"
>
  <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
    Cadastre-se
  </h2>

  <label
    htmlFor="email"
    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
  >
    Email:
  </label>
  <input
    id="email"
    type="email"
    className="w-full px-4 py-3 rounded-md border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-red-600
               focus:border-transparent
               dark:bg-gray-800 dark:border-gray-700 dark:text-white mb-6"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    placeholder="email@exemplo.com"
  />

  <label
    htmlFor="password"
    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
  >
    Senha:
  </label>
  <input
    id="password"
    type="password"
    className="w-full px-4 py-3 rounded-md border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-red-600
               focus:border-transparent
               dark:bg-gray-800 dark:border-gray-700 dark:text-white mb-8"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    placeholder="••••••••"
  />

  <button
    type="submit"
    className="cursor-pointer w-full py-3 bg-red-700 hover:bg-red-600 text-white
               font-bold rounded-md shadow-md
               transition duration-300 ease-in-out hover:scale-105 transform "
  >
    Criar conta
  </button>
</form>
 </div>
    )
}