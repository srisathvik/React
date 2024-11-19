import { Outlet } from "react-router-dom";

export default function Items() {
    return (
        <>
            <h1>This is items Page</h1>
            <Outlet />
        </>
        
    )
}