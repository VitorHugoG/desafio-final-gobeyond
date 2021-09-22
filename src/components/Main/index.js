import React, { useEffect, useState } from "react";
import Arrow from '../assets/Main/icon-button.svg'
import './main.css';


export default function Main(){

    const [indice,setIndice] = useState(0);
   
    const  [dados, setDados] = useState([{title: " ", imgUrl: " " },{title: " ", imgUrl: " " },{title: " ", imgUrl: " " },{title: " ", imgUrl: " " }]);

    useEffect(() =>{
        async function getPhoto(){
           const response =  await fetch('https://my-json-server.typicode.com/VitorHugoG/api-dados/dados')
           const data = await response.json();

           setDados(data) 
           
           console.log(data)
    
        }
        
        getPhoto();
        
    },[])
  
    return(
        <main>
            <div className='container-main'>
                      <div className="left-content">
                        <div className="titulo-principal">
                            <h1>{dados[indice].title}</h1>
                            <a href="https://www.corebiz.ag/pt/"> <strong>veja mais</strong> <img src={Arrow} /> </a>
                         </div>
                         <div className="mini-menu">
                             <button onClick={()=> setIndice(0)}> <img className={indice === 0 ?"active":"normal"} src={dados[0].imgUrl} alt="botao um" /> </button>
                             <button onClick={()=> setIndice(1)}> <img className={indice === 1 ?"active":"normal"} src={dados[1].imgUrl}  alt="botao dois"/> </button>
                             <button onClick={()=> setIndice(2)} > <img className={indice === 2 ?"active":"normal"} src={dados[2].imgUrl}  alt="botao tres"/>  </button>
                             <button onClick={()=> setIndice(3)}> <img className={indice === 3 ?"active":"normal"}  src={dados[3].imgUrl} alt="botao quatro"/>  </button>
                         </div>
                    </div>

                    <div className="banner">
                        <div className="container-banner" >
                           <img src={dados[indice].imgUrl} />
                         </div>
                    </div>
                     
                     
             </div>
            
            
        </main>    
    )
}