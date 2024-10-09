"use client"
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
/* import dynamic from 'next/dynamic' */
/* const CountryData = dynamic(() => import('./countryData')) */
import CountryData from './countryData';

export default function Page({ params }) {
  const { country } = params;
  /* const searchParams = useSearchParams()
  const code = searchParams.get('code') */


  const MyFallback = () => {
    return(
      <section className='flex flex-row justify-center py-4 '>
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <h1 className='text-4xl p-10'>Loading</h1>
          <div className=' animate-ping bg-slate-100 rounded-full h-16 w-16'></div>
        </div> 
      </section>
    )

  }
  return (
    <Suspense fallback={ <MyFallback /> }> 
      <CountryData  country={country} />
    </Suspense>
  )
}


    /* 
    return (
      <CountryData code={code} country={country} />

  )  */