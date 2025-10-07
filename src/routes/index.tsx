import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Login from "../pages/LoginPages";


const routes: RouteObject[] = [        
    {
        path: "login",
        element: <Login/>,
    }
];
export const router = createBrowserRouter(routes);
