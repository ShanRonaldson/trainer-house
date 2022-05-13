import { Nav } from "./Nav"

export const Header = () => {
    return (
        <>
            <div className="header__wrapper">
                <h1 className="header__title">Trainer House</h1>
                <div className="header__logo">
                    <img src='/sunflower.png' alt="logo" />
                    <div hidden>
                        <a href="https://www.flaticon.com/free-icons/sunflower" title="sunflower icons">Sunflower icons created by Freepik - Flaticon</a>
                        </div>
                </div>
            </div>
            <Nav />
        </>

    )
}
