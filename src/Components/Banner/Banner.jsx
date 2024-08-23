import React from 'react';

const Banner = () => {
    return (
        <div>
          <div className="carousel fonts w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className='flex flex-col md:flex-row w-full  justify-between px-16   lg:px-80 bg-black items-center '> 
  <div>
  <h1 className='text-6xl flex-1 font-extrabold text-white '>YOUR <br />       <span className='text-[#F48C06] font-extrabold'>FIRST HIT</span> <br />
   STARTS 
  <br />HERE</h1> 
  <h1 className='text-white text-base mt-5'>What’s trending right now :  <span className='text-[#FAA307] text-xs'>#lovely Billie Eilish, Khalid </span></h1>
  </div>
  
   <img
      src="https://i.ibb.co/ZLb1tfp/bg.png"
      className= " h-[420px]" />
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="text-3xl text-white ">❮</a>
      <a href="#slide2" className=" text-3xl text-white ">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <div className='flex w-full flex-col md:flex-row  justify-between px-16   lg:px-80 bg-black items-center '> 
  <div>
  <h1 className='text-6xl flex-1 font-extrabold text-white '>YOUR <br />       <span className='text-[#F48C06] font-extrabold'>FIRST HIT</span> <br />
   STARTS 
  <br />HERE</h1> 
  <h1 className='text-white text-base mt-5'>What’s trending right now :  <span className='text-[#FAA307] text-xs'>#bad guy Billie Eilish </span></h1>
  </div>
  
   <img
      src="https://i.ibb.co/ZLb1tfp/bg.png"
      className= " h-[420px]" />
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="text-3xl text-white ">❮</a>
      <a href="#slide1" className=" text-3xl text-white ">❯</a>
    </div>
  </div>
 
</div>
          
        </div>
    );
};

export default Banner;