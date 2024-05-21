// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// myCss
import style from '../css/MainBanner.module.css'

const MainBanner = () => {
    return (
        <section className={style.mainBanner}>
            <h3 hidden>MainBanner</h3>
            <div className={style.mainSwiperCon}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className={style.mainSwiper}
                >
                    <SwiperSlide><img src="./img/img_bg1.jpg" alt="img_bg1" /></SwiperSlide>
                    <SwiperSlide><img src="./img/img_bg2.jpg" alt="img_bg2" /></SwiperSlide>
                    <SwiperSlide><img src="./img/img_bg3.jpg" alt="img_bg3" /></SwiperSlide>
                    {/* <SwiperSlide><img src="./img/img_bg1.jpg" alt="" /></SwiperSlide> */}
                </Swiper>
            </div>
        </section >
    )
}

export default MainBanner