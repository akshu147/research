import React from 'react'
// import thankyou from '../images/pngtree-d-rendering-of-a-green-right-mark-isolated-on-transparent-background-png-image_9170299.png'
import {useNavigate } from 'react-router-dom'
import thankpanguain from '../images/success-we-did-it.gif'

const Thanks = () => {
    const nav = useNavigate()
    return (
        <>

            <div className="flex flex-col items-center justify-center h-screen border-[1px] border-black bg-gradient-to-r from-teal-400 to-yellow-200">
                <img src={thankpanguain} alt="thank you" className="w-[100px] sm:w-[200px]" />
                <h1 className="text-center text-[24px] font-bold">Thank you for your response!</h1>
                <small className='block text-center underline'>GOVT. COLLEGE OF NURSING, JODHPUR</small>
                {/* <button className='border-[1px] border-black p-[6px_10px] rounded-[7px] mt-[20px] bg-green-400 text-white'>Home page</button> */}
                <div className='flex gap-[10px]'>
                    <button onClick={() => { nav("/") }} className="px-8 py-2 mt-[20px] rounded-[7px] bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                        Home
                    </button>
                    <button className="px-8 py-2 mt-[20px] rounded-[7px] bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                       <a href='https://research-table-panel.vercel.app/'>See Answers</a>
                    </button>
                </div>
            </div>



        </>
    )
}

export default Thanks
