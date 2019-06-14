import React from 'react'
import './Header.css'
import { logicalExpression } from '@babel/types';
import Logo from './logo.png'

const Header = () =>{
    return (
        <div className='Header'><h2>Welcome to Crypto Store</h2> 
        <img className='Header-logo' alt = 'logo' src = {Logo} />
        </div>
        
    )
}

export default Header