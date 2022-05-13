import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <nav className="nav__wrapper">
                <Link to="/">Home</Link>
                <Link to="/customers">Customer list</Link>
                <Link to="/trainings"> Trainings list</Link>
            </nav>
        </>


    )
}

export const ColNav = () =>{

    return(
        <>
            <nav className="col-nav__wrapper">
                <Link to="/">Home</Link>
                <Link to="/customers">Customer list</Link>
                <Link to="/trainings"> Trainings list</Link>
            </nav>
        </>
    )
}