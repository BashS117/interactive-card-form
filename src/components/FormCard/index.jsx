import React from 'react'


function FormCard  ({register,onSubmit, handleSubmit,errors, watch})  {
 
  

  return (
    <div className='pl-[50px] w-[70%] flex  justify-center items-center'>
    <form  onSubmit={handleSubmit(onSubmit)} className='w-[380px] flex flex-col text-start'>
      <label  >CARDHOLDER NAME</label>
      <input type="text" placeholder="e.g. Jane Appleseed" {...register("name", {required: true})} />
      {errors.name?.type === 'required' && <p>el campo nombre es requerido</p>}

      <label >CARD NUMBER</label>
      <input type="text" placeholder="e.g. 1234 5678 9123 0000" {...register("number", {required: true, maxLength: 16,minLength:16})} />
      {errors.number?.type === 'maxLength' && <p>el campo debe tener 16 caracteres</p>}

      <div className='flex'>
        <div> 
             <label >EXP. DATE(MM/YY)</label>
              <div className='flex mt-8px  mr-[20px]'>

               <input className='w-[75px]  mr-[10px] border border-gray-300' type="datetime" placeholder="MM" {...register("month", {required: true})} />
               <input className='w-[75px] border border-gray-300' type="datetime" placeholder="YY" {...register("year", {required: true})} />
              </div>
       </div>
     <div>
      <label htmlFor="">CVC</label>
     <input className='w-full' type="text" placeholder="e.g.123" {...register("cvc", {required: true, maxLength: 3})} />
     
     </div>
    
      </div>
      <input className='bg-Very-dark-violet text-White font-700' type="submit" value="Confirm" />
    </form>
  
          </div>
  )
}

export default FormCard