import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.jsx";

function manageLayout () {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default manageLayout;