import style from "../css/Header.module.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={`mw ${style.head}`}>
            <h1>
                <Link to="/">
                    <img src="./img/logo.svg" alt="logo" />
                </Link></h1>
            <nav>
                <div>
                    <Link to="/ShopAll">SHOP</Link>
                    <Link to="#">BLOG</Link>
                    <Link to="#">OUR STORY</Link>
                </div>
                <div>
                    <Link to="#"><i className="fa-solid fa-magnifying-glass"></i></Link>
                    <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                    <Link to="#"><i className="fa-solid fa-user"></i></Link>
                </div>
            </nav>
        </header >
    )
}

export default Header