export default function Cart() {
    return (


        <ul className="item-list cart--item-list">
            <li>
                <img
                    className="cart--item-icon"
                    src="<img src={`./assets/${001-betroot}.svg`}"
                // alt="beetroot"
                />
                <p>beetroot</p>
                <button className="quantity-btn remove-btn center">-</button>
                <span className="quantity-text center">1</span>
                <button className="quantity-btn add-btn center">+</button>
            </li>

        </ul>


    )
}

