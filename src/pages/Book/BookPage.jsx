import { useEffect, useState } from 'react';
import { fetchAllBooks } from '../../api/bookApi.js';
import BookList from "./BookList.jsx";


export default function BookPage() {
    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        const data = await fetchAllBooks();
        setBooks(data);
    };

    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Book Management</h1>
            <div className="gap-4">
                <BookList books={books} />
            </div>

        </div>
    );
}
