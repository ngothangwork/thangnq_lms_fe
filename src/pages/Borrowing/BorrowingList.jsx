import { useEffect, useState } from "react";
import { fetchAllBorrowings, deleteBorrowingById } from "../../api/borrowingsApi.js";

export default function BorrowingList({ onEdit }) {
    const [borrowings, setBorrowings] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(borrowings);

    const fetchBorrowings = async () => {
        setLoading(true);
        try {
            const data = await fetchAllBorrowings();
            setBorrowings(data);
        } catch (error) {
            console.error("Failed to fetch borrowings", error);
            alert("Không thể tải danh sách phiếu mượn");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
         fetchBorrowings();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa phiếu mượn này?")) {
            try {
                await deleteBorrowingById(id);
                await fetchBorrowings();
            } catch (error) {
                console.error("Failed to delete borrowing", error);
                alert("Xóa thất bại");
            }
        }
    };

    if (loading) return <div>Đang tải...</div>;

    return (
        <div className="bg-white w-full p-6 mt-2 rounded">
            <div className="text-black font-bold mb-4">Danh sách phiếu mượn</div>
            <table className=" table-auto border border-black">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border border-black px-2 py-1">ID</th>
                    <th className="border border-black px-2 py-1">Ngày mượn</th>
                    <th className="border border-black px-2 py-1">Ngày trả hạn</th>
                    <th className="border border-black px-2 py-1">Ngày trả</th>
                    <th className="border border-black px-2 py-1">Trạng thái</th>
                    <th className="border border-black px-2 py-1">Thành viên</th>
                    <th className="border border-black px-2 py-1">Sách</th>
                    <th className="border border-black px-2 py-1">Actions</th>
                </tr>
                </thead>
                <tbody>
                {borrowings.length === 0 ? (
                    <tr>
                        <td colSpan={8} className="text-center py-4">Chưa có dữ liệu</td>
                    </tr>
                ) : (
                    borrowings.map((b) => (
                        <tr key={b.id} className="hover:bg-gray-100">
                            <td className="border border-black px-2 py-1">{b.id}</td>
                            <td className="border border-black px-2 py-1">{b.borrowDate}</td>
                            <td className="border border-black px-2 py-1">{b.dueDate}</td>
                            <td className="border border-black px-2 py-1">{b.returnDate || "-"}</td>
                            <td className="border border-black px-2 py-1">{b.status}</td>
                            <td className="border border-black px-2 py-1">{b.member?.name || "-"}</td>
                            <td className="border border-black px-2 py-1">{b.book?.title || "-"}</td>
                            <td className="border border-black px-2 py-1 space-x-1">
                                <button
                                    onClick={() => onEdit(b)}
                                    className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={() => handleDelete(b.id)}
                                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}
