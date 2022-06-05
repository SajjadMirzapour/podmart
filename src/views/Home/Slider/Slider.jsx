import { Button } from "@mui/material"
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';


export default function Slider() {
    // const [controlledSwiper, setControlledSwiper] = useState({});
    return (

        <div className="text-white px-4 text-[14px] md:text-[16px]">
            <img className="mx-auto" src="/icons/Group 6102.png" alt="" />
            <div className="bg-[#083c4c] max-w-[1096px] mx-auto z-0 rounded-xl py-10 overflow-x-clip">
                <h2 className="text-[20px] text-[#7ab9cc] text-center mb-2 pt-[39px]">بیش از 35 ویژگی کاربردی!</h2>
                <div className="flex justify-center items-center">
                    <Button sx={{ backgroundColor: "rgb(69, 91, 102)" }} className="w-[36px] h-[36px] rounded-sm" id="next-slide-button">
                        <img src="/icons/Path 7626.png" alt="#" className="rotate-180" />
                    </Button>
                    <h2 className="text-[32px] text-center text-[#ebeef3] mx-4">امکانات</h2>
                    <Button sx={{ backgroundColor: "rgb(69, 91, 102)" }} className="w-[36px] h-[36px] rounded-sm mb-10" id="prev-slide-button">
                        <img src="/icons/Path 7626.png" alt="#" />
                    </Button>
                </div>
                <div className="flex justify-between mx-auto w-[80%]">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y]}
                        navigation={{
                            nextEl: '#next-slide-button',
                            prevEl: '#prev-slide-button',
                        }}
                        loop // loop={true}
                        pagination={false}
                        scrollbar={false}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 90
                            },
                            420: {
                                slidesPerView: 2,
                                spaceBetween: 90
                            },
                            // 610: {
                            //     slidesPerView: 3,
                            //     spaceBetween: 90
                            // },
                            768: {
                                slidesPerView: 4,
                                // spaceBetween: 50
                            }
                        }}
                    // onSlideChange={() => console.log('slide change')}
                    // controller={{ control: controlledSwiper }}
                    // onSwiper={setControlledSwiper}
                    >
                        <div className="px-3">
                            <SwiperSlide style={{ width: '100px' }}>
                                <div className="w-fit">
                                    <img src="/icons/Group 499.png" alt="#" />
                                    <span>رسپانسیو و واکنشگرا</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '100px' }}>
                                <div className="w-fit">
                                    <img src="/icons/Group 499.png" alt="#" />
                                    <span>مدیریت سفارشات</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '100px' }}>
                                <div className="w-fit">
                                    <img src="/icons/Group 499.png" alt="#" />
                                    <span>گزارش گیری کامل</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/icons/Group 499.png" alt="#" />
                                    <span>رسپانسیو و واکنشگرا</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/icons/Group 499.png" alt="#" />
                                    <span>رسپانسیو و واکنشگرا</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/icons/Group 499.png" alt="#" />
                                    <span>رسپانسیو و واکنشگرا</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/icons/Group 499.png" alt="#" />
                                    <span>رسپانسیو و واکنشگرا</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/icons/Group 499.png" alt="#" />
                                    <span>رسپانسیو و واکنشگرا</span>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
                <button className="h-4 mx-auto block text-center mt-6 pb-8 relative w-[160px]">
                    <div className="flex justify-center items-center relative z-20">
                        <span>
                            همه ویژگی ها
                        </span>
                        <img className="w-[15px] h-[9px]" src="/icons/Path 7626.png" alt="#" />
                    </div>
                    <div className="absolute bottom-0 bg-[#0c7268] w-full h-4"></div>
                </button>
            </div>
        </div>
    )
}