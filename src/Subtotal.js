import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { ShoppingBasket } from '@material-ui/icons'
import {useStateValue} from './StateProvider'
import {getBasketTotal} from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory();
    const[ {basket}, dispatch ] = useStateValue();  // gives browser history
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

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            {/* if you want to programmatically use the user to somewhere you need to use this, not Link to.. and not style like link */}
            {/* if there is not Route that matches the /payment, the Route goes to default */}
        </div>
    )
}

export default Subtotal
