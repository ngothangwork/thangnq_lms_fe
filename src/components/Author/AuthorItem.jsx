function AuthorItem({ author, onEdit, onDelete }) {
    return (
        <div className="border p-4 mb-2 flex flex-row justify-between rounded">
            <div>
                <div>
                    Đây là tên tác giả này: {author.name}
                </div>
                <div>
                    Còn đây là năm tác giả ra đời: {author.birthYear}
                </div>
            </div>
            <div className="flex justify-around gap-2">
                <button
                    onClick={() => onEdit(author)}
                    className="bg-black border border-black hover:bg-white hover:text-black text-white px-4 rounded"
                >
                    Cập nhật
                </button>
                <button
                    onClick={() => onDelete(author.id)}
                    className="bg-white text-black hover:bg-black hover:text-white border border-black px-4  rounded"
                >
                    Xóa
                </button>
            </div>
        </div>
    );
}


export default AuthorItem;