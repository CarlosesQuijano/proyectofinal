import React, { useState } from 'react'


function Searchform({setCity , setShowForm}) {
    const API_KEY = process.env.REACT_APP_API_KEY

    const [ searchValue , setSearchValue] = useState('')
    const  [ results , setResults] = useState([])
    const [  , setWarning] = useState('')


    const  searchResult = async () => {
        const url = 'https://api.weatherapi.com/v1/search.json?key='+API_KEY+'&q='+searchValue


        try{
            if(searchValue.trim() === ''){
                return setWarning('Search input can not be empty')
            }
            const  response = await fetch(url)
            const  data = await response.json()
            setResults(data)
            setSearchValue('')
            
        }catch{
            console.log('no search')
        }

    }

    const  handleSelectedLocation = (x) => {
        setCity(x)
        setShowForm(false)
    }

    return (
        <div className='h-screen w-full bg-slate-900 '>
            
            <div className='flex justify-between items-center gap-2'>
                <input className='w-full h-[50px] bg-transparent  p-3 ' placeholder='Search for location' type="text" name="place" id=""  value={searchValue} onChange={(e)=> {setSearchValue(e.target.value)}}/>
                <button onClick={searchResult} className=' bg-blue-500 rounded-full px-4 py-3 '>Search</button>
            </div>


            <div className='flex flex-col gap-4 py-4'>

            {
                
                results.map((result , index) => {
                    return (
                        <div key={index} onClick={()=> {handleSelectedLocation(result.url)}} className=' cursor-pointer flex  justify-between  bg-slate-500 py-2 px-1' >
                            <p className=''>{result.name}</p>
                            <p className='text-gray-400'>{result.country}</p>
                        </div>
                    )
                })
            }

            </div>



            
        </div>
    )
}

export default Searchform