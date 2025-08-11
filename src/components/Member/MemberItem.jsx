function MemberItem({ member, onEdit, onDelete }) {
    return (
        <div className="border p-4 mb-2 flex flex-row justify-between rounded">
            <div>
                <div>
                    Tên thành viên: {member.name}
                </div>
                <div>
                    Email: {member.email}
                </div>
                <div>
                    Phone: {member.phone}
                </div>
            </div>
            <div className="flex justify-around gap-2">
                <div>
                    <button
                        onClick={() => onEdit(member)}
                        className="bg-black border border-black hover:bg-white hover:text-black text-white px-4 rounded"
                    >
                        Cập nhật
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => onDelete(member.id)}
                        className="bg-white text-black hover:bg-black hover:text-white border border-black px-4 rounded"
                    >
                        Xóa
                    </button>
                </div>


            </div>
        </div>
    );
}

export default MemberItem;
