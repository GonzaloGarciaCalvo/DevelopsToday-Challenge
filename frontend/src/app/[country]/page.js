"use client"
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import dynamic from 'next/dynamic';

const CountryData = dynamic(() => import('./countryData'), { suspense: true });

export default function Page({ params }) {

  const country = decodeURIComponent(params.country);

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