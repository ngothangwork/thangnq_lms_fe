import { useState } from "react";
import MemberList from "./MemberList.jsx";

const MemberPage = () => {
    const [refreshKey, setRefreshKey] = useState(0);

    return (
        <div className="p-4 w-full gap-4">
            <div className="w-full">
                <MemberList key={refreshKey} />
            </div>
        </div>
    );
};

export default MemberPage;
