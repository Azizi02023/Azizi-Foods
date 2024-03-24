import React from 'react';

export const Headlinescards = () => {

  function showMessage() {
    alert("Our website is currently undergoing maintenance to enhance your browsing experience. We apologize for any inconvenience caused and appreciate your patience. Please check back soon for the exciting updates!");
}

  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6' >
      {/* Cards */}
      <div className=' rounded-xl relative' >
        {/* Overlay */}
        <div className=' w-full h-full bg-black/45 rounded-xl text-white absolute'>
          <p className=' text-2xl font-bold  px-2 pt-4'>Sun's Out BOGO's Out</p>
          <p className=' px-2'>Through 8/26</p>
          <button className=' border-white bg-white text-black px-2 mx-2 absolute rounded-2xl bottom-4'onClick={() => showMessage()}>Order Now</button>
        </div>
        <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
         src='https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      </div>

      {/* Cards */}
      <div className=' rounded-xl relative'>
        {/* Overlay */}
        <div className=' w-full h-full bg-black/45 rounded-xl text-white absolute'>
          <p className=' text-2xl font-bold  px-2 pt-4'>Tha is most good for</p>
          <p className=' px-2'>Best over helth</p>
          <button className=' border-white bg-white text-black px-2 mx-2 absolute rounded-2xl bottom-4'onClick={() => showMessage()}>Order Now</button>
        </div>
        <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
         src='https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg' alt='' />
      </div>

      {/* Cards */}
      <div className=' rounded-xl relative'>
        {/* Overlay */}
        <div className=' w-full h-full bg-black/45 rounded-xl text-white absolute'>
          <p className=' text-2xl font-bold  px-2 pt-4'>The one which never have</p>
          <p className=' px-2'>The best overall</p>
          <button className=' border-white bg-white text-black px-2 mx-2 absolute rounded-2xl bottom-4'onClick={() => showMessage()}>Order Now</button>
        </div>
        <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
         src='https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      </div>
    </div>
  );
};
