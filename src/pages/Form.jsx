import React, { useState } from 'react'
import bighazard from "../images/Biohazard_symbol.svg.png"
import radiation from '../images/Radiation-Symbol-PNG-Transparent-Image.png'
import axios from 'axios'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import hsptlsign from '../images/hospital-sign-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--plus-medical-symbol-healthcare-pack-illustrations-4333057.png'



const Form = () => {
    const nav = useNavigate()
    const [formdata, setformdata] = useState({})
    const addData = async (e) => {
        e.preventDefault()
        if (!formdata.name) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Name!"
        });

        if (!formdata.designation) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Designation!"
        });
        if (!formdata.ward) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ward!"
        });
        if (!formdata.ans2) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans2!"
        });
        if (!formdata.ans3) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans3!"
        });
        if (!formdata.ans4) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans4!"
        });
        if (!formdata.ans5) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans5!"
        });
        if (!formdata.ans6) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans6!"
        });
        if (!formdata.ans7) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans7!"
        });
        if (!formdata.ans8) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans8"
        });
        if (!formdata.ans9) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans9!"
        });
        if (!formdata.ans10) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans10!"
        });
        if (!formdata.ans11) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans11!"
        });
        if (!formdata.ans12) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans12!"
        });
        if (!formdata.ans13) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans13!"
        });
        if (!formdata.ans14) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans14!"
        });
        if (!formdata.ans15) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans15!"
        });
        if (!formdata.ans16) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans16!"
        });
        if (!formdata.ans17) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans17!"
        });
        if (!formdata.ans18) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans18!"
        });
        if (!formdata.ans19) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans19!"
        });
        if (!formdata.ans20) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans20!"
        });
        if (!formdata.ans21) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans21!"
        });
        if (!formdata.ans22) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans22!"
        });
        if (!formdata.ans23) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans23!"
        });
        if (!formdata.ans24) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans24!"
        });
        if (!formdata.ans25) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans25!"
        });
        if (!formdata.ans26) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans26!"
        });
        if (!formdata.ans27) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans27!"
        });
        if (!formdata.ans28) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans28!"
        });
        if (!formdata.ans29) return Swal.fire({
            imageUrl: 'https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif', // Add your image URL
            position: "top-center",
            width: '300px',
            text:"Please enter your Ans29!"
        });
        const cookitdata = Cookies.get("staff")
        if (cookitdata) return Swal.fire("You've already submitted you Response!")
        if (!cookitdata) {
            try {
                const responce = await axios.post(`https://reaserch-backend-3.onrender.com/api/formdata/form`, formdata)
                if (responce.status !== 200) return alert("something is wrong about server")
                console.log(responce)
            }
            catch (err) {
                console.log("server error")
            }
            Cookies.set("staff", JSON.stringify(formdata.name))
            nav("/thank-you")
        }

    }
    console.log(formdata)

    return (
        <>
            <section className='p-[10px_10px] bg-gradient-to-r from-fuchsia-200 to-cyan-200 sm:p-[20px_30px] md:p-[20px_100px] lg:p-[20px_200px]'>
                <header className='border-[2px] border-black rounded-[20px] p-[20px_20px] relative'>
                    <img className='absolute top-2 right-2 w-[30px] sm:w-[50px] md:w-[70px] ld:w-[100px]' src={hsptlsign} alt="" />
                    <h2 className='text-center font-bold text-[20px] sm:text-[23px] md:text-[27px] py-[10px]'>GOVT. COLLEGE OF NURSING, JODHPUR </h2>
                    <p className='text-center text-[18px]'>RAJASTHAN UNIVERSITY OF HEALTH SCIENCES, JAIPUR, RAJASTHAN </p>
                    <div className='text-center pt-[10px]'><b><u>QUESTIONNAIRE</u></b></div>
                    <p className="text-center sm:px-[30px] md:px-[40px] lg:-[100px] xl:px-[200px] py-[10px] text-[12px] sm:text-[15px]">A DESCRIPTIVE STUDY TO ASSESS THE KNOWLEDGE REGARDING BIOMEDICAL WASTE
                        MANAGEMENT AMONG STAFF NURSES OF JANANA WING, MATHURA DAS MATHUR
                        HOSPITAL, JODHPUR (RAJ.) </p>
                    <div className='py-[20px]'>
                        <div className='flex justify-start md:justify-center flex-col'>
                            <label className='w-[120px] sm:w-[130px] md:w-[150px]'>Name-</label><input
                                type="text"
                                value={formdata.name || ""}
                                onChange={(e) => { setformdata({ ...formdata, name: e.target.value }) }}
                                className='rounded-[7px] p-[5px_10px] bg-transparent border-b-[1px] border-black'
                                placeholder='Name' />
                        </div>
                        <div className='flex m-[10px_0px] justify-start md:justify-center flex-col'>
                            <label className='w-[120px] sm:w-[130px] md:w-[150px]'>DESIGNATION-</label><input value={formdata.designation || ""} onChange={(e) => { setformdata({ ...formdata, designation: e.target.value }) }} type="text" className='rounded-[7px] p-[5px_10px] bg-transparent border-b-[1px] border-black' placeholder='DESIGNATION' />
                        </div>
                        <div className='flex justify-start md:justify-center flex-col'>
                            <label className='w-[120px] sm:w-[130px] md:w-[150px]'>WARD-</label><input value={formdata.ward || ""} onChange={(e) => { setformdata({ ...formdata, ward: e.target.value }) }} type="text" className='rounded-[7px] p-[5px_10px] bg-transparent border-b-[1px] border-black' placeholder='WARD' />
                        </div>
                    </div>

                </header>
                <h2 className='text-center sm:text-left text-[20px] md:text-[25px] py-[20px]'><b><u>SECTION A (SOCIO-DEMOGRAPHIC DATA)</u></b></h2>

                <form action="" onSubmit={addData}>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>1.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques1" defaultValue="Q.1 What is yout age?" />What is yout age?</div>
                        <ul className='list-none'>
                            <li>
                                <input className='mt-[10px] ms-[20px] block bg-transparent border-[1px] border-black rounded-[5px] text-center'
                                    placeholder='Mention you age'
                                    type="number"
                                    name='age'
                                    onChange={(e) => { setformdata({ ...formdata, age: e.target.value }) }} />
                            </li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>2.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques2"/>What is your gender?</div>
                        <ul className='leading-8'>
                            <li><input value="Q.2 a" onChange={(e) => { setformdata({ ...formdata, ans2: e.target.value }) }} type="radio" name='ans2' /><span className='px-[10px]'>Male</span></li>
                            <li><input value="Q.2 b" onChange={(e) => { setformdata({ ...formdata, ans2: e.target.value }) }} type="radio" name='ans2' /><span className='px-[10px]'>Female</span></li>
                            <li><input value="Q.3 c" onChange={(e) => { setformdata({ ...formdata, ans2: e.target.value }) }} type="radio" name='ans2' /><span className='px-[10px]'>Others</span></li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>3.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques3"/>What is your educational qualification?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans3: e.target.value }) }} name='ans3' value="Q.3 a " /><span className='px-[10px]'>GNM</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans3: e.target.value }) }} name='ans3' value="Q.3 b " /><span className='px-[10px]'>Post Basic Nursing</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans3: e.target.value }) }} name='ans3' value="Q.3 c " /><span className='px-[10px]'>B.Sc. Nursing</span></li>
                            <li> <input type="radio" onChange={(e) => { setformdata({ ...formdata, ans3: e.target.value }) }} name='ans3' value="Q.3 d" /><span className='px-[10px]'>M.Sc. Nursing</span></li>
                            <li> <input type="radio" onChange={(e) => { setformdata({ ...formdata, ans3: e.target.value }) }} name='ans3' value="Q.3 d" /><span className='px-[10px]'>PhD. Nursing</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>4.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques4" defaultValue="Total years of work experience?" />Total years of work experience?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans4: e.target.value }) }} name='ans4' value="Q.4 a" /><span className='px-[10px]'>0-5 year</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans4: e.target.value }) }} name='ans4' value="Q.4 b" /><span className='px-[10px]'>6-10 years</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans4: e.target.value }) }} name='ans4' value="Q.4 c" /><span className='px-[10px]'>11-15 year</span></li>
                            <li> <input type="radio" onChange={(e) => { setformdata({ ...formdata, ans4: e.target.value }) }} name='ans4' value="Q.4 e" /><span className='px-[10px]'>Above 15 years</span></li>

                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>5.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques5" defaultValue="Q.5 Have you attended any program related to biomedical waste management previously?  " />Have you attended any program related to biomedical waste management previously? </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans5: e.target.value }) }} name='ans5' value="Q.5 a" /><span className='px-[10px]'>YES</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans5: e.target.value }) }} name='ans5' value="Q.5 b" /><span className='px-[10px]'>NO</span></li>

                        </ul>
                    </div>



                    <h2 className='text-center sm:text-left text-[20px] md:text-[25px] py-[20px]'><b><u>SECTION B (GENERAL KNOWLEDGE RELATED TO BIOMEDICAL WASTE) </u></b></h2>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>6.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques6" defaultValue="Q.6 3-D in hospital waste management means?" />3-D in hospital waste management means?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" name='ans6' onChange={(e) => { setformdata({ ...formdata, ans6: e.target.value }) }} value="Q.6 a" /><span className='px-[10px]'>Disinfection, Disposal, Drainage</span></li>
                            <li><input type="radio" name='ans6' onChange={(e) => { setformdata({ ...formdata, ans6: e.target.value }) }} value="Q.6 b" /><span className='px-[10px]'>Discard, Disinfection, Drainage</span></li>
                            <li><input type="radio" name='ans6' onChange={(e) => { setformdata({ ...formdata, ans6: e.target.value }) }} value="Q.6 c" /> <span className='px-[10px]'>Destruction, Deep burial, Drainage</span></li>
                            <li><input type="radio" name='ans6' onChange={(e) => { setformdata({ ...formdata, ans6: e.target.value }) }} value="Q.6 d" /><span className='px-[10px]'>Destruction, Deep burial, Disposal</span></li>
                        </ul>

                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>7.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques8" defaultValue="Q.8 Average hospital waste produced per bed per day in Government Hospital? " />Average hospital waste produced per bed per day in Government Hospital? </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans7: e.target.value }) }} name='ans7' value="Q.7 a" /><span className='px-[10px]'>1.5-2.0 Kg</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans7: e.target.value }) }} name='ans7' value="Q.7 b" /><span className='px-[10px]'>0.5-1.0 kg</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans7: e.target.value }) }} name='ans7' value="Q.7 c" /> <span className='px-[10px]'>0.5-3.0 kg</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans7: e.target.value }) }} name='ans7' value="Q.7 d" /><span className='px-[10px]'>0.5-4.0 kg</span></li>
                        </ul>

                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] w-[100%] sm:w-[70%] md:w-[70%]  mt-[10px] rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>8.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques7" />Biomedical waste (management and
                            handling) rules 1998 comes under the
                            act. </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans8: e.target.value }) }} name='ans8' value="Q.8 a" /><span className='px-[10px]'>Environmental Protection Act 1986</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans8: e.target.value }) }} name='ans8' value="Q.8 b" /><span className='px-[10px]'>ESI act 1994</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans8: e.target.value }) }} name='ans8' value="Q.8 c" /><span className='px-[10px]'>Labour Act 1948</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans8: e.target.value }) }} name='ans8' value="Q.8 d" /><span className='px-[10px]'>National Health Programme 1983</span></li>
                        </ul>

                    </div>



                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>9.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques9" />Latest amendment in BMW rules 1998
                            is in </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans9: e.target.value }) }} name='ans9' value="Q.9 a" /><span className='px-[10px]'> 2016</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans9: e.target.value }) }} name='ans9' value="Q.9 b" /><span className='px-[10px]'>2002</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans9: e.target.value }) }} name='ans9' value="Q.9 c" /> <span className='px-[10px]'>2000</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans9: e.target.value }) }} name='ans9' value="Q.9 d" /><span className='px-[10px]'>2015</span></li>
                        </ul>

                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>10.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques13" /> Identify the symbol shown in picture:</div>
                        <div className='flex justify-between items-center'>
                            <ul className='leading-8'>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans10: e.target.value }) }} name='ans10' value="Q.10 a" /><span className='px-[10px]'>Bio hazard</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans10: e.target.value }) }} name='ans10' value="Q.10 b" /><span className='px-[10px]'>Radiological hazards</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans10: e.target.value }) }} name='ans10' value="Q.10 c" /> <span className='px-[10px]'>Cytotoxic hazards</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans10: e.target.value }) }} name='ans10' value="Q.10 d" /><span className='px-[10px]'>Family planning</span></li>
                            </ul>
                            <img className='border-[2px] border-black rounded-[20px] p-[10px]' width="80px" src={bighazard} alt="" />
                        </div>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>11.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques14" defaultValue="Q.14 Identify the symbol shown in picture:  " /> Identify the symbol shown in picture:  </div>
                        <div className='flex justify-between items-center'>
                            <ul className='leading-8'>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans11: e.target.value }) }} name='ans11' value="Q.11 a" /><span className='px-[10px]'>Bio-Hazard</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans11: e.target.value }) }} name='ans11' value="Q.11 b" /><span className='px-[10px]'>Radiological hazards</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans11: e.target.value }) }} name='ans11' value="Q.11 c" /> <span className='px-[10px]'>Cytotoxic hazards</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans11: e.target.value }) }} name='ans11' value="Q.11 d" /><span className='px-[10px]'>Radiation hazards</span></li>
                            </ul>
                            <img className='border-[2px] border-black rounded-[20px] p-[10px]' width="80px" src={radiation} alt="" />

                        </div>
                    </div>

                    <h2 className='text-center sm:text-left text-[20px] md:text-[25px] py-[20px]'><b><u>SECTION C (Biomedical Waste Segregation by Colour coding)</u></b></h2>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>12.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />All of the following statements
                            regarding biomedical waste
                            management are true except, </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans12: e.target.value }) }} name='ans12' value="Q.12 a" /><span className='px-[10px]'>Human anatomical waste is thrown in yellow bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans12: e.target.value }) }} name='ans12' value="Q.12 b" /><span className='px-[10px]'>Blue bag waste is disposed in landfill</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans12: e.target.value }) }} name='ans12' value="Q.12 c" /> <span className='px-[10px]'>Incineration ash is discarded in black bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans12: e.target.value }) }} name='ans12' value="Q.12 d" /><span className='px-[10px]'>Material in red bag could be a source of contamination</span></li>
                        </ul>
                    </div>



                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>13.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />Plastic cover of syringes should be disposed in </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans13: e.target.value }) }} name='ans13' value="Q.13 a" /><span className='px-[10px]'> Red bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans13: e.target.value }) }} name='ans13' value="Q.13 b" /><span className='px-[10px]'>Black bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans13: e.target.value }) }} name='ans13' value="Q.13 c" /> <span className='px-[10px]'>Yellow bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans13: e.target.value }) }} name='ans13' value="Q.13 d" /><span className='px-[10px]'>Blue bag</span></li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>14.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques19" />Waste sharps should be disposed in?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans14: e.target.value }) }} name='ans14' value="Q.14 a" /><span className='px-[10px]'>Red bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans14: e.target.value }) }} name='ans14' value="Q.14 b" /><span className='px-[10px]'>Black bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans14: e.target.value }) }} name='ans14' value="Q.14 c" /> <span className='px-[10px]'>Yellow bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans14: e.target.value }) }} name='ans14' value="Q.14 d" /><span className='px-[10px]'>Blue bag</span></li>

                        </ul>
                    </div>



                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>15.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />Urine bags and catheters biomedical waste are disposed in?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans15: e.target.value }) }} name='ans15' value="Q.15 a" /><span className='px-[10px]'>Yellow bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans15: e.target.value }) }} name='ans15' value="Q.15 b" /><span className='px-[10px]'>White container</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans15: e.target.value }) }} name='ans15' value="Q.15 c" /> <span className='px-[10px]'>Red bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans15: e.target.value }) }} name='ans15' value="Q.16 d" /><span className='px-[10px]'>Blue bag</span></li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>16.</code> <input className='bg-transparent w-full font-bold hidden' type="text" /> Following blood transfusion, the blood bags are disposed in which colour coded bags?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans16: e.target.value }) }} name='ans16' value="Q.16 a" /><span className='px-[10px]'>Red</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans16: e.target.value }) }} name='ans16' value="Q.16 b" /><span className='px-[10px]'>Blue</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans16: e.target.value }) }} name='ans16' value="Q.16 c" /> <span className='px-[10px]'>Yellow</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans16: e.target.value }) }} name='ans16' value="Q.16 d" /><span className='px-[10px]'>White</span></li>
                        </ul>
                    </div>





                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>17.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />Metallic body implants should be disposed in?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans17: e.target.value }) }} name='ans17' value="Q.17 a" /><span className='px-[10px]'>Cadmium free red colour bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans17: e.target.value }) }} name='ans17' value="Q.17 b" /><span className='px-[10px]'>Can be disposed of with general waste</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans17: e.target.value }) }} name='ans17' value="Q.17 c" /> <span className='px-[10px]'>Puncture proof, leak proof box with the blue colour marking</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans17: e.target.value }) }} name='ans17' value="Q.17 d" /><span className='px-[10px]'>Puncture proof leak proof container</span></li>

                        </ul>
                    </div>

                    <h2 className='text-center sm:text-left text-[20px] md:text-[25px] py-[20px]'><b><u>SECTION D (Final Disposal of Biomedical Waste)</u></b></h2>



                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>18.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />Incineration is not done for?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans18: e.target.value }) }} name='ans18' value="Q.18 a" /><span className='px-[10px]'>Cytotoxic waste</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans18: e.target.value }) }} name='ans18' value="Q.18 b" /><span className='px-[10px]'>Waste sharps</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans18: e.target.value }) }} name='ans18' value="Q.18 c" /> <span className='px-[10px]'>Human anatomical waste</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans18: e.target.value }) }} name='ans18' value="Q.18 d" /><span className='px-[10px]'>Cotton contaminated by blood</span></li>
                        </ul>
                    </div>



                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>19.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />Final disposal of placenta after deliveryis done in</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans19: e.target.value }) }} name='ans19' value="Q.19 a" /><span className='px-[10px]'>In blue bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans19: e.target.value }) }} name='ans19' value="Q.19 b" /><span className='px-[10px]'>Autoclaving</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans19: e.target.value }) }} name='ans19' value="Q.19 c" /> <span className='px-[10px]'>Incineration</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans19: e.target.value }) }} name='ans19' value="Q.19 d" /><span className='px-[10px]'>Microwaving</span></li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>20.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques25" defaultValue="Q.25 Hospital dressings are destroyed by?" /> Hospital dressings are destroyed by?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans20: e.target.value }) }} name='ans20' value="Q.20 a" /><span className='px-[10px]'>Burying</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans20: e.target.value }) }} name='ans20' value="Q.20 b" /><span className='px-[10px]'>Dumping</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans20: e.target.value }) }} name='ans20' value="Q.20 c" /> <span className='px-[10px]'>Boiling</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans20: e.target.value }) }} name='ans20' value="Q.20 d" /><span className='px-[10px]'>Burning</span></li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>21.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />Disposal of expired and cytotoxic drugs is</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans21: e.target.value }) }} name='ans21' value="Q.21 a" /><span className='px-[10px]'>Separated landfill disposal</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans21: e.target.value }) }} name='ans21' value="Q.21 b" /><span className='px-[10px]'>Municipal waste disposal </span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans21: e.target.value }) }} name='ans21' value="Q.21 c" /> <span className='px-[10px]'>Autoclaving</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans21: e.target.value }) }} name='ans21' value="Q.21 d" /><span className='px-[10px]'>Chemical treatment</span></li>
                        </ul>
                    </div>




                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>22.</code> <input className='bg-transparent w-full font-bold hidden' type="text" /> Which of the following category of waste are treated by autoclaving and micro-waving?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans22: e.target.value }) }} name='ans22' value="Q.22 a" /><span className='px-[10px]'>Placenta, Organs, Blood bags</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans22: e.target.value }) }} name='ans22' value="Q.22 b" /><span className='px-[10px]'> Catheter, Urine bags, Gloves</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans22: e.target.value }) }} name='ans22' value="Q.22 c" /> <span className='px-[10px]'> Anti-neoplastic drugs and expired drugs</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans22: e.target.value }) }} name='ans22' value="Q.22 d" /><span className='px-[10px]'>Culture plates, slides, tubes</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>23.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />Safe disposal of mercury is by?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans23: e.target.value }) }} name='ans23' value="Q.23 a" /><span className='px-[10px]'>Collect carefully and recycle</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans23: e.target.value }) }} name='ans23' value="Q.23 b" /><span className='px-[10px]'>Controlled combustion</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans23: e.target.value }) }} name='ans23' value="Q.23 c" /> <span className='px-[10px]'>Chemical treatment</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans23: e.target.value }) }} name='ans23' value="Q.23 d" /><span className='px-[10px]'>Deep burial</span></li>

                        </ul>
                    </div>

                    <h2 className='text-center sm:text-left text-[20px] md:text-[25px] py-[20px]'><b><u>SECTION E (Precautions while handling Biomedical Waste) </u></b></h2>




                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>24.</code> <input className='bg-transparent w-full font-bold hidden' type="text" /> When disposing plastic bags tubing, syringes and gloves used for administrating anti-neoplastic drugs, which of the following nursing intervention should be implemented?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans24: e.target.value }) }} name='ans24' value="Q.24 a" /><span className='px-[10px]'>Avoiding contact with the equipment by allowing house keeping</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans24: e.target.value }) }} name='ans24' value="Q.24 b" /><span className='px-[10px]'> Discarding all equipment in a container marked isolation</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans24: e.target.value }) }} name='ans24' value="Q.24 c" /><span className='px-[10px]'>Dispose all equipment in a container marked bio health hazards</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans24: e.target.value }) }} name='ans24' value="Q.24 d" /><span className='px-[10px]'> Disposing all equipment in a regular trash receptacle</span></li>
                        </ul>
                    </div>



                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>25.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />Which vaccination should be given to the workers working with biomedical waste</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans25: e.target.value }) }} name='ans25' value="Q.25 a" /><span className='px-[10px]'>HbsAg</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans25: e.target.value }) }} name='ans25' value="Q.25 b" /><span className='px-[10px]'>Tetanus</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans25: e.target.value }) }} name='ans25' value="Q.25 c" /><span className='px-[10px]'>Both (a) and (b)</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans25: e.target.value }) }} name='ans25' value="Q.25 d" /><span className='px-[10px]'>Rabies</span></li>
                        </ul>

                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>26.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />What are the steps to be taken if you are exposed with blood or other infectious materials</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans26: e.target.value }) }} name='ans26' value="Q.26 a" /><span className='px-[10px]'>Needle sticks or sharp injuries should be immediately washed with soap and water</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans26: e.target.value }) }} name='ans26' value="Q.26 b" /><span className='px-[10px]'>Irrigate eyes with an eye wash for 10-15 minutes</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans26: e.target.value }) }} name='ans26' value="Q.26 c" /><span className='px-[10px]'>Report the incident to the supervisor and seek medical treatment</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans26: e.target.value }) }} name='ans26' value="Q.26 d" /><span className='px-[10px]'>All of the above</span></li>
                        </ul>

                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>27.</code> <input className='bg-transparent w-full font-bold hidden' type="text" /> Blood spills in Indian Hospitals are disinfected by compounds: </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans27: e.target.value }) }} name='ans27' value="Q.27 a" /><span className='px-[10px]'>Quaternary ammonium</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans27: e.target.value }) }} name='ans27' value="Q.27 b" /><span className='px-[10px]'>Phenol based</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans27: e.target.value }) }} name='ans27' value="Q.27 c" /> <span className='px-[10px]'>Chlorine based</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans27: e.target.value }) }} name='ans27' value="Q.27 d" /><span className='px-[10px]'> Alcohol based</span></li>
                        </ul>
                    </div>






                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>28.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />An HIV positive man is brought to you following an accident. How would you discard his blood-soaked dressing material.</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans28: e.target.value }) }} name='ans28' value="Q.28 a" /><span className='px-[10px]'>Pour 1% hypochlorite on dressing material and send for incineration</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans28: e.target.value }) }} name='ans28' value="Q.28 b" /><span className='px-[10px]'>Pour 5% hypochlorite on dressing material and send for incineration</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans28: e.target.value }) }} name='ans28' value="Q.28 c" /><span className='px-[10px]'> Put the dressing material directly in an appropriate bag and send for incineration</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans28: e.target.value }) }} name='ans28' value="Q.28 d" /><span className='px-[10px]'>Pour 10% hypochlorite on dressing material and send for incineration</span></li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>29.</code> <input className='bg-transparent w-full font-bold hidden' type="text" />Best disinfectant of cholera stool is:</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans29: e.target.value }) }} name='29' value="Q.29 a" /><span className='px-[10px]'>Bleaching powder</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans29: e.target.value }) }} name='29' value="Q.29 b" /><span className='px-[10px]'>Lime</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans29: e.target.value }) }} name='29' value="Q.29 c" /><span className='px-[10px]'>Phenol</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans29: e.target.value }) }} name='29' value="Q.29 d" /><span className='px-[10px]'>Cresol</span></li>
                        </ul>
                    </div>








                    <fieldset className='border-[3px] border-black p-[10px_20px] sm:p-[10px_50px] rounded-[10px] bg-black text-white m-[20px_10px] sm:m-[20px_20px] text-[15px] sm:text-[20px]'>
                        <legend className='bg-black text-white p-[7px_10px] rounded-[10px] text-[15px]'>GOVT. COLLEGE OF NURSING, JODHPUR</legend>
                        <p className='leading-10'>I (respondent’s name)____________________ hereby give my permission to MUSKAN, VIVEK,
                            BHARAT, YASHSHVINI,  ZEESHAN to allow me to respond to questionnaire and quote my responses
                            in scholarly research project. I understand that their work is for academic purposes.
                            I also understand that my anonymity will be maintained with regard to my response to questionnaire
                            items.<br />
                        </p>
                        <p className='pt-[20px]'> I hereby give my permission in form of signature below:</p>

                        <p className='m-[100px_20px] sm:m-[10px_50px]'><span>Date-</span><input name='date' onChange={(e) => { setformdata({ ...formdata, date: e.target.value }) }} className='text-white bg-transparent border rounded-[10px] ps-[10px] ms-[10px]' type="date" /></p>
                    </fieldset>
                    <button className='block m-[10px_auto] bg-blue-500 text-white p-[7px_20px] rounded-[10px]' type='submit'>Submit</button>
                </form>
            </section>
        </>
    )
}
export default Form
