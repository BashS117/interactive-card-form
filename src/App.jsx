import bgDesktop from './assets/bg-main-desktop.png'

import { useForm } from 'react-hook-form';
import './App.css'
import React from 'react';

function App() {

  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className='flex'>
      <figure>
      <img src={bgDesktop} alt="" />
      </figure>
         


          <div className=''>
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="e.g. Jane Appleseed" {...register("e.g. Jane Appleseed", {required: true})} />
      <input type="number" placeholder="e.g. 1234 5678 9123 0000" {...register("e.g. 1234 5678 9123 0000", {required: true, max: 16, min: 16, maxLength: 16})} />
      <input type="datetime-local" placeholder="MM" {...register("MM", {required: true, max: 12, min: 0, maxLength: 10})} />
      <input type="datetime" placeholder="YY" {...register("YY", {required: true})} />
      <input type="text" placeholder="CVC" {...register("CVC", {required: true, maxLength: 1})} />

      <input type="submit" />
    </form>
  
          </div>

    </div>
  )
}

export default App
