import Link from "next/link";

export default async function Home() {

  const rowCountries = await fetch('http://localhost:4000')
  const countries = await rowCountries.json()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-6 pb-5 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="w-full text-3xl font-bold text-center">Countries of The World</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {countries.map((country) => {
          return (
            <article 
              key={country.countryCode} 
              className="flex flex-col justify-center items-center bg-slate-700 rounded-md p-4"
            >
              <h2 className="text-xl md:text-2xl text-center flex flex-grow">{country.name}</h2>
              <Link 
                href={`/${country.name}?code=${country.countryCode}`} 
                className="text-sm md:text-base rounded-lg px-2 my-2.5 bg-red-950 hover:bg-slate-800">
                Details 
              </Link>
            </article>
          )
        })}
        </section>
        </main>
    </div>
  );
}
