import React from 'react'
import "../footer/Footer.css"
import logo from "../../images/logo.png"
import locations from "../../images/location.png"
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";




const Footer = () => {
  return (
    <div className='footer '>
        <div className={"f-block"}>
            <div className='flex flex-col gap-2'>
            <img  className="mylogo my-2" src={logo}></img>
            <div className='flex  text-center gap-1 '>
               <CiLocationOn  className='text-white'/>
              <p className='text-white '>Samarqand viloyati, Samarqand, Namozgoh MFY, Xuja Axror <br/> Valiy ko'chasi, 23-uy</p>
            </div>
            <div className='flex items-center text-center gap-1'>
            <CiPhone  className='text-white'/>
              <a className='text-slate-500' href="">+998 55 704-70-70</a>
            </div>
            <div className='flex items-center text-center gap-1'>
            <CiLocationOn  className='text-white'/>
              <p className='text-white'>O‘zbekiston Respublikasi, Buxoro, Q.Murtazoev ko‘chasi, 13A</p>
            </div>
            <div className='flex items-center text-center gap-1'>
            <CiPhone  className='text-white'/>

             <a className='text-slate-500' href="">+998 65 505-70-70</a>
            </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] text-white'>Vakansiyalar</p>
            <a className='text-slate-500 my-2' href="">Universitet ma'lumotlari</a>
            <a className='text-slate-500' href="">Ta'lim sohalari</a>
            <a className='text-slate-500' href="">Mashg'ulot kurslari</a>
            <a className='text-slate-500' href="">Ta'lim narxi</a>
            <a className='text-slate-500' href="">Sayt xaritasi</a>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] text-white'>Kabinetga kirish</p>
            <a className='text-slate-500 my-2' href="">Kirish so'zi</a>
            <a className='text-slate-500' href="">Maqsad, vazifa, qadriyat</a>
            <a className='text-slate-500' href="">Ramzlar</a>
            <a className='text-slate-500' href="">Kontaktlar va fikr-mulohazalar</a>
            <a className='text-slate-500' href="">Grantlar va stipendiyalar</a>
            </div>

            <div className='flex flex-col gap-3 '>
              <p className='text-[20px] text-white'>Onlayn qabul</p>
            <div className='flex gap-3'>
            <BsTelegram  className='text-white text-[30px]'/>
            <BsInstagram  className='text-white text-[30px]'/>

            <FaYoutube   className='text-white text-[30px]' />
            <FaFacebook  className='text-white text-[30px]'/>
            </div>
            <div className='flex gap-2 text-white '>
            <MdOutlineEmail  className='my-1  text-[30px]'/>
            <a className='text-slate-500 my-1' href="">info@zarmeduniver.com</a>
            </div>
            </div>
        </div>
       <div className='my-3'>
       <div className='w-[90%] h-[1px] bg-white m-auto mb-2'></div>
        <p className='text-center text-white my-6'>Mualliflik huquqi © 2024. Zarmed. Barcha huquqlar himoyalangan</p>
       </div>
        
    </div>
  )
}

export default Footer