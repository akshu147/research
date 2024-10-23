import React from 'react'
import thankyou from '../images/pngtree-d-rendering-of-a-green-right-mark-isolated-on-transparent-background-png-image_9170299.png'
import Footerline from './Footerline'

const Thanks = () => {
  return (
    <>

     <div className="flex flex-col items-center justify-center h-screen border-[1px] border-black bg-gradient-to-r from-teal-400 to-yellow-200">
       <img src={thankyou} alt="thank you" className="w-[100px] sm:w-[200px]"/>
       <h1 className="text-center text-[24px] font-bold">Thank you for your response!</h1>
       <Footerline/>
     </div>
  
   
      
    </>
  )
}

export default Thanks
