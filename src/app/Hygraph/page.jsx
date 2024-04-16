"use client"
//rfce
import React, { useEffect, useState } from 'react'
import GlobalApi from "@/app/_utils/GlobalApi"
import Image from 'next/image'


function CountryList() {
    const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        getCountryList();
    }, [])

    /**
    * Used to get Category List
    */
    const getCountryList = () => {
        GlobalApi.getCountry().then(resp => {
            console.log(resp.countries);
            setCountryList(resp.countries);
        })
    }

    /* return (
        //https://youtu.be/V2AE0YS8WYs?t=3941
        <div>
            <div>
                {countryList && countryList.map((country, index) => (
                    <div key={index}>
                        <Image src={country.imageSrc?.url} alt={country.name}
                            width={40}
                            height={40}
                        />
                ))}
        </div>
        </div>
            );
}

            export default CountryList

 
//map function - https://youtu.be/PvYYjSRVa44?t=1675 //writing this </div> so that i can learn */

return (
    <div className='flex gap-4'>
      <div>
        {countryList && countryList.map((country, index) => (
          <div key={index}>
            <Image src={country.imageSrc?.url} alt={country.name} width={40} height={40} />
            <h2>{country.description}</h2>
            <h1 className='text-sm font-medium text-red-400'>{country.slug}</h1>

          </div>

        ))}
      </div>

    </div>
  );
  } 
  
  export default CountryList;