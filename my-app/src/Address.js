import React, { useState, useEffect } from 'react';

const Address = () => {
  return (
    <div className = 'address'>
      <form className = 'name'>
        <input type = 'text' placeholder='Name'></input>
      </form>
      <form className = 'email'>
        <input type = 'text' placeholder='Email'></input>
      </form>
      <form className = 'phone'>
        <input type = 'text' placeholder='Phone'></input>
      </form>
      <form className = 'addressInfo'>
        <input type = 'text' placeholder='Address'></input>
      </form>
      <form className = 'zip'>
        <input type = 'text' placeholder='Zip'></input>
      </form>
      <form className = 'city'>
        <input type = 'text' placeholder='City'></input>
      </form>
      <form className = 'state'>
        <input type = 'text' placeholder='State'></input>
      </form>
      <form className = 'country'>
        <input type = 'text' placeholder='Country'></input>
      </form>
    </div>
  );
};

export default Address;