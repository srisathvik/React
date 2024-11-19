import {Outlet  } from "react-router-dom"
import RootNavigation from "../Navigation/RootNavigation"
export default function Root() {
    return (
        <>
            <RootNavigation />
            <Outlet />
        </>
    )
}