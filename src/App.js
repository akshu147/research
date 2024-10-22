import React, { useState } from 'react'

const App = () => {
    const [formdata, setformdata] = useState({})
    const addData = (e)=> {
        e.preventDefault()
        const question1 = e.target.ques1.value
        const question2 = e.target.ques2.value
        const ans2 = e.target.ans2.value
        
        setformdata({...formdata, question1})
        setformdata({...formdata, question2})
        setformdata({...formdata, ans2})
        console.log(formdata)
    }
    console.log(formdata)
    return (
        <>
            <section className='p-[10px_10px] bg-gradient-to-r from-fuchsia-200 to-cyan-200 sm:p-[20px_30px] md:p-[20px_50px]'>
                <header className='border-[2px] border-black rounded-[20px] p-[20px_20px]'>
                    <h2 className='text-center font-semibold text-[20px] sm:text-[23px] md:text-[27px] py-[10px]'>GOVT. COLLEGE OF NURSING, JODHPUR </h2>
                    <p className='text-center text-[18px]'>RAJASTHAN UNIVERSITY OF HEALTH SCIENCES, JAIPUR, RAJASTHAN </p>
                    <div className='text-center pt-[10px]'><b><u>QUESTIONNARE</u></b></div>
                    <p className="text-center sm:px-[30px] md:px-[40px] lg:-[100px] xl:px-[200px] py-[10px] text-[12px] sm:text-[15px]">A DESCRIPTIVE STUDY TO ASSESS THE KNOWLEDGE REGARDING BIOMEDICAL WASTE
                        MANAGEMENT AMONG STAFF NURSES OF JANANA WING, MATHURA DAS MATHUR
                        HOSPITAL, JODHPUR (RAJ.) </p>
                    <div className='py-[20px]'>
                        <div className='flex justify-start md:justify-center'>
                            <label className='w-[120px] sm:w-[130px] md:w-[150px]'>Name-</label><input value={formdata.name} onChange={(e) => { setformdata({ ...formdata, name: e.target.value }) }} type="text" className='rounded-[7px] p-[5px_10px] bg-transparent border-b-[1px] border-black' placeholder='Name' />
                        </div>
                        <div className='flex m-[10px_0px] justify-start md:justify-center'>
                            <label className='w-[120px] sm:w-[130px] md:w-[150px]'>DESIGNATION-</label><input value={formdata.designation} onChange={(e) => { setformdata({ ...formdata, designation: e.target.value }) }} type="text" className='rounded-[7px] p-[5px_10px] bg-transparent border-b-[1px] border-black' placeholder='DESIGNATION' />
                        </div>
                        <div className='flex justify-start md:justify-center'>
                            <label className='w-[120px] sm:w-[130px] md:w-[150px]'>WARD-</label><input value={formdata.ward} onChange={(e) => { setformdata({ ...formdata, ward: e.target.value }) }} type="text" className='rounded-[7px] p-[5px_10px] bg-transparent border-b-[1px] border-black' placeholder='WARD' />
                        </div>
                    </div>

                </header>
                <h2 className='text-center py-[10px]'><b><u>SECTION A (SOCIO-DEMOGRAPHIC DATA)</u></b></h2>


                <form action="" onSubmit={addData}>

                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[60%] bg-slate-200'>
                        1.<b><input className='bg-transparent' type="text" name="ques1" defaultValue="What is your age? " /></b>
                        <ul className='list-disc'>
                            <li>
                                <input className='mt-[10px] ms-[20px] block bg-transparent border-[1px] border-black rounded-[5px] text-center'
                                    placeholder='Mention you age'
                                    type="number"
                                    name='age'
                                    onChange={(e)=>{setformdata({...formdata, age:e.target.value})}} />
                            </li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[60%] bg-slate-200'>
                        1.<b><input className='bg-transparent' type="text" name="ques2" defaultValue="What is your gender?" /></b>
                        <ul className='leading-10'>
                            <li><input value="Male" type="radio" name='ans2' /><span className='px-[10px]'>Male</span></li>
                            <li><input value="Female" type="radio" name='ans2' /><span className='px-[10px]'>Female</span></li>
                            <li><input value="Transgender" type="radio" name='ans2' /><span className='px-[10px]'>Transgender</span></li>
                        </ul>
                    </div>


                    <div className='border-[1px] border-black p-[10px_20px] mt-[10px] rounded-[10px] w-[100%] sm:w-[70%] md:w-[60%] bg-slate-200'>
                        <ul>
                            <li>alskdf</li>
                        </ul>


                    </div>


                    <button className='block m-[10px_auto] bg-blue-500 text-white p-[7px_20px] rounded-[10px]' type='submit'>Submit</button>


                </form>
                <p className='border'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, reiciendis quidem sequi ipsa et porro laborum tenetur quam eveniet! Eligendi cum error dolorum expedita alias odit. Ipsa dolorem a et error quo repellendus incidunt molestias, consequatur possimus, voluptates alias. Quia praesentium modi deleniti reprehenderit officiis, saepe nihil quo consequuntur vero? Totam modi odit impedit vero voluptate accusamus distinctio tempora alias velit perferendis corrupti architecto, itaque quasi dolorum obcaecati tenetur adipisci voluptatibus optio illum maiores enim cum? Quidem iure beatae dignissimos veniam fuga explicabo, perspiciatis accusantium aliquid provident, alias illo recusandae consectetur saepe laudantium nesciunt voluptate ut? Iure illo commodi aperiam est cupiditate perferendis quas? Libero modi consectetur soluta omnis, nobis at eligendi enim quis ratione eos hic dolorem deserunt inventore doloremque similique ex molestiae accusantium incidunt aperiam molestias magni. Doloribus magnam, vitae ipsam fugiat nostrum provident? Obcaecati accusantium tempora accusamus saepe fugit tempore sint dicta velit provident, expedita exercitationem ipsum cupiditate nisi delectus ab doloribus veniam nesciunt aut dignissimos harum in? Impedit, fugit perspiciatis repudiandae, dolorem maiores eligendi quas incidunt culpa adipisci rem commodi, voluptatum alias omnis est. Commodi facilis ipsa necessitatibus repellat. Dicta cum voluptate ullam quaerat sit, voluptatibus quia accusamus eaque, impedit, exercitationem consequuntur harum quam! Asperiores distinctio architecto quasi, quisquam repellendus quae tenetur consequuntur recusandae ipsa atque dolorum incidunt accusamus earum, esse molestiae ratione quo! Culpa totam quas, laudantium ad beatae nam et consectetur at mollitia a, eum ipsam, cupiditate molestias reprehenderit exercitationem dolore porro earum qui! Possimus, temporibus aut nulla fugit deserunt aspernatur nam tempore at odit praesentium placeat ea, sunt voluptas laboriosam labore ad odio voluptate minus. Error est obcaecati nisi ad, voluptatibus ipsa praesentium officiis recusandae aut unde cupiditate excepturi cumque quam itaque, eveniet nobis animi? Unde, laboriosam ad. Et officia incidunt quis tenetur, doloribus illum. Quod, qui id consequatur cumque exercitationem numquam culpa!</p>




            </section>

        </>
    )
}

export default App
