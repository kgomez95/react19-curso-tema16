import Details from "../pages/details.page";
import SearchUsers from "../pages/search-users.page";
import Update from "../pages/update.page";

const routes = [
    {
        path: "",
        element: <SearchUsers />,
    },
    {
        path: "details/:idUsuario",
        element: <Details />,
    },
    {
        path: "update/:idUsuario",
        element: <Update />,
    }
];

export default routes;