import React from 'react';
import './Navbar.css';
import { BiCart } from 'react-icons/bi';

const Navbar = ({ openModal, cart }) => {
    return (
        <div>
            <nav className='navbar'>
                <h1>Guns Shop</h1>
                <div className='cart-counter' onClick={openModal}>
                    <span>{cart.length}</span>
                    <BiCart className='icon' color='#FFFFFF' />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;