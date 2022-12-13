import React, { useState, useEffect } from 'react';

const Payment = () =>{
  return(
    <div className = 'payment'>
      <h3>Payment</h3>
      <h4>Credit/Debit Card</h4>
      <form>
        <label>
          <input type = 'text' placeholder='Number'></input>
        </label>
      </form>
      <form>
        <label>
          <input type = 'text' placeholder='CVV'></input>
        </label>
      </form>
      <div className = 'monthyear'>
        <form>
          <label>
            Month
            <select>
              <option value = '1'>1</option>
              <option value = '2'>2</option>
              <option value = '3'>3</option>
              <option value = '4'>4</option>
              <option value = '5'>5</option>
              <option value = '6'>6</option>
              <option value = '7'>7</option>
              <option value = '8'>8</option>
              <option value = '9'>9</option>
              <option value = '10'>10</option>
              <option value = '11'>11</option>
              <option value = '12'>12</option>
            </select>
          </label>
        </form>
        <form >
          <label>
            Year
            <select>
              <option value = '2022'>2022</option>
              <option value = '2023'>2023</option>
              <option value = '2024'>2024</option>
              <option value = '2025'>2025</option>
              <option value = '2026'>2026</option>
              <option value = '2027'>2027</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
    
};

export default Payment;