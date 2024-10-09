import Link from "next/link";

export function Country({country}) {
  return (
    <article 
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
}
