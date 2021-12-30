import Head from 'next/head'
import React, { useEffect , useState } from 'react'
import Main from '../Components/Main';
import Signer from '../Components/Signer';

export default function Home() {
  
  // async function requestAccount() {
  //   await window.ethereum.request({ method: 'eth_requestAccounts' });  
  // }

  // useEffect(() => {
  //   requestAccount()
  // }, [])

  
  return (
    
    <div className="flex flex-col space-y-3 items-center justify-center min-h-screen py-2">
      
      <Head>
        <title>ToDoList DAPP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
    <h1 className='text-5xl font-bold'>ToDoList DAPP</h1>
    <h2 className='text-xl font-bold'>Deployed on Rinkeby Ethereum Testnet</h2>
   <Signer />
   <Main />
    </div>
  )
}


