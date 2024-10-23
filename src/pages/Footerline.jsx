import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Footerline = () => {
    const nav = useNavigate()


    useEffect(() => {
        const checkformsubmitted = () => {
            let ifcookiedata = Cookies.get("staff")
            if (ifcookiedata) {
                nav("/thank-you")
            }
        }
        checkformsubmitted()

    }, [nav])
    return (
        <div className='text-right text-[15px]'>
            <small>GOVT. COLLEGE OF NURSING, JODHPUR</small>

        </div>
    )
}

export default Footerline
