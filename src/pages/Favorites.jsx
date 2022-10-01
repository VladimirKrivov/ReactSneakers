import Card from "../components/Card/Card";
import AppContext from "../context";
import React from "react";

function Favorites({addToCard, onAddToFavorites}) {
    const {onFavorite} = React.useContext(AppContext);
    return (
        <div className="content p-40">
            <div className="mb-40 d-flex justify-between align-center">
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex card-wrapper">
                {onFavorite
                    .map((item) => (
                        <Card
                            key={item.id}
                            {...item}
                            onPlus={(obj) => addToCard(obj)}
                            onAddToFavorites={(obj) => onAddToFavorites(obj)}
                            favored={true}
                        />
                    ))}
            </div>

        </div>
    );
}

export default Favorites;