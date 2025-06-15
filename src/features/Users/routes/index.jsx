import Details from "../pages/details.page";
import SearchUsers from "../pages/search-users.page";

const routes = [
    {
        path: "",
        element: <SearchUsers />,
    },
    {
        path: "details/:idUsuario",
        element: <Details />,
    }
];

export default routes;