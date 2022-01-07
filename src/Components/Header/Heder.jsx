import products from "../../products";



export default function Header(props) {

    function addZeros(number) {
        const str = "" + number;
        const pad = "000";
        return pad.substring(0, pad.length - str.length) + str;
    }


    return (

        <header id="store">

            <h1>Grocero</h1>
            <ul className="item-list store--item-list">
                {
                    products.map(item =>

                        <li>
                            <div className="store--item-icon">
                                <img src={`../../assets/icons/${addZeros(item.id)}-${item.name}.svg`} alt={item.name} />
                            </div>
                            <button>Add to cart</button>
                        </li>

                    )
                }

            </ul>

        </header>
    )

}


