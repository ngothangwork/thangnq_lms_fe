import { useEffect, useState } from "react";
import { fetchAllMembers, deleteMemberById } from "../../api/memberApi.js";
import MemberItem from "../../components/Member/MemberItem.jsx";
import MemberForm from "../../components/Member/MemberForm.jsx";

function MemberList() {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);

    const loadMembers = async () => {
        const data = await fetchAllMembers();
        setMembers(data);
    };

    const handleEdit = (member) => {
        setSelectedMember(member);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa thành viên này?")) {
            await deleteMemberById(id);
            loadMembers();
        }
    };

    useEffect(() => {
        loadMembers();
    }, []);

    return (
        <div className="flex flex-row">
            <div className="w-1/4">
                <MemberForm
                    initialMember={selectedMember}
                    onSuccess={() => {
                        setSelectedMember(null);
                        loadMembers();
                    }}
                />
            </div>

            <div className="w-3/4">
                <ul>
                    {members.map((member) => (
                        <MemberItem
                            key={member.id}
                            member={member}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MemberList;
