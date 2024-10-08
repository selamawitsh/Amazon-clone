import React from "react";
import numeral from "numeral";


const CurrencyFormat = ({amount})=>{
    const formatedamount=numeral(amount).format("$0,0.00") 
    return <div>{formatedamount}</div>
}
export default CurrencyFormat