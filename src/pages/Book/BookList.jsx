import { useEffect, useState } from 'react';
import {
    fetchAllBooks,
    deleteBookById,
} from '../../api/bookApi.js';
import BookForm from "../../components/Book/BookForm.jsx";
import BookItem from "../../components/Book/BookItem.jsx";

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const loadBooks = async () => {
        const data = await fetchAllBooks();
        setBooks(data);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sách này?")) {
            await deleteBookById(id);
            loadBooks();
        }
    };

    const handleEdit = (book) => {
        setSelectedBook(book);
    };

    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <div className="p-4 flex w-full gap-4">
            <div className="w-1/3">
                <BookForm
                    initialBook={selectedBook}
                    onSuccess={() => {
                        setSelectedBook(null);
                        loadBooks();
                    }}
                />
            </div>

            <div className="w-2/3">
                <h2 className="text-2xl mb-4">List of Books</h2>
                <ul>
                    {books.map((book) => (
                        <BookItem
                            key={book.id}
                            book={book}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
