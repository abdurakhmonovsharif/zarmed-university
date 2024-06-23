import React from 'react'
import Table from 'react-bootstrap/Table';
import "../tablePage/tablepage.css"

const TablePage = () => {
    let arr =[
        {
        yonalish:"60910200 - Davolash ishi",
        duration:"6 yil"
        },
        {
            yonalish:"60910700 - Farmatsiya (turlari bo'yicha)",
            duration:"5 yil"
        },
        {
            yonalish:"60910100 - Stomatologiya (yo'nalishlari bo'yicha)",
            duration:"5 yil"
        },
        {
            yonalish:"60110100 - Pedagogika",
            duration:"	4 yil"
        },
        {
            yonalish:"60110500 - Boshlang`ich ta'lim",
            duration:"6 yil"
        },
        {
            yonalish:"60110200 - Maktabgacha ta’lim",
            duration:"	4 yil"
        },
        {
            yonalish:"60230100 - Filologiya va tillarni o`qitish (rus tili)",
            duration:"6 yil"
        },{
            yonalish:"60230100 - Filologiya va tillarni o`qitish (ingliz tili)",
            duration:"	4 yil"
        },
        {
            yonalish:"60230100 - Filologiya va tillarni o`qitish (koreys tili)",
            duration:"6 yil"
        },{
            yonalish:"60230100 - Filologiya va tillarni o`qitish (turk tili)",
            duration:"	4 yil"
        },
        {
            yonalish:"60220300 - Tarix (mamlakatlar va yo‘nalishlar bo‘yicha)",
            duration:"6 yil"
        },
        {
            yonalish:"60730300 - Qurilish muhandisligi (faoliyat turlari bo‘yicha)",
            duration:"6 yil"
        }, {
            yonalish:"61010300 - Sport faoliyati (faoliyat turlari bo‘yicha)",
            duration:"6 yil"
        }, {
            yonalish:"60310100 - Iqtisodiyot (tarmoqlar va sohalar bo`yicha)",
            duration:"6 yil"
        }, {
            yonalish:"60410400 - Moliya va moliyaviy texnologiyalar",
            duration:"6 yil"
        },

,]
  return (
    <div className='f-table'>
        <div  className='ch-table p-4 m-auto'>
        <h2 className=" flex gap-2 ">
            <svg  className="h-6 w-6 text-blue-900 my-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                    d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
            </svg>
            Yo‘nalishlar
        </h2>
        <p>Zarmed Universitetining Buxoro kampusida o‘quv jarayonlari jami 17 ta yo‘nalishni o‘z ichiga olgan 3 ta
            fakultetda olib boriladi.</p>
        <div className="tabs">
            <span className="tab active ">KUNDUZGI TA'LIM</span>
            <span className="tab">SIRTQI TA'LIM</span>
        </div>
        <Table striped bordered hover >
      <thead className='bg-dark'>
        <tr>
          <th>Yo'nalishlar</th>
          <th>Talim davomiyligi</th>
          <th>Qabul</th>
        </tr>
      </thead>
     <tbody>
        {
            arr.map((item,index)=>
            <tr>
               <td> {item.yonalish}</td>
               <td>{item.duration}</td>
               <td><button>faol</button></td>
            </tr>
               
           
        
            )
        }
     </tbody>
    </Table>

    </div>
    </div>
  )
}

export default TablePage