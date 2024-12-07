
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import EquipmentDetails from "../pages/EquipmentDetails";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";
import MyEequipment from "../pages/MyEequipment";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import UpdateEquipment from "../pages/UpdateEquipment";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://sport-store-server.vercel.app/equipment')
            },
            {
                path: '/addequipment',
                element: <PrivetRouter><AddEquipment></AddEquipment></PrivetRouter>
            },
            {
                path: '/allequipment',
                element: <AllEquipment></AllEquipment>,
                loader: () => fetch('https://sport-store-server.vercel.app/allequipment')
            },
            {
                path: '/equipment/:id',
                element: <PrivetRouter><EquipmentDetails></EquipmentDetails></PrivetRouter>,
                loader: ({ params }) => fetch(`https://sport-store-server.vercel.app/equipment/${params.id}`)
            },
            {
                path: '/myequipment',
                element: <PrivetRouter><MyEequipment></MyEequipment></PrivetRouter>,
                loader: () => fetch('https://sport-store-server.vercel.app/allequipment')
            },
            {
                path: '/updateEquipment/:id',
                element: <PrivetRouter><UpdateEquipment></UpdateEquipment></PrivetRouter>,
                loader: ({params}) => fetch(`https://sport-store-server.vercel.app/allequipment/${params.id}`)
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
