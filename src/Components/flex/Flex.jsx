import React from 'react';

const Flex = () => {
    return (
        <div>
            <div className=' fonts px-4 lg:px-56 pt-20 pb-20 bg-black text-white'>
                {/* div1 */}
                <div className='flex flex-col lg:flex-row'>
                   <div className='lg:w-1/2'><img className='h-auto lg:h-[400px]' src="https://i.ibb.co/W2N3m3k/Rectangle-32.png" alt="" /> </div>
                   <div className='lg:w-1/2 mt-10'> 
                    <h1 className='text-lg font-semibold '>Figma ipsum component</h1> 
                    <p className='mt-16'>Figma ipsum component variant main layer. Outline team follower figjam invite. Share library auto bold horizontal blur object. Connection ipsum blur overflow blur overflow. Community thumbnail overflow style union strikethrough export stroke polygon. Flows object pixel stroke invite mask. Flatten arrange asset vertical prototype distribute edit duplicate comment content. </p>
                    <button className='px-3 py-2 mt-12 border border-white
                    '>READ MORE</button>
                   </div>
                </div>
                {/* div2 */}
                <div className='flex  flex-col-reverse lg:flex-row mt-20'>
                <div className='lg:w-1/2 mt-10'> 
                    <h1 className='text-lg font-semibold '>Figma ipsum component</h1> 
                    <p className='mt-16'>Figma ipsum component variant main layer. Outline team follower figjam invite. Share library auto bold horizontal blur object. Connection ipsum blur overflow blur overflow. Community thumbnail overflow style union strikethrough export stroke polygon. Flows object pixel stroke invite mask. Flatten arrange asset vertical prototype distribute edit duplicate comment content. </p>
                    <button className='px-3 py-2 mt-12 border border-white
                    '>READ MORE</button>
                   </div>
                <div className='lg:w-1/2'><img className='h-auto lg:h-[400px]'  src="https://i.ibb.co/vvK3sx6/Rectangle-32-1.png" alt="" /> </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Flex;