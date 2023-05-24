import React from 'react'
import { BsWind } from 'react-icons/bs';

function Hightlights({ currentWeather }) {
    // console.log(currentWeather)
    

    return (

        
        <div className='p-6 bg-[#F1F6F9] text-white  '>

            <p className='text-black text-[30px] font-bold'>Today's Hightlights</p>


            <div className='group sm:flex sm:flex-col gap-4  md:grid md:grid-cols-2 lg:mt-4 lg:gap-6 '>

                <div className='bg-[#1E213A] px-2 py-4 lg:p-2 flex flex-col gap-4 items-center  justify-center mt-4 lg:mt-0  lg:min-h-[120px] '>
                    <p className=''>Wind status</p>
                    <p className='text-[36px] font-bold '>{currentWeather.current ? currentWeather.current.wind_mph : ''} <span className = 'text-[26px] text-gray-200'>mph</span></p>
                    <div className='flex gap-2 items-center '>
                        <BsWind />
                        <p>{currentWeather.current ? currentWeather.current.wind_dir : ''}</p>
                    </div>
                    <br />
                </div>

                <div className='bg-[#1E213A] px-2 py-4 lg:p-2 flex flex-col gap-4 items-center justify-center mt-4 lg:mt-0 lg:min-h-[120px] '>
                    <p>Humidity</p>
                    <p className='text-[36px] font-bold' >{currentWeather.current ? currentWeather.current.humidity : ''} <span className = 'text-[26px] text-gray-200'>%</span></p>
                    {/* progress  bar  with css*/}
                    <div className='w-[80%] flex flex-col gap-[1px]'>
                        <div className='flex justify-between items-center'>
                            <p>0</p>
                            <p>50</p>
                            <p>100</p>
                        </div>
                        <div className='w-80% h-[10px] bg-gray-300 rounded-lg'>
                            <div className=' h-[10px] bg-[#FFEC65] rounded-lg ' style={{width:currentWeather.current ? `${currentWeather.current.humidity}%` : 0}} ></div>
                        </div>

                        <p className='text-end'>%</p>
                        
                    </div>

                </div>


                <div className='bg-[#1E213A] px-2 py-4 lg:p-2 flex flex-col gap-4 items-center justify-center mt-4 lg:mt-0 '>
                    <p>Visibility</p>
                    <p className='text-[36px] font-bold '>{currentWeather.current ? currentWeather.current.vis_miles : ''} <span className = 'text-[26px] text-gray-200'>miles</span></p>
                </div>


                <div className='bg-[#1E213A] px-2 py-4 lg:p-2 flex flex-col gap-4 items-center justify-center mt-4 lg:mt-0 '>
                    <p>Air Pressure</p>
                    <p className='text-[36px] font-bold '>{currentWeather.current ? currentWeather.current.pressure_in : ''} <span className = 'text-[26px] text-gray-200'>mb</span></p>
                </div>
            </div>
        </div>
    )
}

export default Hightlights