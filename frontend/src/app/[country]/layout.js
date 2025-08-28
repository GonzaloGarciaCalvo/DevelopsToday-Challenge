export async function generateStaticParams() {

  const URL = 'https://developstoday-challenge.onrender.com'
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