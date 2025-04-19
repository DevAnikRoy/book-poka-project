import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    const { bookName, author, image, category, rating, tags, yearOfPublishing, publisher, bookId, totalPages } = singleBook;

    console.log(singleBook)

    return (
        <section className=''>
            <Link to={`/bookDetails/${bookId}`}>
                <div className="card bg-base-100 w-96 shadow-sm border border-[#c7c7c7]">
                    <div className='bg-[#F3F3F3] rounded-xl m-4'>
                        <figure>
                            <img className='w-[124px] h-[166px] my-6 object-cover rounded-box'
                                src={image}
                                alt="books" />
                        </figure>
                    </div>
                    <div className="card-body">

                        <h2 className="card-title">{bookName}</h2>

                        <div className='flex justify-start items-center gap-4'>
                            <div className="badge bg-[#79CC52]">Page: {totalPages}</div>
                            <div className="badge badge-secondary">{yearOfPublishing}</div>
                        </div>

                        <p><span className='font-bold'>Author:</span> {author}</p>
                        <p><span className='font-bold'>Publisher:</span> {publisher}</p>

                        <div className="card-actions justify-between border-t-1 border-dotted pt-2">
                            <div className='flex justify-center items-center gap-3'>
                                {
                                    tags.map((tag, index) => <button key={index}>#{tag}</button>)
                                }
                            </div>

                            <div className='gap-3 flex'>
                                <div className="badge badge-outline font-bold">{category}</div>
                                <div className="badge badge-outline font-bold"><FaStarHalfAlt></FaStarHalfAlt>{rating}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
        </section>
    );
};

export default Book;