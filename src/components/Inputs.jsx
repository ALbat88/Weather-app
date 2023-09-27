import { useState } from 'react';
import React  from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons';

function Inputs({setQuery, units, setUnits }) {


  const [city, setCity] = useState("");

  const handleSearchClick=()=>{
    if( city !== "") setQuery({q: city})
  };

  const handleLocationClick=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=> {
        let lat=position.coords.latitude;
        let lon= position.coords.longitude;
      
      setQuery({
        lat,
        lon
      });
    });
  }
};

const handleUnitClick=(e)=>{
  const selected = e.currentTarget.name;
  
  if( units !== selected) setUnits(selected)



}


  return (
    <div className='flex flex-row justify-center my-6'>
   < div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
    <input 
    value={city}
    onChange={(e)=>setCity(e.currentTarget.value)}
    type='text'
     placeholder='Search for city...'
    className='text-xl font-light p-2 focus w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
    <UilSearch
    onClick={handleSearchClick}
    size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
    <UilLocationPoint
    onClick={handleLocationClick}
    size={25}className="text-white cursor-pointer transition ease-out hover:scale-125"/>
   </div>
   <div className='flex flex-row w-1/4 items-center justify-center'>
    <button name="metric" className='text-xl text-white font-light hover:scale-125 transition ease-out'
    onClick={handleUnitClick}
    >°C</button>
    <p className='mx-1 text-xl text-white'>|</p>
    <button name="imperial" className='text-xl text-white font-light  hover:scale-125 transition ease-out'
    onClick={handleUnitClick}
    >°F</button>
   </div>

    </div>
  )
}

export default Inputs