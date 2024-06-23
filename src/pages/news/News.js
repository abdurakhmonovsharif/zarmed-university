import React from 'react';
import "./news.css"

import img1 from '../../images/news1.jpg'
function News(props) {
    return (
        <div className={"myNews my-20 "}>
            <h1 className={"myTitleNews flex gap-2 "}>
                <svg className="h-9 w-9 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path
                        d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                </svg>
                So'ngi Yangiliklar
            </h1>

            <div className={"myNewsFatherDiv "}>

                {[0, 1, 2, 3, 4, 5].map(item =>
                    <div key={item} className={"myNewsDiv"}>
                        <img className={"myImageNews"} src={img1}/>
                        <h3 className="text-overlay">
                            {item} Zarmed Universitetida «Ma'rifat ulashib» loyihasi doirasida tadbirlar o'tkazildi
                        </h3>
                    </div>
                )}
            </div>
            <div className={"kampus"}>
                <div className="container">
                    <h2 className="title">Kampus</h2>
                    <p className="description">
                        Bu nafaqat talabalar hayoti markazi, balki turli madaniyatlar kesishmasi hamda umrbоqiy do’stlar
                        ortiriladigan dargoh. Bizda siz zerikmasligingiz uchun hamma sharoitlar bor: sport
                        maydonchalaridan
                        keng zallar va yashil dam olish hududlarigacha!
                    </p>
                    <div className="grid">
                        <div className="card">
                            <p className="card-title"><span className="icon">↗️</span>Hemis platformasi</p>
                            <p className="card-link"><a
                                href="https://student.zarmeduniver.com">student.zarmeduniver.com</a>
                            </p>
                        </div>
                        <div className="card">
                            <p className="card-title"><span className="icon">📍</span>Qulay joylashuv</p>
                            <p className="card-link"><a href="#">xaritani ochish</a></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><span className="icon">🧪</span>Zamonaviy Laboratoriyalar</p>
                            <p className="card-link"><a href="#">3D tur</a></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><span className="icon">📚</span>Boy kutubxona</p>
                            <p className="card-link"><a
                                href="https://library.zarmeduniver.com">library.zarmeduniver.com</a>
                            </p>
                        </div>
                        <div className="card">
                            <p className="card-title"><span className="icon">👥</span>Talabalar Hamjamiyati</p>
                            <p className="card-link"><a href="#">ariza berish</a></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><span className="icon">🏢</span>Talabalar yotoqxonasi</p>
                            <p className="card-link"><a href="#">ariza berish</a></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><span className="icon">🏋️</span>Sport klublari</p>
                            <p className="card-link"><a href="#">ariza berish</a></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><span className="icon">🌿</span>Yashil dam olish hududi</p>
                            <p className="card-link"><a href="#">hudud xaritasi</a></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><span className="icon">🍽️</span>Shinam kafeteriya</p>
                            <p className="card-link"><a href="#">menyu</a></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><span className="icon">📅</span>Konferensiyalar zali</p>
                            <p className="card-link"><a href="#">tadbir buyurtma qilish</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="galereya">
                <div className="gallery-container">
                    <h2 className="gallery-title">Galereya</h2>
                    <div className="tabs">
                        <span className="tab active">FOTO GALEREYA</span>
                        <span className="tab">VIDEO GALEREYA</span>
                    </div>
                    <div className="gallery-grid">
                        {[0,1,2,3,4,5,6,7,8].map(item =>
                            <img key={item} src={img1} alt="Image 1" className="gallery-image"/>
                        )}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default News;