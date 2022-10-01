import DrawerItem from "./Drawer/Drawer-item";
import DrawerNoItem from "./Drawer/Drawer-no-item";

function Drawer({CloseCart, items = [], onRemove}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-40 d-flex justify-between">
                    Корзина <img className="remove-btn cu-p" src="/img/icon/button-close.svg" alt="Close"
                                 onClick={CloseCart}/>
                </h2>

                <div className="flex">
                    {
                        items.length > 0 ?
                            items.map((obj) => (
                                <DrawerItem
                                    onRemove={onRemove}
                                    key={obj.id}
                                    {...obj}
                                />
                            ))
                            :
                            <DrawerNoItem/>

                    }
                </div>



                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b></li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1 704 руб.</b></li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/icon/cursor.svg" alt="Arrow"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;