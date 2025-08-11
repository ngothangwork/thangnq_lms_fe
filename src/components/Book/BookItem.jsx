function BookItem({ book, onEdit, onDelete }) {
    return (
        <li className="border p-4 mb-2 rounded flex justify-between items-center">
            <div>
                <div className="font-semibold text-lg">{book.title}</div>
                <div>Thể loại: {book.category}</div>
                <div>Phiên bản: {book.version}</div>
                <div>Ngày tạo: {book.createdDate ? book.createdDate.slice(0,10) : "N/A"}</div>
                <div>Trạng thái: {book.available ? "Yes" : "No"}</div>
                <div>
                    Tác giả:{" "}
                    {book.authors && book.authors.length > 0
                        ? book.authors.map((a) => a.name).join(", ")
                        : "No authors"}
                </div>
            </div>

            <div className="flex gap-2">
                <div>
                    <button
                        onClick={() => onEdit(book)}
                        className="bg-black text-white px-3 py-1 border border-black hover:bg-white hover:text-black"
                    >
                        Edit
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => onDelete(book.id)}
                        className="bg-white text-black border border-black hover:text-white px-3 py-1 hover:bg-black"
                    >
                        Delete
                    </button>
                </div>


            </div>
        </li>
    );
}

export default BookItem;
