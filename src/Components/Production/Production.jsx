import React from 'react';

const Production = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("https://i.ibb.co/Dg6CxXg/Rectangle-27.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
                width: '100%',
                position: 'relative',
            }} className=' px-8 lg:px-36 py-20 fonts'
             >

          <div 
          style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                   
                    justifyContent: 'center',
                    alignItems: 'center',}}
                className='bg-[#000000BF] flex lg:gap-16 px-10 py-10'>
                <div className='text-white '>
                    <h1 className='text-2xl font-medium uppercase'>Kickstart your music career today</h1>
                    <div className='mb-12 mt-6'>
                        <h1 className='text-lg'>The largest marketplace for high quality beats</h1>
                        <p className='text-sm'> -Access over 8 million beats from our growing community of producers around the world</p>
                    </div>
                    <div className='mb-12'>
                        <h1 className='text-lg'>The largest marketplace for high quality beats</h1>
                        <p className='text-sm'> -Access over 8 million beats from our growing community of producers around the world</p>
                    </div>
                    <div className='mb-12'>
                        <h1 className='text-lg'>The largest marketplace for high quality beats</h1>
                        <p className='text-sm'>-Access over 8 million beats from our growing community of producers around the world</p>
                    </div>
                    <div className='mb-12'>
                        <h1 className='text-lg'>The largest marketplace for high quality beats</h1>
                        <p className='text-sm'>-Access over 8 million beats from our growing community of producers around the world</p>
                    </div>
                </div>
                <div className='text-center'>
                <h1 className='text-[#F48C06] text-5xl font-extrabold'>PRODUCTION <br /> HOUSE</h1>
                <button className='px-6 border-white border-2 py-3 text-white text-center text-lg font-light mt-6'>
                    VIEW MORE
                </button>
                </div>
            </div>
        </div>
    );
};

export default Production;
