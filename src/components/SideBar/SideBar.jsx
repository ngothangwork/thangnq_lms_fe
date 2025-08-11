import {Link} from "react-router-dom";

function sideBar (){
    return (
        <>
            <div className="p-4 bg-blue-50 mt-2">
                <div className="hover:cursor-pointer hover:bg-amber-200 p-2">
                    <Link to="/">Xem tất cả sách</Link>
                </div>
                <div className="hover:cursor-pointer hover:bg-amber-200 p-2">
                    <Link to="/create-book">Thêm sách</Link>
                </div>
            </div>

        </>
    )
}
export default sideBar;