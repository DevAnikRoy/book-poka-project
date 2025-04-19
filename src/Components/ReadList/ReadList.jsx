import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../../Pages/Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])

    const [sort, setSort] = useState('')

    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const StoredBookData = getStoredBook()
        const ConvertedStoredBooks = StoredBookData.map(id => parseInt(id));
        // console.log(ConvertedStoredBooks)
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId))

        setReadList(myReadList);
    }, []);

    const handleSort = (type) => {
        setSort(type)
        if (type === 'pages') {
            const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPages)
        }
        if (type === 'ratings') {
            const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating)
            setReadList(sortedByRating)
        }
    }


    return (
        <div className='mt-12'>
            <div className='text-center'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: {sort ? sort : ''}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort('pages')}>Pages</a></li>
                        <li><a onClick={() => handleSort('ratings')}>Rating</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-center mt-8 mb-5 text-green-600 font-semibold'>Total Read Book: {readList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center gap-6 object-cover'>
                        {
                            readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-red-500 text-2xl text-center mt-8 mb-5'>Wish List Functionality is Coming Soon...</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;