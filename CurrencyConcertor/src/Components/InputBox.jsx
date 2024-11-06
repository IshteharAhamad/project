// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
// https://latest.currency-api.pages.dev/v1/currencies/inr.json (same API)
import React, { useId } from "react";

function InputBox({
  label,
  amount,                       //amount come from api and user input
  onAmountChange,               //convertor amount or change amount in input field
  onCurrencyChange,             //currency change from dropdown 
  currencyOptions=[],           //dropdown country code
  selectCurrency="USD",         //bydefault set usd
  amountDisable=false,          //input field disabled or not
  currencyDisable=false,        //dropdown disabled or not
  className = "",               //user modification css
}) 
{
    const amountId=useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e)=>onAmountChange&& onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select 
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        disabled={currencyDisable}
        value={selectCurrency}
        onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
        >
            {
                currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                ))
            }
          
        </select>
      </div>
    </div>
  );
}
export default InputBox;
