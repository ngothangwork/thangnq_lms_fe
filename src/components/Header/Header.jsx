import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="flex flex-row gap-6 p-4 bg-blue-100 justify-center">
                <div className="hover:pointer hover:text-blue-500">
                    <Link to="/">Quản lý sách</Link>
                </div>
                <div className="hover:pointer hover:text-blue-500">
                    <Link to="/authors">Quản lý tác giả</Link>
                </div>
                <div className="hover:pointer hover:text-blue-500">
                    <Link to="/borrows">Quản lý mượn sách</Link>
                </div>
                <div className="hover:pointer hover:text-blue-500">
                    <Link to="/members">Quản lý người dùng</Link>
                </div>
            </div>
        </>
    );
}

export default Header;
