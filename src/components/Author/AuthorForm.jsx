import { useState, useEffect } from "react";
import { createAuthor, updateAuthorById } from "../../api/authorApi.js";

function AuthorForm({ onSuccess, initialAuthor }) {
    const [authors, setAuthors] = useState({
        name: "",
        birthYear: ""
    });

    useEffect(() => {
        if (initialAuthor) {
            setAuthors({
                name: initialAuthor.name || "",
                birthYear: initialAuthor.birthYear || ""
            });
        } else {
            setAuthors({ name: "", birthYear: "" });
        }
    }, [initialAuthor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthors({
            ...authors,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (initialAuthor && initialAuthor.id) {
            await updateAuthorById(initialAuthor.id, {
                ...authors,
                birthYear: Number(authors.birthYear)
            });
        } else {
            await createAuthor({
                ...authors,
                birthYear: Number(authors.birthYear)
            });
        }

        setAuthors({ name: "", birthYear: "" });
        onSuccess();
    };

    return (
        <div className="bg-white p-6 max-w-md mt-2">
            <div className="text-black w-full font-bold">
                {initialAuthor ? "Cập nhật tác giả" : "Nhập thông tin tác giả"}
            </div>
            <form className="flex flex-col mt-3 gap-4" onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={authors.name}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    onChange={handleChange}
                    type="text"
                    placeholder="Tên tác giả"
                />
                <input
                    name="birthYear"
                    value={authors.birthYear}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    onChange={handleChange}
                    type="number"
                    placeholder="Năm sinh tác giả"
                />
                <button
                    type="submit"
                    className="bg-black text-white border w-20 border-black px-4 py-1 hover:cursor-pointer hover:bg-white hover:text-black"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AuthorForm;
