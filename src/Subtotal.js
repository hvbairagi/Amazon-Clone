import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { ShoppingBasket } from '@material-ui/icons'
import {useStateValue} from './StateProvider'
import {getBasketTotal} from './reducer'

function Subtotal() {
    const[ {basket}, dispatch ] = useStateValue();
    const subtotal = basket?.reduce((acc,aBasket) => (acc+=aBasket.price), 0); // accumulator, item, initial value
    // console.log(subtotal);
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        {/* Part of the homework (putting the value, which is dynamic) */}
                        {/* Subtotal (0 items): */}
                        Subtotal ({basket.length > 1 ? 'items' : 'item'}):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" name="" id=""/> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} // part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
