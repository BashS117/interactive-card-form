import bgDesktop from './assets/bg-main-desktop.png'
import FormCard from './components/FormCard';


import './App.css'
import React from 'react';

function App() {

 

  return (
    <div className='flex'>
      <figure>
      <img className='h-[100vh]' src={bgDesktop} alt="" />
      </figure>
         
         <FormCard/>


          

    </div>
  )
}

export default App
