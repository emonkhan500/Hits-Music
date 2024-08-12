import React from 'react';

const Contact = () => {
    return (
        <div className='bg-[#E85D04]  flex fonts justify-center items-center gap-10 py-16'>
            <h1 className='text-5xl font-extrabold text-white mt-3'>SUBSCRIBE</h1>
            <div className='space-x-3'>
                <input 
                    className='h-11 w-96 bg-[#E85D04] border-b-2 border-white text-white placeholder-white px-4' 
                    type="email" 
                    placeholder="Your email"
                />
                <button 
                    type='submit' 
                    className='bg-[#E85D04] border-2 border-white px-4 py-2 text-white'
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>
    );
};

export default Contact;
