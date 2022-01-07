export default function Cart() {
    return (


        <ul className="item-list cart--item-list">
            <li>
                <img
                    className="cart--item-icon"
                    src="../../assets/icons/001-beetroot.svg" alt="beetroot"
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

