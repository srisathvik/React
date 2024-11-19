import { Outlet } from "react-router-dom";
import ItemsNavigaton from "../Navigation/ItemsNavigation"

export default function name(params) {
    return (
        <>
            <ItemsNavigaton />
            <Outlet />
        </>
)
}