import {ColNav} from './Nav'

export const Footer = () => {

    return (
        <>
            <footer className="footer__wrapper grid3x3">
                <div className="footer__section">Created by
                    <div className="footer__content"> Shannon Schrauwen</div>
                    <div className="footer__content">In association with Haaga-Helia polytechnic university Front end development course</div>
                    <div className="footer__content">Created in React</div>
                </div>
                <div className="footer__section">Packages used in the creation of this website
                    <div className="footer__content">
                        <a href="https://react-data-table-component.netlify.app/?path=/story/getting-started-intro--page"
                            className="footer__link" target='_blank' rel="noreferrer">
                            React-data-table
                        </a>
                    </div>
                    <div className="footer__content">
                        <a href="https://github.com/react-csv/react-csv#readme"
                            className="footer__link" target='_blank' rel="noreferrer">
                            React CSV export
                        </a>
                    </div>
                    <div className="footer__content">
                        <a href="https://mui.com/"
                            className="footer__link" target='_blank' rel="noreferrer">
                            Material UI
                        </a>
                    </div>
                </div>
                <div className="footer__section">Menu links
                    <ColNav />
                </div>
            </footer>
        </>
    )
}