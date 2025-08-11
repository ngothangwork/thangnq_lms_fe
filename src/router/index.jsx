import { createBrowserRouter } from "react-router-dom";
import BookList from "../pages/Book/BookList.jsx";
import BookForm from "../components/Book/BookForm.jsx";
import Home from "../pages/Home/Home.jsx";
import ManageLayout from "../layout/ManageLayout.jsx";
import Error from "../pages/Error/Error.jsx";
import AuthorPage from "../pages/Author/AuthorPage.jsx";
import MemberPage from "../pages/Member/MemberPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ManageLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "create-book",
                element: <BookForm />,
            },
            {
                path: "authors",
                element: <AuthorPage />,
            },
            {
                path: "members",
                element: <MemberPage />,
            },
            {
                path: "book-list",
                element: <BookList />,
            },
        ],
    },
]);

export default router;
