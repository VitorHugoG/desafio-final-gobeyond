import React from "react";
import Logo from '../assets/Footer/logo-corebiz-global.svg'
import Facebook from '../assets/Footer/facebook.svg'
import Instagram from '../assets/Footer/instagram.svg'
import Linkedin from '../assets/Footer/linkedin.svg'
import './footer.css'

export default function Footer(){
    return(
        <footer>
            <div className='container-footer'>
                <div className="conteudo-esquerda">
                        <div className="contatos-empresa">
                            <div className="logo"> 
                                <img src={Logo} alt="logo corebiz" />
                                <span> direitos reservados, corebiz 2021 </span>
                            </div>
                            <div className="">
                            <a href="#" target="_blank"> <img src={Facebook} alt="logo corebiz" /> </a>
                            <a href="#" target="_blank"> <img src={Instagram} alt="logo corebiz" /> </a>
                            <a href="#" target="_blank"> <img src={Linkedin} alt="logo corebiz" /> </a>
                            </div>
                         </div>
                         <div className="menu-footer">
                            <nav>
                                <a href="#" target="_blank"> a corebiz </a>
                                <a href="#" target="_blank"> serviços </a>
                                <a href="#" target="_blank"> cases </a>
                                <a href="#" target="_blank"> contato </a>
                            </nav>
                         </div>
                    </div>

                    <div className="enderecos">
                        <div className="container-enderecos" >
                            <address>
                                <h2>.Brasil </h2>
                                <p> Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                                <p> R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                            </address>

                            <address>
                                <h2>.Argentina</h2>
                                <p> Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                            </address>

                            <address>
                                <h2>.México</h2>
                                <p> Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                            </address>

                            <address>
                                <h2>.Chile</h2>
                                <p> Roberto del Río 1137, Providencia.</p>
                            </address>

                         </div>
                    </div>
                     
                     
             </div>
            
        </footer>
    )
}