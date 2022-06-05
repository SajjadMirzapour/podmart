import { Outlet } from "react-router-dom";
import Header from "../layouts/Header/Header";


export default function Layouts() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}