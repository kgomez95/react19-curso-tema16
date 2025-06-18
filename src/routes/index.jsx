import { createBrowserRouter, redirect } from "react-router-dom";
import { userRoutes } from "../features/Users";
import { profileRoutes } from "../features/Profile";
import App from "../App";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "users",
                children: userRoutes,
            },
            {
                path: "profile",
                children: profileRoutes,
            },
        ],
    },
    {
        index: true,
        loader: async () => redirect("/profile"),
    },
];

const router = createBrowserRouter(routes);
export default router;
