'use client';
import { Suspense, useEffect, useState } from 'react';
import LineGraf from './LineGraf';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
let count = 0

const CountryData = ({ /* code, */ country }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  count++
  console.log("en CountryData, count: ", count)
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

  

  return (
    <>
       {/* <section className='flex flex-row justify-center py-4 '>
        {loading && <Fallback />}
       </section> */}
      <section className="px-2 md:px-8 xl:px-2">
        {countryData?.borders && (
          <h2 className='text-2xl "px-1 xl:py-18 px-24"'>Border Countries</h2>
        )}
        <div className="flex flex-row">
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

/* 

return (
    <>
      <section className="px-2 md:px-8 xl:px-2">
        {countryData?.borders && (
          <h2 className='text-2xl "px-1 xl:py-18 px-24"'>Border Countries</h2>
        )}
        <div className="flex flex-row">
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
  );*/