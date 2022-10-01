function DrawerNoItem() {
    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img width={120} height={120} src="/img/icon/empty-cart.jpg" alt="Cart Empry"/>
            <h2>Корзина пуста</h2>
            <p className="opacity-6">Добавте хотя бы одну пару кросовок, чтобы сделать заказ</p>
            <button className="greenButton">
                <img src="/img/icon/cursor.svg" alt="Arrow"/>Вернуться назад
            </button>
        </div>
    )
}

export default DrawerNoItem;