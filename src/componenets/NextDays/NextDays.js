

import { getcleandate } from '../dateformat'
import { TbTemperatureFahrenheit , TbTemperatureCelsius } from 'react-icons/tb';

function NextDays({nextdays , temperaturefromat }) {

    return (
        <div className=' grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-4 md:flex md:gap-4 px-4 py-12 mt-10 md:mt-0 bg-[#9BA4B5] text-white lg:p-6 rounded-[12px]'>
            { nextdays.map((future ,  index)=> {
                return (
                    <div key={index} className=' flex flex-col justify-center items-center bg-[#1E213A] p-4  '>
                        <p>{ index === 0 ? 'Today' : getcleandate(future.date)}</p>
                        <img className='w-[120px]' src={future.day.condition.icon.replace('64x64' , '128x128')} alt="" />
                        <div className='flex justify-between items-center gap-6'>
                            <div className='flex'><p>{ future.day[`maxtemp_${temperaturefromat}`] }</p>{ temperaturefromat ==='c' ? <TbTemperatureCelsius   /> : <TbTemperatureFahrenheit />}</div>
                            <div className='flex'><p>{ future.day[`mintemp_${temperaturefromat}`] }</p>{ temperaturefromat ==='c' ? <TbTemperatureCelsius   /> : <TbTemperatureFahrenheit />}</div>
                        </div>

                    </div>
                )
            })

        }
        </div>
    )
}

export default NextDays