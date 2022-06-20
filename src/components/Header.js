// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='head'>
            <h1>Call a Friend</h1>
            <p>Your Friendly Contact App</p>
            <hr className='line-border' />
        </div>
    )
}

export default Header;