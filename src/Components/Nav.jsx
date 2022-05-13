import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";

export const Nav = () => {
    return (
        <>
            <nav className="nav__wrapper">
                <ButtonGroup disableElevation variant="text" color="secondary">
                    <Button>
                        <Link to="/">Home</Link>
                    </Button>
                    <Button>
                        <Link to="/customers">Customer list</Link>
                    </Button>
                    <Button> <Link to="/trainings"> Trainings list</Link></Button>
                </ButtonGroup>
            </nav>
        </>


    )
}

export const ColNav = () => {

    return (
        <>
            <nav className="col-nav__wrapper">
                <Link to="/">Home</Link>
                <Link to="/customers">Customer list</Link>
                <Link to="/trainings"> Trainings list</Link>
            </nav>
        </>
    )
}