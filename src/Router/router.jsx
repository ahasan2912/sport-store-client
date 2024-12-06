
import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../pages/ErrorPages";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import EquipmentDetails from "../pages/EquipmentDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/equipment')
            },
            {
                path: '/addequipment',
                element: <AddEquipment></AddEquipment>
            },
            {
                path: '/allequipment',
                element: <AllEquipment></AllEquipment>,
                loader: () => fetch('http://localhost:5000/allequipment')
            },
            {
                path: '/equipment/:id',
                element: <EquipmentDetails></EquipmentDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/equipment/${params.id}`)
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            }
        ],
    },
], {
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
    }
});

export default router;
