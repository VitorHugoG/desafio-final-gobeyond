import React, { useState } from "react";
import Arrow from '../assets/Main/icon-button.svg'
import './main.css';
import {url} from '../data.js'

export default function Main(){
    const [indice,setIndice] = useState(0);
    return(
        <main>
            <div className='container-main'>
                      <div className="left-content">
                        <div className="titulo-principal">
                            <h1>{url[indice].title}</h1>
                            <a href="https://www.corebiz.ag/pt/"> <strong>veja mais</strong> <img src={Arrow} /> </a>
                         </div>
                         <div className="mini-menu">
                             <button onClick={()=> setIndice(0)}> <img className={indice === 0 ?"active":"normal"} src={url[0].imgUrl} alt="botao um" /> </button>
                             <button onClick={()=> setIndice(1)}> <img className={indice === 1 ?"active":"normal"} src={url[1].imgUrl} alt="botao dois"/> </button>
                             <button onClick={()=> setIndice(2)} > <img className={indice === 2 ?"active":"normal"} src={url[2].imgUrl} alt="botao tres"/>  </button>
                             <button onClick={()=> setIndice(3)}> <img className={indice === 3 ?"active":"normal"}  src={url[3].imgUrl} alt="botao quatro"/>  </button>
                         </div>
                    </div>

                    <div className="banner">
                        <div className="container-banner" >
                           <img src={url[indice].imgUrl} />
                         </div>
                    </div>
                     
                     
             </div>
            
            
        </main>    
    )
}