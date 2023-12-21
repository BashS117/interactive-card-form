import bgDesktop from './assets/bg-main-desktop.png'
import FormCard from './components/FormCard';
import BgCards from './components/BgCards';

import './App.css'
import React from 'react';

function App() {

 

  return (
    <div className='flex'>
      <figure>
      <img className='h-[100vh] w-[470px]' src={bgDesktop} alt="" />

      </figure>
      <BgCards/>

         
         <FormCard/>


          

    </div>
  )
}

export default App
