import React from 'react'

function TopButtons({setQuery}) {

 const citys = [{
  id:1,
  name: "London"
 },
 {id:2,
  name: "Paris"
},
{id:3,
name:"Berlin"
},
{id:4,
name:"Lisbon"
}
];

  return (
    <div className='flex items-center justify-around my-5'>{citys.map((city)=>(
     
       <button key={city.id} className='text-white text-lg font-medium' onClick={()=>setQuery({q: city.name})}>{city.name}</button>

    ))}</div>
  )
}

export default TopButtons;