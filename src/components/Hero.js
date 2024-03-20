import React from 'react'

export const Hero = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4'>
        <div className=' max-h-[500px] relative'>
            {/* overlay */}
            <div className=' absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <hi className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold ' >The <span className=' text-orange-500'>Azizi</span></hi>
                <hi className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold ' ><span className=' text-orange-500'>Foods </span>Delivered</hi>
            </div>
            <img className=' w-full max-h-[500px] ' src='https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        </div>

    </div>
  )
}
