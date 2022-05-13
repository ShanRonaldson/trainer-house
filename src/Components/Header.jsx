import { Nav } from "./Nav"

export const Header = () => {
    return (
        <>
            <div className="header__wrapper">
                <h1 className="header__title">Trainer House</h1>
                <div className="header__logo">
                    <img src="https://github.com/ShanSchrauwen/trainer-house/blob/main/public/img/healthy.png" alt="logo" />
                </div>
            </div>
            <Nav />
        </>

    )
}