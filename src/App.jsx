import bgDesktop from './assets/bg-main-desktop.png'
import FormCard from './components/FormCard';
import BgCards from './components/BgCards';
import { useForm } from 'react-hook-form';
import bgMainMobile from './assets/bg-main-mobile.png'

import './App.css'
import React from 'react';

function App() {

  const { register, handleSubmit,formState:{errors}, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };
  

  return (
    <div className='flex sm:flex-col'>
      <figure>
      <img className='h-[100vh] w-[470px] sm:hidden' src={bgDesktop} alt="bgDesktop" />
      <img className='sm:flex sm:w-full hidden' src={bgMainMobile} alt='bgMobile'/>
      </figure>
      <BgCards
               watch={watch}

      />

         
         <FormCard 
         register={register}
         handleSubmit={handleSubmit}
         errors={errors}
         watch={watch}
         onSubmit={onSubmit}

         />


          

    </div>
  )
}

export default App
