import Header from "../../components/Header/Header.jsx";

function Error() {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold text-red-500">404 - Không tìm thấy trang</h1>
                <p className="mt-2">Trang này không có trong code đâu, bổ sung đi :)</p>
            </div>
        </>

    );
}

export default Error;