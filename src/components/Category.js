import React from 'react'
import { categories } from '../data/data'

export const Category
 = () => {
  return (
    <div className=' max-w-[1640px] px-4 py-12'>
        <h1 className=' text-orange-600 font-bold text-4xl text-center'>Top Menu Items</h1>
        {/*Categorites */}
        <div className=' grid grid-cols-2 md:gird-cols-4 gap-6 py-6'>
            {categories.map((item,index)=>
            <div key={index} className=' bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                <h2 className=' font-bold sm:text xl'>{item.name}</h2>
                <img className=' w-20'
                src={item.image} alt={item.name}></img>

            </div>
            )}
        </div>
    </div>
  )
}
