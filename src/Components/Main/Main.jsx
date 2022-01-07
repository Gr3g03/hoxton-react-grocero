import Cart from "./Cart/Cart";
import Total from "./Total/Total.jsx";

export default function Main() {
    return (
        <main id="cart">

            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <Cart />
            </div>

            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>
                <Total />
            </div>
        </main>
    )
}