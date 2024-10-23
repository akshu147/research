import React, { useState } from 'react'
import bighazard from "../images/Biohazard_symbol.svg.png"
import radiation from '../images/Radiation-Symbol-PNG-Transparent-Image.png'
import axios from 'axios'
import Cookies from 'js-cookie'
import Footerline from './Footerline'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const url = process.env.REACT_APP_API_URL;


const Form = () => {
    const nav = useNavigate()
    const [formdata, setformdata] = useState({})
    const addData = async (e) => {
        e.preventDefault()
        if (!formdata.name) return Swal.fire("please enter your name")
        if (!formdata.designation) return Swal.fire("please enter designation")
        if (!formdata.ward) return Swal.fire("please enter ward number")

        const question1 = e.target.ques1.value
        const question2 = e.target.ques2.value
        const question3 = e.target.ques3.value
        const question4 = e.target.ques4.value
        const question5 = e.target.ques5.value
        const question6 = e.target.ques6.value
        const question7 = e.target.ques7.value
        const question8 = e.target.ques8.value
        const question9 = e.target.ques9.value
        const question10 = e.target.ques10.value
        const question11 = e.target.ques11.value
        const question12 = e.target.ques12.value
        const question13 = e.target.ques13.value
        const question14 = e.target.ques14.value
        const question15 = e.target.ques15.value
        const question16 = e.target.ques16.value
        const question17 = e.target.ques17.value
        const question18 = e.target.ques18.value
        const question19 = e.target.ques19.value
        const question20 = e.target.ques20.value
        const question21 = e.target.ques21.value
        const question22 = e.target.ques22.value
        const question23 = e.target.ques23.value
        const question24 = e.target.ques24.value
        const question25 = e.target.ques25.value
        const question26 = e.target.ques26.value
        const question27 = e.target.ques27.value
        const question28 = e.target.ques28.value
        const question29 = e.target.ques29.value
        const question30 = e.target.ques30.value
        const question31 = e.target.ques31.value
        const question32 = e.target.ques32.value
        setformdata({
            ...formdata, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11,
            question12, question13, question14, question15, question16, question17, question18, question19, question20, question21,
            question22, question23, question24, question25, question26, question27, question28, question29, question30, question31, question32
        })
        // console.log(formdata)

        try {
            console.log(url)
            const responce = await axios.post(`${url}/api/formdata/form`, formdata)
            if (responce.status !== 200) return alert("something is wrong about server")


            console.log(responce)

        }
        catch (err) {
            console.log("server error")
        }

        Cookies.set("staff", JSON.stringify(formdata.name))
        nav("/thank-you")
    }


    return (
        <>
            <section className='p-[10px_10px] bg-gradient-to-r from-fuchsia-200 to-cyan-200 sm:p-[20px_30px] md:p-[20px_50px]'>
                <header className='border-[2px] border-black rounded-[20px] p-[20px_20px]'>
                    <h2 className='text-center font-bold text-[20px] sm:text-[23px] md:text-[27px] py-[10px]'>GOVT. COLLEGE OF NURSING, JODHPUR </h2>
                    <p className='text-center text-[18px]'>RAJASTHAN UNIVERSITY OF HEALTH SCIENCES, JAIPUR, RAJASTHAN </p>
                    <div className='text-center pt-[10px]'><b><u>QUESTIONNARE</u></b></div>
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
                        <ul className='list-disc'>
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
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>2.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques2" defaultValue="Q.2 What is your gender?" />What is your gender?</div>
                        <ul className='leading-8'>
                            <li><input value="Male" onChange={(e) => { setformdata({ ...formdata, ans2: e.target.value }) }} type="radio" name='ans2' /><span className='px-[10px]'>Male</span></li>
                            <li><input value="Female" onChange={(e) => { setformdata({ ...formdata, ans2: e.target.value }) }} type="radio" name='ans2' /><span className='px-[10px]'>Female</span></li>
                            <li><input value="Transgender" onChange={(e) => { setformdata({ ...formdata, ans2: e.target.value }) }} type="radio" name='ans2' /><span className='px-[10px]'>Transgender</span></li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>3.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques3" defaultValue="Q.3 Total years of work  experience?" />Total years of work  experience?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans3: e.target.value }) }} name='ans3' value="0-5 years " /><span className='px-[10px]'>0-5 year</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans3: e.target.value }) }} name='ans3' value="6-10 years " /><span className='px-[10px]'>6-10 years</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans3: e.target.value }) }} name='ans3' value="11-15 years " /><span className='px-[10px]'>11-15 years</span></li>
                            <li> <input type="radio" onChange={(e) => { setformdata({ ...formdata, ans3: e.target.value }) }} name='ans3' value=">15-20 years" /><span className='px-[10px]'>15-20 years</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>4.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques4" defaultValue="Q.4 What is your educational qualification? " />What is your educational qualification?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans4: e.target.value }) }} name='ans4' value="ANM" /><span className='px-[10px]'>ANM</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans4: e.target.value }) }} name='ans4' value="GNM" /><span className='px-[10px]'>GNM</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans4: e.target.value }) }} name='ans4' value="B.Sc. Nursing" /><span className='px-[10px]'>B.Sc. Nursing</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans4: e.target.value }) }} name='ans4' value="M.Sc. Nursing " /><span className='px-[10px]'>M.Sc. Nursing </span></li>
                            <li> <input type="radio" onChange={(e) => { setformdata({ ...formdata, ans4: e.target.value }) }} name='ans4' value="PhD. Nursing " /><span className='px-[10px]'>PhD. Nursing </span></li>

                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>5.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques5" defaultValue="Q.5 Have you attended any program related to biomedical waste management previously?  " />Have you attended any program related to biomedical waste management previously? </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans5: e.target.value }) }} name='ans5' value="yes" /><span className='px-[10px]'>YES</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans5: e.target.value }) }} name='ans5' value="no" /><span className='px-[10px]'>NO</span></li>

                        </ul>
                    </div>



                    <h2 className='text-center sm:text-left text-[20px] md:text-[25px] py-[20px]'><b><u>SECTION B (GENERAL KNOWLEDGE RELATED TO BIOMEDICAL WASTE) </u></b></h2>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[70%] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] font-bold'><code>6.</code> <input className='bg-transparent w-[100%] font-bold hidden' type="text" name="ques6" defaultValue="Q.6 3-D in hospital waste management means?" />3-D in hospital waste management means?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" name='ans6' onChange={(e) => { setformdata({ ...formdata, ans6: e.target.value }) }} value="Disinfection, Disposal, Drainage" /><span className='px-[10px]'>Disinfection, Disposal, Drainage</span></li>
                            <li><input type="radio" name='ans6' onChange={(e) => { setformdata({ ...formdata, ans6: e.target.value }) }} value="Discard, Disinfection, Drainage" /><span className='px-[10px]'>Discard, Disinfection, Drainage</span></li>
                            <li><input type="radio" name='ans6' onChange={(e) => { setformdata({ ...formdata, ans6: e.target.value }) }} value="Destruction, Deep burial, Drainage " /> <span className='px-[10px]'>Destruction, Deep burial, Drainage</span></li>
                            <li><input type="radio" name='ans6' onChange={(e) => { setformdata({ ...formdata, ans6: e.target.value }) }} value="Destruction, Deep burial, Disposal" /><span className='px-[10px]'>Destruction, Deep burial, Disposal</span></li>
                        </ul>

                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] w-[100%] sm:w-[70%] md:w-[70%]  mt-[10px] rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>7.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques7" defaultValue="Q.7 An HIV positive man is brought to you following an accident. How would you discard his blood soaked dressing material?" />An HIV positive man is brought to you following an accident. How would you discard his blood soaked dressing material?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans7: e.target.value }) }} name='ans7' value="Pour 1% hypochlorite on dressing material and send for incineration" /><span className='px-[10px]'>Pour 1% hypochlorite on dressing material and send for incineration</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans7: e.target.value }) }} name='ans7' value="Pour 5% hypochlorite on dressing material and send for incineration" /><span className='px-[10px]'>Pour 5% hypochlorite on dressing material and send for incineration</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans7: e.target.value }) }} name='ans7' value="Put the dressing material directly in an appropriate bag and send for incineration " /><span className='px-[10px]'>Put the dressing material directly in an appropriate bag and send for incineration</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans7: e.target.value }) }} name='ans7' value="Pour 10% hypochlorite on dressing material and send for incineration" /><span className='px-[10px]'>Pour 10% hypochlorite on dressing material and send for incineration</span></li>
                        </ul>

                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>8.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques8" defaultValue="Q.8 Average hospital waste produced per bed per day in Government Hospital? " />Average hospital waste produced per bed per day in Government Hospital? </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans8: e.target.value }) }} name='ans8' value="1.5-2.0 Kg" /><span className='px-[10px]'>1.5-2.0 Kg</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans8: e.target.value }) }} name='ans8' value="0.5-1.0 kg" /><span className='px-[10px]'>0.5-1.0 kg</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans8: e.target.value }) }} name='ans8' value="0.5-3.0 kg" /> <span className='px-[10px]'>0.5-3.0 kg</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans8: e.target.value }) }} name='ans8' value="0.5-4.0 kg" /><span className='px-[10px]'>0.5-4.0 kg</span></li>
                        </ul>

                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>9.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques9" defaultValue="Q.9 Which vaccination should be given to the workers working with biomedical waste? " />Which vaccination should be given to the workers working with biomedical waste?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans9: e.target.value }) }} name='ans9' value="HbsAg" /><span className='px-[10px]'> HbsAg</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans9: e.target.value }) }} name='ans9' value="Tetanus" /><span className='px-[10px]'>Tetanus</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans9: e.target.value }) }} name='ans9' value="Both (a) and (b)" /> <span className='px-[10px]'>Both (a) and (b)</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans9: e.target.value }) }} name='ans9' value="Rabies" /><span className='px-[10px]'>Rabies</span></li>

                        </ul>

                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>10.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques10" defaultValue="Q.10 What are the steps to be taken if you are exposed with blood or other infectious materials? " />What are the steps to be taken if you are exposed with blood or other infectious materials?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans10: e.target.value }) }} name='ans10' value="Needle sticks or sharp injuries should be immediately washed with soap and water" /><span className='px-[10px]'> Needle sticks or sharp injuries should be immediately washed with soap and water</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans10: e.target.value }) }} name='ans10' value="Irrigate eyes with an eye wash for 10-15 minutes" /><span className='px-[10px]'>Irrigate eyes with an eye wash for 10-15 minutes</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans10: e.target.value }) }} name='ans10' value="Report the incident to the supervisor and seek medical treatment" /> <span className='px-[10px]'>Report the incident to the supervisor and seek medical treatment</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans10: e.target.value }) }} name='ans10' value="0.5-4.0 kg" /><span className='px-[10px]'>All of the above</span></li>

                        </ul>

                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>11.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques11" defaultValue="Q.11 Biomedical waste management and handling Rules 1998 comes under the act?" /> Biomedical waste management and handling Rules 1998 comes under the act?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans11: e.target.value }) }} name='ans11' value="Environmental Protection Act 1986" /><span className='px-[10px]'>Environmental Protection Act 1986</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans11: e.target.value }) }} name='ans11' value="ESI act 1994" /><span className='px-[10px]'>ESI act 1994</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans11: e.target.value }) }} name='ans11' value="Labour Act 1948" /> <span className='px-[10px]'>Labour Act 1948</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans11: e.target.value }) }} name='ans11' value="National Health Programme 1983" /><span className='px-[10px]'>National Health Programme 1983</span></li>

                        </ul>

                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>12.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques12" defaultValue="Q.12 Latest amendment in BMW rules 1998 is in?" /> Latest amendment in BMW rules 1998 is in? </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans12: e.target.value }) }} name='ans12' value="2016" /><span className='px-[10px]'>2016</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans12: e.target.value }) }} name='ans12' value="2002" /><span className='px-[10px]'>2002</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans12: e.target.value }) }} name='ans12' value="2000" /> <span className='px-[10px]'>2000</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans12: e.target.value }) }} name='ans12' value="2015" /><span className='px-[10px]'>2015</span></li>

                        </ul>

                    </div>



                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>13.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques13" defaultValue="Q.13 Identify the symbol shown in picture:" /> Identify the symbol shown in picture:</div>
                        <div className='flex justify-between items-center'>
                            <ul className='leading-8'>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans13: e.target.value }) }} name='ans13' value="Bio hazard" /><span className='px-[10px]'>Bio hazard</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans13: e.target.value }) }} name='ans13' value="Radiological hazards" /><span className='px-[10px]'>Radiological hazards</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans13: e.target.value }) }} name='ans13' value="Cytotoxic hazards" /> <span className='px-[10px]'>Cytotoxic hazards</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans13: e.target.value }) }} name='ans13' value="Family planning" /><span className='px-[10px]'>Family planning</span></li>
                            </ul>
                            <img className='border-[2px] border-black rounded-[20px] p-[10px]' width="80px" src={bighazard} alt="" />
                        </div>



                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>14.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques14" defaultValue="Q.14 Identify the symbol shown in picture:  " /> Identify the symbol shown in picture:  </div>
                        <div className='flex justify-between items-center'>
                            <ul className='leading-8'>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans14: e.target.value }) }} name='ans14' value="Bio-Hazard" /><span className='px-[10px]'>Bio-Hazard</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans14: e.target.value }) }} name='ans14' value="Radiological hazards" /><span className='px-[10px]'>Radiological hazards</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans14: e.target.value }) }} name='ans14' value="Cytotoxic hazards" /> <span className='px-[10px]'>Cytotoxic hazards</span></li>
                                <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans14: e.target.value }) }} name='ans14' value="Radiation hazards" /><span className='px-[10px]'>Radiation hazards</span></li>
                            </ul>
                            <img className='border-[2px] border-black rounded-[20px] p-[10px]' width="80px" src={radiation} alt="" />

                        </div>


                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>15.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques15" defaultValue="Q.15 Best disinfectant of cholera stool is: " />Best disinfectant of cholera stool is: </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans15: e.target.value }) }} name='ans15' value="Bleaching powder" /><span className='px-[10px]'>Bleaching powder</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans15: e.target.value }) }} name='ans15' value="Lime" /><span className='px-[10px]'>Lime</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans15: e.target.value }) }} name='ans15' value="Phenol" /> <span className='px-[10px]'>Phenol</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans15: e.target.value }) }} name='ans15' value="2015" /><span className='px-[10px]'>Creso</span></li>
                        </ul>

                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>16.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques16" defaultValue="Q.16 Blood spills in Indian Hospitals are disinfected by compounds: " /> Blood spills in Indian Hospitals are disinfected by compounds: </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans16: e.target.value }) }} name='ans16' value="Quaternary ammonium" /><span className='px-[10px]'>Quaternary ammonium</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans16: e.target.value }) }} name='ans16' value="Phenol based" /><span className='px-[10px]'>Phenol based</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans16: e.target.value }) }} name='ans16' value="Chlorine based" /> <span className='px-[10px]'>Chlorine based</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans16: e.target.value }) }} name='ans16' value="Alcohol based" /><span className='px-[10px]'> Alcohol based</span></li>


                        </ul>

                    </div>

                    <h2 className='text-center sm:text-left text-[20px] md:text-[25px] py-[20px]'><b><u>SECTION C (Biomedical Waste Segregation by Colour coding)</u></b></h2>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>17.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques17" defaultValue="Q.17 All of the following statements regarding biomedical waste management are true except," /> All of the following statements regarding biomedical waste management are true except,  </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onCanPlay={(e) => { setformdata({ ...formdata, ans17: e.target.value }) }} name='ans17' value="Human anatomical waste is thrown in yellow bag" /><span className='px-[10px]'>Human anatomical waste is thrown in yellow bag</span></li>
                            <li><input type="radio" onCanPlay={(e) => { setformdata({ ...formdata, ans17: e.target.value }) }} name='ans17' value="Blue bag waste is disposed in landfill" /><span className='px-[10px]'>Blue bag waste is disposed in landfill</span></li>
                            <li><input type="radio" onCanPlay={(e) => { setformdata({ ...formdata, ans17: e.target.value }) }} name='ans17' value="Incineration ash is discarded in black bag" /> <span className='px-[10px]'>Incineration ash is discarded in black bag</span></li>
                            <li><input type="radio" onCanPlay={(e) => { setformdata({ ...formdata, ans17: e.target.value }) }} name='ans17' value="Material in red bag could be a source of contamination" /><span className='px-[10px]'>Material in red bag could be a source of contamination</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>18.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques18" defaultValue="Q.18 Plastic cover of syringes should be disposed in?" />Plastic cover of syringes should be disposed in? </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans18: e.target.value }) }} name='ans18' value="Red bag" /><span className='px-[10px]'>Red bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans18: e.target.value }) }} name='ans18' value="Black bag" /><span className='px-[10px]'>Black bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans18: e.target.value }) }} name='ans18' value="Yellow bag" /> <span className='px-[10px]'>Yellow bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans18: e.target.value }) }} name='ans18' value="Blue bag" /><span className='px-[10px]'>Blue bag</span></li>

                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>19.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques19" defaultValue="Q.19 Waste sharps should be disposed in?" />Waste sharps should be disposed in?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans19: e.target.value }) }} name='ans19' value="Red bag" /><span className='px-[10px]'>Red bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans19: e.target.value }) }} name='ans19' value="Black bag" /><span className='px-[10px]'>Black bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans19: e.target.value }) }} name='ans19' value="Yellow bag" /> <span className='px-[10px]'>Yellow bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans19: e.target.value }) }} name='ans19' value="Blue bag" /><span className='px-[10px]'>Blue bag</span></li>

                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>20.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques20" defaultValue="Q.20 Urine bags and catheters biomedical waste are disposed in?" />Urine bags and catheters biomedical waste are disposed in?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans20: e.target.value }) }} name='ans20' value="Yellow bag" /><span className='px-[10px]'>Yellow bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans20: e.target.value }) }} name='ans20' value="White container" /><span className='px-[10px]'>White container</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans20: e.target.value }) }} name='ans20' value="Red bag" /> <span className='px-[10px]'>Red bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans20: e.target.value }) }} name='ans20' value="Blue bag" /><span className='px-[10px]'>Blue bag</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>21.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques21" defaultValue="Q.21 Following blood transfusion, the blood bags are disposed in which colour coded bags?" /> Following blood transfusion, the blood bags are disposed in which colour coded bags?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans21: e.target.value }) }} name='ans21' value="Red" /><span className='px-[10px]'>Red</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans21: e.target.value }) }} name='ans21' value="Blue" /><span className='px-[10px]'>Blue</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans21: e.target.value }) }} name='ans21' value="Yellow" /> <span className='px-[10px]'>Yellow</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans21: e.target.value }) }} name='ans21' value="White" /><span className='px-[10px]'>White</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>22.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques22" defaultValue="Q.22 Metallic body implants should be disposed in?" />Metallic body implants should be disposed in?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans22: e.target.value }) }} name='ans22' value="Cadmium free red colour bag" /><span className='px-[10px]'>Cadmium free red colour bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans22: e.target.value }) }} name='ans22' value="Can be disposed of with general waste" /><span className='px-[10px]'>Can be disposed of with general waste</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans22: e.target.value }) }} name='ans22' value="Puncture proof, leak proof box with the blue colour marking" /> <span className='px-[10px]'>Puncture proof, leak proof box with the blue colour marking</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans22: e.target.value }) }} name='ans22' value="Puncture proof leak proof container" /><span className='px-[10px]'>Puncture proof leak proof container</span></li>

                        </ul>
                    </div>

                    <h2 className='text-center sm:text-left text-[20px] md:text-[25px] py-[20px]'><b><u>SECTION D (Final Disposal of Biomedical Waste)</u></b></h2>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>23.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques23" defaultValue="Q.23 Incineration is not done for?" />Incineration is not done for?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans23: e.target.value }) }} name='ans23' value="Cytotoxic waste" /><span className='px-[10px]'>Cytotoxic waste</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans23: e.target.value }) }} name='ans23' value="Waste sharps" /><span className='px-[10px]'>Waste sharps</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans23: e.target.value }) }} name='ans23' value="Human anatomical waste" /> <span className='px-[10px]'>Human anatomical waste</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans23: e.target.value }) }} name='ans23' value="Cotton contaminated by blood" /><span className='px-[10px]'>Cotton contaminated by blood</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>24.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques24" defaultValue="Q.24 Waste disposal of placenta after delivery is done in?" />Waste disposal of placenta after delivery is done in?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans24: e.target.value }) }} name='ans24' value="In blue bag" /><span className='px-[10px]'>In blue bag</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans24: e.target.value }) }} name='ans24' value="Autoclaving" /><span className='px-[10px]'>Autoclaving</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans24: e.target.value }) }} name='ans24' value="Incineration" /> <span className='px-[10px]'>Incineration</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans24: e.target.value }) }} name='ans24' value="Microwaving" /><span className='px-[10px]'>Microwaving</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>25.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques25" defaultValue="Q.25 Hospital dressings are destroyed by?" /> Hospital dressings are destroyed by?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans25: e.target.value }) }} name='ans25' value="Burying" /><span className='px-[10px]'>Burying</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans25: e.target.value }) }} name='ans25' value="Dumping" /><span className='px-[10px]'>Dumping</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans25: e.target.value }) }} name='ans25' value="Boiling" /> <span className='px-[10px]'>Boiling</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans25: e.target.value }) }} name='ans25' value="Burning" /><span className='px-[10px]'>Burning</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>26.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques26" defaultValue="Q.26 Disposal of expired and cytotoxic drugs is? " />Disposal of expired and cytotoxic drugs is? </div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans26: e.target.value }) }} name='ans27' value="Separated landfill disposal" /><span className='px-[10px]'>Separated landfill disposal</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans26: e.target.value }) }} name='ans27' value="Municipal waste disposal" /><span className='px-[10px]'>Municipal waste disposal </span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans26: e.target.value }) }} name='ans27' value="Autoclaving" /> <span className='px-[10px]'>Autoclaving</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans26: e.target.value }) }} name='ans27' value="Chemical treatment" /><span className='px-[10px]'>Chemical treatment</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>27.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques27" defaultValue="Q.27 Which of the following category of waste are treated by autoclaving and micro-waving?" /> Which of the following category of waste are treated by autoclaving and micro-waving?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans27: e.target.value }) }} name='ans27' value="Placenta, Organs, Blood bags" /><span className='px-[10px]'>Placenta, Organs, Blood bags</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans27: e.target.value }) }} name='ans27' value=" Catheter, Urine bags, Gloves" /><span className='px-[10px]'> Catheter, Urine bags, Gloves</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans27: e.target.value }) }} name='ans27' value=" Anti-neoplastic drugs and expired drugs" /> <span className='px-[10px]'> Anti-neoplastic drugs and expired drugs</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans27: e.target.value }) }} name='ans27' value="Culture plates, slides, tubes" /><span className='px-[10px]'>Culture plates, slides, tubes</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>28.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques28" defaultValue="Q.28 Safe disposal of mercury is by?" />Safe disposal of mercury is by?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans28: e.target.value }) }} name='ans28' value="Collect carefully and recycle" /><span className='px-[10px]'>Collect carefully and recycle</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans28: e.target.value }) }} name='ans28' value="Controlled combustion" /><span className='px-[10px]'>Controlled combustion</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans28: e.target.value }) }} name='ans28' value="Chemical treatment" /> <span className='px-[10px]'>Chemical treatment</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans28: e.target.value }) }} name='ans28' value="Deep burial" /><span className='px-[10px]'>Deep burial</span></li>

                        </ul>
                    </div>

                    <h2 className='text-center sm:text-left text-[20px] md:text-[25px] py-[20px]'><b><u>SECTION E (Precautions while handling Biomedical Waste) </u></b></h2>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>29.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques29" defaultValue="Q.29 When disposing plastic bags tubing, syringes and gloves used for administrating anti
