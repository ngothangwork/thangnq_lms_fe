import { useState, useEffect } from "react";
import { createBorrowing, updateBorrowingById } from "../../api/borrowingsApi.js";

export default function BorrowingForm({ onSuccess, initialBorrowing }) {
    const [borrowing, setBorrowing] = useState({
        borrowDate: "",
        dueDate: "",
        returnDate: "",
        status: "",
        version: "",
        memberId: "",
        bookId: "",
    });

    useEffect(() => {
        if (initialBorrowing) {
            setBorrowing({
                borrowDate: initialBorrowing.borrowDate || "",
                dueDate: initialBorrowing.dueDate || "",
                returnDate: initialBorrowing.returnDate || "",
                status: initialBorrowing.status || "",
                version: initialBorrowing.version || "",
                memberId: initialBorrowing.member?.id || "",
                bookId: initialBorrowing.book?.id || "",
            });
        } else {
            setBorrowing({
                borrowDate: "",
                dueDate: "",
                returnDate: "",
                status: "",
                version: "",
                memberId: "",
                bookId: "",
            });
        }
    }, [initialBorrowing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBorrowing({ ...borrowing, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...borrowing,
                memberId: Number(borrowing.memberId),
                bookId: Number(borrowing.bookId),
                borrowDate: borrowing.borrowDate || null,
                dueDate: borrowing.dueDate || null,
                returnDate: borrowing.returnDate || null,
            };

            console.log(payload);

            if (initialBorrowing && initialBorrowing.id) {
                await updateBorrowingById(initialBorrowing.id, payload);
            } else {
                await createBorrowing(payload);
            }
            setBorrowing({
                borrowDate: "",
                dueDate: "",
                returnDate: "",
                status: "",
                version: "",
                memberId: "",
                bookId: "",
            });
            onSuccess();
        } catch (error) {
            console.error("Failed to save borrowing", error.response?.data || error.message);
            alert("Failed to save borrowing.");
        }
    };

    return (
        <div className="bg-white p-6 mt-2">
            <div className="text-black w-full font-bold">
                {initialBorrowing ? "Cập nhật phiếu mượn" : "Tạo phiếu mượn mới"}
            </div>
            <form className="flex flex-col mt-3 gap-4" onSubmit={handleSubmit}>
                <input
                    type="date"
                    name="borrowDate"
                    value={borrowing.borrowDate}
                    onChange={handleChange}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    required
                    placeholder="Ngày mượn"
                />
                <input
                    type="date"
                    name="dueDate"
                    value={borrowing.dueDate}
                    onChange={handleChange}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    required
                    placeholder="Ngày hạn trả"
                />
                <input
                    type="date"
                    name="returnDate"
                    value={borrowing.returnDate}
                    onChange={handleChange}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    placeholder="Ngày trả (nếu đã trả)"
                />
                <input
                    type="text"
                    name="status"
                    value={borrowing.status}
                    onChange={handleChange}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    placeholder="Trạng thái"
                    required
                />
                <input
                    type="text"
                    name="version"
                    value={borrowing.version}
                    onChange={handleChange}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    placeholder="Phiên bản"
                    required
                />
                <input
                    type="number"
                    name="memberId"
                    value={borrowing.memberId}
                    onChange={handleChange}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    placeholder="ID thành viên"
                    required
                    min={1}
                />
                <input
                    type="number"
                    name="bookId"
                    value={borrowing.bookId}
                    onChange={handleChange}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    placeholder="ID sách"
                    required
                    min={1}
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
