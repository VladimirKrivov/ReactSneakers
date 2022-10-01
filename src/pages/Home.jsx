import Card from "../components/Card/Card";
import skeletonCard from "../components/SkeletonCard/skeletonCard";
import SkeletonCard from "../components/SkeletonCard/skeletonCard";

function Home({
                  setSearchValue,
                  searchValue,
                  onChangeSearchInput,
                  items,
                  onAddToFavorites,
                  addToCard,
                  cartItems,
                  isLoading
              }) {
    const renderItems = () => {
        return (
            (!isLoading ? items
                        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item) => (
                            <Card
                                added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                                key={item.id}
                                addToCard={(obj) => addToCard(obj)}
                                onAddToFavorites={(obj) => onAddToFavorites(obj)}
                                {...item}
                            />
                        )) :
                    <SkeletonCard/>

            )
        )

    }
    return (
        <div className="content p-40">
            <div className="mb-40 d-flex justify-between align-center">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="searchBlock d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." type="text"/>
                    {searchValue && <img className="clear remove-btn" src="/img/icon/button-close.svg"
                                         onClick={() => setSearchValue('')} alt="Clear"/>}
                </div>
            </div>


            <div className="d-flex card-wrapper">
                {renderItems()}
            </div>

        </div>
    );
}

export default Home;