neoplastic drugs, which of the following nursing intervention should be implemented?" /> When disposing plastic bags tubing, syringes and gloves used for administrating anti
                            neoplastic drugs, which of the following nursing intervention should be implemented?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans29: e.target.value }) }} name='ans29' value="Avoiding contact with the equipment by allowing house keeping" /><span className='px-[10px]'>Avoiding contact with the equipment by allowing house keeping</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans29: e.target.value }) }} name='ans29' value="Discarding all equipment in a container marked isolation" /><span className='px-[10px]'> Discarding all equipment in a container marked isolation</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans29: e.target.value }) }} name='ans29' value="Dispose all equipment in a container marked bio health hazards" /><span className='px-[10px]'>Dispose all equipment in a container marked bio health hazards</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans29: e.target.value }) }} name='ans29' value="Disposing all equipment in a regular trash receptacle" /><span className='px-[10px]'> Disposing all equipment in a regular trash receptacle</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>30.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques30" defaultValue="Q.30 Which vaccination should be given to the workers working with biomedical waste?" /> Which vaccination should be given to the workers working with biomedical waste?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans30: e.target.value }) }} name='ans30' value="HbsAg" /><span className='px-[10px]'>HbsAg</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans30: e.target.value }) }} name='ans30' value="Tetanus" /><span className='px-[10px]'>Tetanus</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans30: e.target.value }) }} name='ans30' value="Both (a) and (b)" /><span className='px-[10px]'>Both (a) and (b)</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans30: e.target.value }) }} name='ans30' value="Rabies" /><span className='px-[10px]'>Rabies</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>31.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques31" defaultValue="Q.31 What are the steps to be taken if you are exposed with blood or other infectious materials?" />What are the steps to be taken if you are exposed with blood or other infectious materials?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans31: e.target.value }) }} name='ans31' value="Needle sticks or sharp injuries should be immediately washed with soap and water" /><span className='px-[10px]'> Needle sticks or sharp injuries should be immediately washed with soap and water</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans31: e.target.value }) }} name='ans31' value="Irrigate eyes with an eye wash for 10-15 minutes" /><span className='px-[10px]'>Irrigate eyes with an eye wash for 10-15 minutes</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans31: e.target.value }) }} name='ans31' value="Report the incident to the supervisor and seek medical treatment" /> <span className='px-[10px]'>Report the incident to the supervisor and seek medical treatment</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans31: e.target.value }) }} name='ans31' value="All of the above" /><span className='px-[10px]'>All of the above</span></li>
                        </ul>
                    </div>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] w-[100%] sm:w-[70%] md:w-[70%]  rounded-[10px] bg-slate-200'>
                        <div className='flex text-[18px] sm:text-[22px] w-full font-bold'><code>32.</code> <input className='bg-transparent w-full font-bold hidden' type="text" name="ques32" defaultValue="Q.32 Blood spills in Indian Hospitals are disinfected by compounds?" />Blood spills in Indian Hospitals are disinfected by compounds?</div>
                        <ul className='leading-8'>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans32: e.target.value }) }} name='ans32' value="Quaternary ammonium" /><span className='px-[10px]'>Quaternary ammonium</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans32: e.target.value }) }} name='ans32' value="Phenol based" /><span className='px-[10px]'>Phenol based</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans32: e.target.value }) }} name='ans32' value="Chlorine based" /> <span className='px-[10px]'>Chlorine based</span></li>
                            <li><input type="radio" onChange={(e) => { setformdata({ ...formdata, ans32: e.target.value }) }} name='ans32' value="Alcohol based" /><span className='px-[10px]'>Alcohol based</span></li>
                        </ul>
                    </div>

                    <fieldset className='border-[3px] border-black p-[10px_20px] sm:p-[10px_50px] rounded-[10px] bg-black text-white m-[20px_10px] sm:m-[20px_20px] text-[15px] sm:text-[20px]'>
                        <legend className='bg-black text-white p-[7px_10px] rounded-[10px]'>Lorem</legend>
                        <p className='leading-10'>I (respondent’s name)____________________ hereby give my permission to MUSKAN, VIVEK,
                            BHARAT, YASHSHVINI,  ZEESHAN to allow me to respond to questionnaire and quote my responses
                            in scholarly research project. I understand that their work is for academic purposes.
                            I also understand that my anonymity will be maintained with regard to my response to questionnaire
                            items.<br />
                        </p>
                        <p className='pt-[20px]'> I hereby give my permission in form of signature below:</p>

                        <p className='m-[100px_20px] sm:m-[10px_50px]'><span>Date-</span><input name='date' onChange={(e) => { setformdata({ ...formdata, date: e.target.value }) }} className='text-white bg-transparent border rounded-[10px] ps-[10px] ms-[10px]' type="date" /></p>
                        <Footerline />
                    </fieldset>
                    <button className='block m-[10px_auto] bg-blue-500 text-white p-[7px_20px] rounded-[10px]' type='submit'>Submit</button>
                </form>
            </section>
        </>
    )
}
export default Form
