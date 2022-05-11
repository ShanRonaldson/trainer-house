import { Link, Outlet } from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <Link to="/">Home</Link>
                <Link to="/customers">Customer list</Link>
                <Link to="/trainings"> Trainings list</Link>
            </nav>
            <Outlet />
        </>


    )
}