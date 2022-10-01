import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import {Route, Routes} from "react-router-dom";
import React from "react";
import axios from "axios";
import AppContext from "./context";

function App() {
    const [items, setItems] = React.useState([]);
    const [clickButtonCard, setClickButtonCard] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    console.log("Сам локал: " + cartItems)
    const [onFavorite, setOnFavorite] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {

        async function fetchData() {
            setIsLoading(true);
            const itemResponse = await axios.get('https://62e64d9e69bd03090f6e7b8b.mockapi.io/items');
            const cartResponse = await axios.get('https://62e64d9e69bd03090f6e7b8b.mockapi.io/cart');
            const favoritesResponse = await axios.get('https://62e64d9e69bd03090f6e7b8b.mockapi.io/favorites');

            setCartItems(cartResponse.data);
            setOnFavorite(favoritesResponse.data);
            setItems(itemResponse.data);
            setIsLoading(false);
        }

        fetchData();
    }, []);

    const addToCard = async (obj) => {
        console.log("Приходящий объект: " + obj)

        try {
            if (cartItems.find(item => item.id === obj.id)) {
                axios.delete(`https://62e64d9e69bd03090f6e7b8b.mockapi.io/cart/${obj.id}`);
                setCartItems(prevState => prevState.filter(items => Number(items.id) !== Number(obj.id)))
            } else {
                await axios.post('https://62e64d9e69bd03090f6e7b8b.mockapi.io/cart', obj);
                setCartItems(prev => [...prev, obj]);
            }
        } catch (error) {

        }

    };

    const onAddToFavorites = async (obj) => {
        try {
            if (onFavorite.find(favObj => favObj.id === obj.id)) {
                axios.delete(`https://62e64d9e69bd03090f6e7b8b.mockapi.io/favorites/${obj.id}`);
                setOnFavorite((prev) => prev.filter((item) => item.id !== obj.id));
            } else {
                const {data} = await axios.post('https://62e64d9e69bd03090f6e7b8b.mockapi.io/favorites', obj);
                setOnFavorite(prev => [...prev, data]);
            }
        } catch (error) {
            alert("Ошибка. Не удалось добавить в избранное")
        }

    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    const onRemoveItem = async (id) => {
        await axios.delete(`https://62e64d9e69bd03090f6e7b8b.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

    const locale12 = () => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        alert("asdasdasd");
    };




    return (
        <div className="wrapper clear">
            {clickButtonCard &&
                <Drawer items={cartItems} onRemove={onRemoveItem} CloseCart={() => setClickButtonCard(false)}/>}
            <Header onClickCardOpen={() => setClickButtonCard(true)}/>
            <AppContext.Provider value={
                {onFavorite, isItemAdded, locale12}
            }>
                <Routes>
                    <Route path="/" exact
                           element={<Home isLoading={isLoading} cartItems={cartItems} searchValue={searchValue}
                                          onChangeSearchInput={onChangeSearchInput}
                                          setSearchValue={setSearchValue} items={items} addToCard={addToCard}
                                          onAddToFavorites={onAddToFavorites}/>}/>
                    <Route path="/favorites"
                           element={<Favorites addToCard={addToCard}
                                               onAddToFavorites={onAddToFavorites}/>}/>

                </Routes>
            </AppContext.Provider>
        </div>
    );
}

export default App;
