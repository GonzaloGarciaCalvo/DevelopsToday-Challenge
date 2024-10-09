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