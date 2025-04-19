import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([]);



    // we can load this data like this way but we don't do this. We will use the SUSPENSE for this loading so let's make this SUSPENSE.

    // useEffect(() => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // },[])


    // const bookPromise = fetch('booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-16 mb-12'>Books</h1>

            {/* using this book promise with the SUSPENSE and fallBack */}

            <div className='grid grid-cols-1 justify-center items-center gap-10 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;