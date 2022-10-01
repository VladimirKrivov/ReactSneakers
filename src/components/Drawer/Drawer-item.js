
function DrawerItem({imageURL, title, price, id, onRemove}) {
    console.log(title, id)
    return (
        <div>
            <div className="cardItem d-flex align-center mb-20 ">
                <div style={{backgroundImage: `url(${imageURL})`}} className="cardItemImg"></div>
                <div className="mr-20 flex">
                    <p className="mb-5">{title}</p>
                    <b>{price} руб.</b>
                </div>
                <img className="clear remove-btn" onClick={() => onRemove(id)}
                     src="/img/icon/button-close.svg" alt="Remove"/>
            </div>
        </div>
    )
}

export default DrawerItem;