import React from 'react';

const Artist = () => {
    return (
        <div className='bg-black fonts'>
            <h1 className='uppercase pt-20 pb-14 text-white text-lg text-center tracking-widest'>Our Favorite Artists</h1>
            <div>
                <div className='flex gap-6 justify-center pb-10'>
                  <div className='bg-[#F48C06] rounded-t-full rounded-b-full'>
                  <img className='rounded-b-full pt-9 h-full' src="https://i.ibb.co/d7GCkXR/MODEL-2-1.png" alt="" />
                  </div>
                  <div className='bg-[#E85D04] rounded-t-full rounded-b-full'>
                  <img className='rounded-b-full pt-9' src="https://i.ibb.co/88t8gmw/MODEL-2-1-1.png" alt="" />
                  </div>
                  <div className='bg-[#FAA307] rounded-t-full rounded-b-full'>
                  <img className='rounded-b-full pt-9 h-full' src="https://i.ibb.co/JkyFd0X/MODEL-2-1-2.png" alt="" />
                  </div>
                  <div className='bg-[#9D0208] rounded-t-full rounded-b-full'>
                  <img className='rounded-b-full pt-9' src="https://i.ibb.co/rxBtFZT/MODEL-2-1-3.png" alt="" />
                  </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Artist;