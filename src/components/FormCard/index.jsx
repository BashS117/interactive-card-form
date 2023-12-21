import React from 'react'
import { useForm } from 'react-hook-form';


function FormCard  ()  {
 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
    <div className='pl-[50px] w-[70%] flex  justify-center items-center'>
    <form className='w-[380px] flex flex-col text-start' onSubmit={handleSubmit(onSubmit)}>
      <label  htmlFor="">CARDHOLDER NAME</label>
      <input type="text" placeholder="e.g. Jane Appleseed" {...register("e.g. Jane Appleseed", {required: true})} />
      <label htmlFor="">CARD NUMBER</label>
      <input type="number" placeholder="e.g. 1234 5678 9123 0000" {...register("e.g. 1234 5678 9123 0000", {required: true, max: 16, min: 16, maxLength: 16})} />

      <div className='flex'>
        <div> 
             <label htmlFor="">EXP. DATE(MM/YY)</label>
              <div className='flex mt-8px  mr-[20px]'>

               <input className='w-[75px]  mr-[10px] border border-gray-300' type="datetime" placeholder="MM" {...register("YY", {required: true})} />
               <input className='w-[75px] border border-gray-300' type="datetime" placeholder="YY" {...register("YY", {required: true})} />
              </div>
       </div>
     <div>
      <label htmlFor="">CVC</label>
     <input className='w-full' type="text" placeholder="e.g.123" {...register("CVC", {required: true, maxLength: 1})} />
     
     </div>
    
      </div>
      <input className='bg-Very-dark-violet text-White font-700' type="submit" value="Confirm" />
    </form>
  
          </div>
  )
}

export default FormCard