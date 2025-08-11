import { useEffect, useState } from "react";
import { fetchAllAuthors, fetchAuthorsByName, deleteAuthorById } from "../../api/authorApi.js";
import AuthorItem from "../../components/Author/AuthorItem.jsx";
import AuthorForm from "../../components/Author/AuthorForm.jsx";

function AuthorList() {
    const [authors, setAuthors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAuthor, setSelectedAuthor] = useState(null);

    const loadAuthors = async () => {
        const data = await fetchAllAuthors();
        setAuthors(data);
    };

    const searchAuthors = async (name) => {
        if (!name.trim()) {
            loadAuthors();
            return;
        }
        const data = await fetchAuthorsByName(name);
        setAuthors(Array.isArray(data) ? data : [data]);
    };

    const handleEdit = (author) => {
        setSelectedAuthor(author);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa tác giả này?")) {
            await deleteAuthorById(id);
            loadAuthors();
        }
    };

    useEffect(() => {
        loadAuthors();
    }, []);

    return (
        <div className="flex flex-row">
            <div className="w-1/4">
                <AuthorForm
                    initialAuthor={selectedAuthor}
                    onSuccess={() => {
                        setSelectedAuthor(null);
                        loadAuthors();
                    }}
                />
            </div>

            <div className="w-3/4">
                <input
                    type="text"
                    placeholder="Search author by name..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        searchAuthors(e.target.value);
                    }}
                    className="border p-2 mb-4 w-full"
                />

                <ul>
                    {authors.map((author) => (
                        <AuthorItem
                            key={author.id}
                            author={author}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            </div>


        </div>
    );
}

export default AuthorList;
