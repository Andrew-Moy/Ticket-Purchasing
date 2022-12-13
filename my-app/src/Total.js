import React, { useState, useEffect } from 'react';

const Total = (props) => {
  const {quantity, price} = props;
  const basePrice = Math.round(quantity * price * 100) / 100;
  const fee = .12; 
  const fees = Math.round(price * fee * quantity * 100) / 100;
  const total = (basePrice + fees).toFixed(2);

  return(
    <div className = 'total'>
      <h1>
        Total: ${total}
      </h1>

      <h3>
        Tickets: {quantity}
      </h3>
      <div className = 'totheright'>
        <h4>
        Resale Tickets: ${price} x {quantity} = ${Math.round(price * quantity * 100) / 100}  
        </h4>
      </div>

      <div className = 'fees'>
        <h2>
        Fees:
        </h2>
        <h4>
        ${Math.round(price * fee * 100) / 100} x {quantity}
        </h4> 
        <h4>
        Total Service Fees: ${fees}
        </h4>
      </div>
      <p>
          *All Sales Final - No Refunds
      </p>
      <button>Place Order</button>
    </div>
  );
};

export default Total;