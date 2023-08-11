'use client'
import {React }from 'react'
import styles from '@/.next/static/css/app/layout.css'
import { useRouter } from 'next/navigation'
import { auth } from '@/firebase/config'
import {signOut} from "firebase/auth"

const post = () => {
    const router=useRouter();
    function handleLogOut(e){
      e.preventDefault();
      signOut(auth)
      .then(()=>{
        console.log("You are logged out");
        router.push("/")
      })
      .catch((error)=>{

      });
    }
   

  return (

    <div><h1>post</h1>

    <button onClick={handleLogOut} className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" >Sign out </button></div>

  )
}

export default post;