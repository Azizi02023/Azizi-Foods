import React, { useState } from 'react'
import { data } from '../data/data'

export const Foods = () => {
  const [foods, setFoods] = useState(data)

  //Filters for all the categories
  const filterType = (category) =>{
    setFoods(
      data.filter((item)=>{
        return item.category === category;
      }
      
      )
    )
  }
  //Filter by price
  const filterPrice = (price)=>{
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    )
  }

  return (
    <div className=' max-w-[1640px] py-6 p-4 m-auto '>
        <h1 className=' text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className=' flex flex-col lg:flex-row  justify-between '>
             {/* Filter Type */}
             <div>
                <p className=' font-bold text-gray-700 '>Filter Type</p>
                <div className=' flex justify-between flex-wrap py-4'>
                <button onClick={()=> setFoods(data)} className=' px-5 mx-1 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={()=> filterType('burger')} className=' px-5 mx-1 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                <button onClick={()=> filterType('pizza')} className=' px-5 mx-1 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button onClick={()=> filterType('salad')} className=' px-5 mx-1 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
                <button onClick={()=> filterType('chicken')} className=' px-5 mx-1 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

                {/* Filter Prices */}
             <div>
                <p className=' font-bold text-gray-700'>Filter Price</p>
                <div className=' flex justify-between max-w-[390px] w-full py-4'>
                <button onClick={()=> filterPrice('3.7$')} className=' px-5 mx-1 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >3.7$</button>
                <button onClick={()=> filterPrice('6.8$')} className=' px-5 mx-1 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>6.8$</button>
                <button onClick={()=> filterPrice('9$')} className=' px-5 mx-1 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>9$</button>
                <button onClick={()=> filterPrice('12$')} className=' px-5 mx-1 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>12$</button>
                </div>
            </div>
        </div>
        {/* Display the data */}
      <div className=' grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index)=>(
          <div key={index} className=' border  shadow-lg hover:scale-105 duration-300 rounded-lg'>
            <img className=' w-full h-[200px]  rounded-t-lg object-cover'
            src={item.image} alt={item.name}></img>
            <div className=' flex justify-between px-2 py-4'>
              <p className=' font-bold'>{item.name}</p>
              <p> <span className=' bg-orange-600 text-white p-1 rounded-full'>{item.price}</span></p>
            </div>
          </div>
        )
        )}
      </div>

    </div>
  )
}
