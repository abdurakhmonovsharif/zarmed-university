import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";

import "./home.css"
import video from "../../images/video.mp4"
import News from "../news/News";
import Questions from '../questions/Questions';
import TablePage from '../tablePage/TablePage';
import Footer from '../footer/Footer';
import FAQ from "../common/Questions";

function Home(props) {
    const [message, setMessage] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    return (
        <div className={""}>
            <nav>
                <Header />
                <video autoPlay muted loop poster="bg.jpg" id="bgvid">
                    <source src={video} type="video/mp4" />
                </video>
                <div className={"myHome"}>
                    <h1 className={"myTitle"}>
                        ADOLATLI, JAMIYATGA VA ISHGA FIDOYI TALABALAR TA’LIM MASKANI
                    </h1>
                    <button
                        className="myBtnApplication text-white flex items-center px-4 py-2 text-sm font-bold rounded-xl text-purple-blue-600 hover:bg-purple-blue-600 transition duration-300">
                        <svg className="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Ariza Topshirish
                    </button>
                </div>
                <News />
                <FAQ />
                <TablePage />
                <Footer />
            </nav>

        </div>
    );
}

export default Home;
