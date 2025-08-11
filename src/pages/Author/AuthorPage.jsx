import { useState } from "react";
import AuthorList from "./AuthorList.jsx";

const AuthorPage = () => {
    const [refreshKey, setRefreshKey] = useState(0);


    return (
        <div className="p-4 w-full gap-4">
            <div className="w-full">
                <AuthorList key={refreshKey} />
            </div>
        </div>
    );
};

export default AuthorPage;
