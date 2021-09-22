import React from 'react'
import Logo from '../assets/Header/logo.svg'
import './header.css'

export default function Header(){
    return(
         <header className="header">
            <div className="container-header">
               <img src= {Logo} />
              <nav className="navbar">
                  <a href="#" target="_blank"> a corebiz </a>
                  <a href="#" target="_blank"> serviços </a>
                  <a href="#" target="_blank"> cases </a>
                  <a href="#" target="_blank"> contato </a>
              </nav>  
              </div>
         </header>  
    )
}