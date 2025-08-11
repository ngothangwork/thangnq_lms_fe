import { useState } from "react";
import BorrowingList from "./BorrowingList.jsx";
import BorrowingForm from "../../components/Borrowing/BorrowingForm.jsx";

export default function BorrowingPage() {
    const [editingBorrowing, setEditingBorrowing] = useState(null);
    const [refreshFlag, setRefreshFlag] = useState(false);

    const handleEdit = (borrowing) => {
        setEditingBorrowing(borrowing);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSuccess = () => {
        setEditingBorrowing(null);
        setRefreshFlag((f) => !f);
    };

    return (
        <div className="p-4 flex flex-row gap-4">
            <div className="w-1/3">
                <BorrowingForm onSuccess={handleSuccess} initialBorrowing={editingBorrowing} />
            </div>
            <div className="w-2/3">
                <BorrowingList key={refreshFlag} onEdit={handleEdit} />
            </div>
        </div>
    );
}
