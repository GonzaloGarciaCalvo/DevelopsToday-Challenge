export async function generateStaticParams() {
  /* const rowCountries = await fetch('https://date.nager.at/api/v3/AvailableCountries') */
  const URL = 'https://developstoday-challenge.onrender.com'
  /* const rowCountries = await fetch('http://localhost:4000') */
  const rowCountries = await fetch(URL)
  const countries = await rowCountries.json()
    return countries.map((countrie) => ({
        country: countrie.country,
    }));
}

export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  )
}