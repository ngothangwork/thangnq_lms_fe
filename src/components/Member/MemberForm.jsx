import { useState, useEffect } from "react";
import { createMember, updateMemberById } from "../../api/memberApi.js";

function MemberForm({ onSuccess, initialMember }) {
    const [member, setMember] = useState({
        name: "",
        email: "",
        phone: "",
        version: ""
    });

    useEffect(() => {
        if (initialMember) {
            setMember({
                name: initialMember.name || "",
                email: initialMember.email || "",
                phone: initialMember.phone || "",
                version: initialMember.version || ""
            });
        } else {
            setMember({ name: "", email: "", phone: "", version: "" });
        }
    }, [initialMember]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember({
            ...member,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (initialMember && initialMember.id) {
            await updateMemberById(initialMember.id, member);
        } else {
            await createMember(member);
        }
        setMember({ name: "", email: "", phone: "", version: "" });
        onSuccess();
    };

    return (
        <div className="bg-white p-6 max-w-md mt-2">
            <div className="text-black w-full font-bold">
                {initialMember ? "Cập nhật thành viên" : "Nhập thông tin thành viên"}
            </div>
            <form className="flex flex-col mt-3 gap-4" onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={member.name}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    onChange={handleChange}
                    type="text"
                    placeholder="Tên thành viên"
                />
                <input
                    name="email"
                    value={member.email}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email thành viên"
                />
                <input
                    name="phone"
                    value={member.phone}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    onChange={handleChange}
                    type="text"
                    placeholder="Số điện thoại"
                />
                <input
                    name="version"
                    value={member.version}
                    className="border-b mt-2 p-1 border-black max-w-sm"
                    onChange={handleChange}
                    type="text"
                    placeholder="Phiên bản"
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

export default MemberForm;
