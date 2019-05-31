import React from 'react'
import './Header.css'
import { logicalExpression } from '@babel/types';
import Logo from './logo.png'

const Header = () =>{
    return (
        <div className='Header'>Header
        <img className='Header-logo' alt = 'logo' src = {Logo} />
        </div>
        
    )
}

export default Header