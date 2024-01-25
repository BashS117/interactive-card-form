import bgDesktop from './assets/bg-main-desktop.png'
import FormCard from './components/FormCard';
import BgCards from './components/BgCards';
import { useForm } from 'react-hook-form';


import './App.css'
import React from 'react';

function App() {

  const { register, handleSubmit,formState:{errors}, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };
  

  return (
    <div className='flex'>
      <figure>
      <img className='h-[100vh] w-[470px]' src={bgDesktop} alt="" />

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
