import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetaills from '../Pages/BookDetaills/BookDetaills';
import ReadList from '../Components/ReadList/ReadList';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader:() => fetch('booksData.json'),
                path: '/',
                Component: Home,
            },
            {
                path: '/about',
                Component: About,
            },
            // make this path for the show new Read List that added
            {
                path:'readList',
                loader:() => fetch('booksData.json'),
                Component: ReadList,
            },

            // make a dynamic rout for each card that they can show them at /about
            {
                path: '/bookDetails/:id',
                loader:() => fetch('booksData.json'),
                Component: BookDetaills,
            },
            
        ]
    },
]);