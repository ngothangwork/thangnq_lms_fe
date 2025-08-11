import { useEffect, useState } from "react";
import { fetchAllAuthors } from "../../api/authorApi.js";

export default function MultiSelectAuthors({ selectedAuthors, setSelectedAuthors }) {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const loadAuthors = async () => {
            try {
                const data = await fetchAllAuthors();
                setAuthors(data);
            } catch (error) {
                console.error("Failed to load authors:", error);
            }
        };
        loadAuthors();
    }, []);

    const handleToggle = (author) => {
        if (selectedAuthors.find(a => a.id === author.id)) {
            // Nếu đã chọn, bỏ chọn
            setSelectedAuthors(selectedAuthors.filter(a => a.id !== author.id));
        } else {
            // Nếu chưa chọn, thêm vào
            setSelectedAuthors([...selectedAuthors, author]);
        }
    };

    return (
        <div>
            <label className="font-semibold mb-1 block">Chọn tác giả:</label>
            <div className="max-h-48 overflow-auto border rounded p-2">
                {authors.map((author) => (
                    <label key={author.id} className="block">
                        <input
                            type="checkbox"
                            checked={selectedAuthors.some(a => a.id === author.id)}
                            onChange={() => handleToggle(author)}
                            className="mr-2"
                        />
                        {author.name}
                    </label>
                ))}
            </div>
        </div>
    );
}
