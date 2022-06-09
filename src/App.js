import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const[loading,setloading]=useState(false)
  useEffect(()=>{
  setloading(true);
  setTimeout(()=>{
    setloading(false)
  },3000);
  },[])
  return (
    <>
    <div className='App'>
      <div className='load_cont'>
      {loading ?  <ScaleLoader  color="rgb(0, 221, 251)" loading={loading} height={60} width={6}/>:<div className='app_container'>
    <Cards/></div>}
    </div>
    </div>
     
     <div className="area">
             <ul className="circles">
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
             </ul>
     </div >
      </>
   
  );
}

export default App;



