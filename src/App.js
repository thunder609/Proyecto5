//import Componente from './Componente';
import './App.css';
import Sueldo from "./Sueldo";
import {useState} from 'react';

function App() {
  const programadores=[
    {
    nombre:"jose",   
    language:"c++",
    color:"blue",
    edad:10
  },
   {
     nombre:"Maria",   
   language:"Javascript",
   color:"green",
   edad:20
  },
   {nombre:"Cata",   
   language:"Java",
   color:"pink",
   edad:32 
},
{nombre:"oswaldo",   
language:"Python",
color:"orange",
edad:40 
}

  ]
  const [total,setTotal]=useState(0);
  const [avg,aV]=useState(0);
  const promedio=()=>{
     avg=programadores.length;
   }
  return (
    <>
  <h2>total es: {total}</h2>
 
  <button onClick={promedio}>Promedio: {avg}</button>
  <h2>total es: {avg}</h2>
    <div className='cajaCentral'>      
    
    <Sueldo nombre={programadores[0].nombre} language={programadores[0].language} edad={programadores[0].edad} color={programadores[0].color} setTotal={setTotal}/>
    <Sueldo nombre={programadores[1].nombre} language={programadores[1].language} edad={programadores[1].edad}  color={programadores[1].color}  setTotal={setTotal}/>
    <Sueldo nombre={programadores[2].nombre} language={programadores[2].language} edad={programadores[2].edad}  color={programadores[2].color}  setTotal={setTotal}/>
    <Sueldo nombre={programadores[3].nombre} language={programadores[3].language} edad={programadores[3].edad}  color={programadores[3].color}  setTotal={setTotal}/>
    

    </div>
    </>
  );
}

export default App;