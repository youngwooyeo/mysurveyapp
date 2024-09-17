import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import Menu3 from "./pages/Menu3";
import Menu4 from "./pages/Menu4";
import Menu5 from "./pages/Menu5";
import Survey from "./pages/Survey";




export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "menu1", element: <Menu1 /> },
            { path: "menu2", element: <Menu2 /> },
            { path: "menu3", element: <Menu3 /> },
            { path: "menu4", element: <Menu4 /> },
            { path: "menu5", element: <Menu5 /> },

        ]
    }
])

