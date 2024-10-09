'use client';
import { useEffect, useState } from 'react';
import LineGraf from './LineGraf';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const CountryData = ({  country }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    console.log("en efecto")
    const BASE_URL = 'https://developstoday-challenge.onrender.com';
    async function getCountryData() {
      try {
        const response = await fetch(`${BASE_URL}/country?name=${country}&code=${code}`);
        const data = await response.json();
        setCountryData(data);
        setLoading(false);
        console.log("getCountry")
      } catch (error) {
          console.error('Error fetching country data:', error.message);
          setLoading(false);
      }
    }
    getCountryData();
  }, [country, code]);

  const dataForGraf = {
    year: countryData?.population?.map((el) => el.value) || [],
    population: countryData?.population?.map((el) => el.year) || ""
  };

  const lineChartData = {
    labels: dataForGraf.population,
    datasets: [
      {
        label: "Population",
        data: dataForGraf.year,
        borderColor: "rgb(75, 192, 192)",
        color: "white"
      }
    ]
  };
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
    <>
      <div className='flex justify-center'>
      <h1 className='text-4xl'>{country}</h1>
      {countryData?.flag 
        ? <img className='mx-2 w-14 h-auto' src={countryData?.flag} alt='country flag'/> 
        : <div className='mx-2 w-14 h-auto bg-slate-500'></div>
      }
            
      </div>
      <section className='flex flex-row justify-center py-4 '>
        {loading && <MyFallback />}
      </section>
      <section className="px-4 md:px-8 xl:px-6">
        {countryData?.borders && (
          <h2 className='text-xl md:text-2xl "px-2 xl:py-18 px-24"'>Border Countries</h2>
        )}
        <div className="flex flex-row flex-wrap">
          {countryData?.borders?.map((border) => {
            return (
              <div
                key={border.commonName}
                className="bg-slate-700 min-w-20 p-1 m-2 rounded-md flex justify-center hover:bg-red-950"
              >
                <Link href={`/${border.commonName}?code=${border.countryCode}`}>
                  {border.commonName}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="p-1 md:p-8 xl:p-24">
        {countryData?.population?.length && (
          <LineGraf lineChartData={lineChartData} />
        )}
      </section>
    </>
  );
};

export default CountryData;

