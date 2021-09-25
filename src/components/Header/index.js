import React from 'react'
import Logo from '../assets/Header/logo.svg'
import './header.css'

export default function Header(){
    return(
         <header className="header">
            <div className="container-header">
               <img className="logo-corebiz" src= {Logo}  alt="logo corebiz"/>
              <nav className="navbar">
                  <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer"> a corebiz </a>
                  <a href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer"> serviços </a>
                  <a href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer"> cases </a>
                  <a href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer"> contato </a>
              </nav>  
              <div className="menu-hamburguer">
                  <div className="primeira"></div>
                  <div className="segunda"></div>
                  <div className="terceira"></div>
              </div>
              </div>
         </header>  
    )
}