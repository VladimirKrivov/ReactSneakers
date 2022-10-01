import React from "react";
import stylesCart from './card.module.css'
import AppContext from "../../context";

function Card({
                  idFavorite,
                  id,
                  title,
                  imageURL,
                  price,
                  addToCard,
                  onAddToFavorites,
                  favored = false,
                  added = false,

              }) {

    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favored);
    const {isItemAdded, locale12} = React.useContext(AppContext);
    const obj = { id, parentId: id, title, imageURL, price };


    React.useEffect(() => {

    }, []);

    const onClickAddToCard = () => {
        addToCard(obj);
        setIsAdded(!isAdded);
    };

    const onClickAddFavorite = () => {
        onAddToFavorites(obj);
        setIsFavorite(!isFavorite);

    };
    const click = () => {
console.log(123);
    };


    return (
        <div className={stylesCart.card}>
            <div className={stylesCart.favorite}>
                <img src={isFavorite ? "/img/icon/heart-liked.svg" : "/img/icon/heart-unliked.svg"}
                     alt="favorite-icon"
                     onClick={onClickAddFavorite}/>
            </div>
            <div className=" d-flex justify-center">
                <img width={133} height={122} src={imageURL} alt="Sneakers"/>
            </div>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span onClick={locale12}>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={stylesCart.pointer}
                     src={isItemAdded(id) ? "/img/icon/button-checked.svg" : "/img/icon/button-unchecked.svg"}
                     alt="addToCart"
                     onClick={onClickAddToCard}/>
            </div>
        </div>
    );
}

export default Card;