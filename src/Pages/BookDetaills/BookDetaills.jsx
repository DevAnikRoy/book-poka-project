import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// this for sweet alert
const MySwal = withReactContent(Swal)

const BookDetaills = () => {

    const { id } = useParams();
    // this id is getting with string. So we have to convert them as a Number.
    const bookId = parseInt(id);


    // This Data is Coming from rout there i load this fake data and here is use this with (useLoadData)
    const data = useLoaderData();
    // so now let's find a the same data depend on the same id from this load data
    const singleBook = data.find(book => book.bookId === bookId);
    // so now we can destructure the data from the single book
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = singleBook



    // Now this is for the (handle mark as red) and the (localStorage)

    const handleMarkAsRead = id => {
        
        addToStoredDB(id);

        // just added a sweet alert
        MySwal.fire({
            title: "Good job!",
            text: "See Read List From Navbar",
            icon: "success"
          });
    }


    return (
        <div className='flex justify-center items-center gap-5 mt-20 mb-20'>
            <div className='bg-[#F3F3F3] rounded-xl w-1/3 flex justify-center items-center'>
                <img className='w-[20rem] p-7' src={image} alt="" />
            </div>
            {/* card details */}
            <div className='w-2/3 space-y-2'>
                <h2 className='text-4xl font-bold'>{bookName}</h2>
                <p><span className='font-semibold'>By:</span> {author}</p>
                <p className='font-semibold border-t border-dotted'> {category}</p>
                <p className='border-t border-dotted'><span className='font-semibold'>Review: </span>{review}</p>
                <div className='flex justify-start items-center gap-3 border-t border-dotted'>
                    <p className='font-semibold flex justify-start items-center gap-5'>Tag:
                        {
                            tags.map(tag => <p className=' text-green-400'>#{tag}</p>)
                        }
                    </p>
                </div>
                <div className='border-t border-dotted space-y-1 space-x-1'>
                    <p>Number of Page: <span className='font-semibold'>{totalPages}</span></p>
                    <p>Publisher: <span className='font-semibold'>{publisher}</span></p>
                    <p>Year of Publishing: <span className='font-semibold'>{yearOfPublishing}</span></p>
                    <p>Rating: <span className='font-semibold'>{rating}</span></p>
                </div>
                {/* Button */}
                <div className='flex justify-start items-center gap-4'>
                    <button onClick={() => handleMarkAsRead(id)} className="btn btn-soft btn-primary">Mark as Read</button>
                    <button className="btn btn-accent">Add to Wishlist</button>
                </div>
            </div>

        </div>
    );
};

export default BookDetaills;