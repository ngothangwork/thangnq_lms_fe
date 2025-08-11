import { useState, useEffect } from "react";
import { createBook, updateBookById } from "../../api/bookApi.js";
import MultiSelectAuthors from "./MultiSelectAuthors.jsx";

export default function BookForm({ onSuccess, initialBook }) {

    console.log(initialBook);

    const [book, setBook] = useState({
        title: "",
        category: "",
        available: true,
        createdDate: "",
        version: "",
    });

    const [selectedAuthors, setSelectedAuthors] = useState([]);

    useEffect(() => {
        if (initialBook) {
            setBook({
                title: initialBook.title || "",
                category: initialBook.category || "",
                available: initialBook.available ?? true,
                createdDate: initialBook.createdDate ? initialBook.createdDate.slice(0,10) : "",
                version: initialBook.version || "",
            });
            setSelectedAuthors(initialBook.authors || []);
        } else {
            setBook({
                title: "",
                category: "",
                available: true,
                createdDate: "",
                version: "",
            });
            setSelectedAuthors([]);
        }
    }, [initialBook]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setBook({
            ...book,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedAuthors.length === 0) {
            alert("Vui lòng chọn ít nhất một tác giả");
            return;
        }

        const bookData = {
            ...book,
            authors: selectedAuthors.map((author) => ({
                id: author.id,
                name: author.name,
            })),
        };

        try {
            if (initialBook && initialBook.id) {
                await updateBookById(initialBook.id, bookData);
            } else {
                await createBook(bookData);
            }

            setBook({
                title: "",
                category: "",
                available: true,
                createdDate: "",
                version: "",
            });
            setSelectedAuthors([]);
            onSuccess();
        } catch (error) {
            console.error("Create/Update book failed:", error.response?.data || error.message);
            alert("Failed to save book.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2 bg-white p-6 rounded shadow">
            <div className="text-black w-full font-bold mb-4">
                {initialBook ? "Cập nhật sách" : "Nhập thông tin sách"}
            </div>

            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={book.title}
                    onChange={handleChange}
                    className="border px-2 py-1"
                    required
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={book.category}
                    onChange={handleChange}
                    className="border px-2 py-1"
                    required
                />
                <input
                    type="date"
                    name="createdDate"
                    placeholder="Created Date"
                    value={book.createdDate}
                    onChange={handleChange}
                    className="border px-2 py-1"
                    required
                />
                <input
                    type="text"
                    name="version"
                    placeholder="Version"
                    value={book.version}
                    onChange={handleChange}
                    className="border px-2 py-1"
                    required
                />

                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="available"
                        checked={book.available}
                        onChange={handleChange}
                    />
                    <span>Available</span>
                </label>

                <MultiSelectAuthors
                    selectedAuthors={selectedAuthors}
                    setSelectedAuthors={setSelectedAuthors}
                />

                <button type="submit" className="bg-black text-white border border-black px-4 py-1 rounded hover:bg-white hover:text-black">
                    Submit
                </button>
            </div>
        </form>
    );
}
