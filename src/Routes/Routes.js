import Root from "../Layout/Root";
import Home from "../Pages/LandingPage/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {

        path: '/', element: <Root />, children: [
            { path: '/', element: <Home /> },
        ]
    },
    {
        path: '*', errorElement: 'not found'
    }
])

export default router
