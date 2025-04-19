import React from 'react';

import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-10 bg-[#F3F3F3] rounded-4xl mt-10 mb-10'>
            <div>
                <h1 className='text-black text-5xl font-bold mb-10'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img className='w-md rounded-4xl' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;