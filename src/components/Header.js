import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header className="d-flex justify-between align-center">
            <Link to="/">
                <div className="d-flex align-center p-40">
                    <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li className="mr-30" onClick={props.onClickCardOpen}>
                    <img src="/img/cart.svg" alt="Корзина"/>
                    <span>1205 руб.</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img src="/img/icon/favorite-icon.svg" alt="Закладки"/>
                    </Link>

                </li>
                <li>
                    <img width={18} height={18} src="/img/User.svg" alt="Пользователь"/>
                </li>
            </ul>
        </header>
    );
}

export default Header;