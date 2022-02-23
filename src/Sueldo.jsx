import React from 'react';

import  './App';

function Sueldo({nombre ,language ,edad,color,setTotal}) {
   const sumaedad=(t)=>{
      setTotal((e)=>e+edad);
      t.target.parentNode.parentNode.style.display="none";
   }
 
  
  return (
    <div className="programadores" style={{backgroundColor:color}}>
        <h1>Nombre:{nombre}</h1>
        <div className="tituLangu">Lenguaje
       
                <h1>{language}</h1>
                
                    <h1>Edad {edad}</h1>
                </div>     
        
         <div>
             <button className='Comprar' onClick={sumaedad}>Comprar</button>
                   </div>
      
    </div>
  )
}

export default Sueldo;
