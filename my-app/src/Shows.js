import React, { useState, useEffect } from 'react';
import Payment from './Payment';
import Total from './Total';
import Address from './Address';

const Shows = () => {
  const [value, setValue] = useState('Rock');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const handleSubmit = () => {

  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const minusOne = () => {
    if(quantity > 0){
      setQuantity(quantity - 1);
    }
        
  };
  const plusOne = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    if(value === 'Rock'){
      setPrice(29.99);
    }
    else if(value === 'Pop'){
      setPrice(19.99);
    }
    else if(value === 'Hip-hop'){
      setPrice(49.99);
    }
    else if(value === 'EDM'){
      setPrice(59.99);
    }
    else{
      setPrice(0);
    }
  }, [value]);    

  return(
    <div className = 'shows'>
      <div className = 'ticketSelect'>
        <h1>Show Selection</h1>
        <form>
          <label>
          Select a show:
            <br></br>
            <select value = {value} onChange = {handleChange}>
              <option value = 'Rock'>Rock</option>
              <option value = 'Pop'>Pop</option>
              <option value = 'Hip-hop'>Hip-hop</option>
              <option value = 'EDM'>EDM</option>
            </select>
          </label>
        
        </form>
        <h2>You selected {value}</h2>
        <h2>Price per ticket: ${price}</h2>
        <div className = 'ticketsButton'>
          <h1>How Many Tickets? {quantity}</h1>
          <button onClick = {minusOne}>-</button>
          <button onClick = {plusOne}>+</button>
        </div>
      </div>
      <div className = 'information'>
        <Address></Address>
        <Payment></Payment>
        <Total quantity = {quantity} price = {price}></Total>
      </div>
    </div>
  );
};

export default Shows;