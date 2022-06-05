import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AttentionSeeker } from "react-awesome-reveal"
import { ReactComponent as Menu } from '../../components/Icons/logo.svg'


export default function Header() {

    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 700) { setShow(true) }
            else { setShow(false) }
        })
    })

    return (

        <div className="head">
            <div className="max-w-[1096px] w-full mx-auto pt-5">
                <nav className="flex justify-between items-center mx-6">
                    <img className="md:flex hidden" src="/icons/Path 8073.png" alt="#" />
                    <button>
                        <img className="md:hidden w-[25px] h-[25px]" src="/icons/menu.png" alt="#" />
                    </button>
                    <div className="menu text-[14px]">
                        <NavLink className={'ml-3 last:ml-3'} to={"/"}>قالب ها</NavLink>
                        <NavLink className={'ml-3 last:ml-3'} to={"/"}>امکانات</NavLink>
                        <NavLink className={'ml-3 last:ml-3'} to={"/"}>درباره ما</NavLink>
                        <NavLink className={'ml-3 last:ml-3'} to={"/"}>تماس با ما</NavLink>
                    </div>
                    <div>
                        <NavLink to={"/"}> ورود </NavLink>
                    </div>
                </nav>
                <div className="md:w-[40%] w-[80%] md:text-right text-center md:mx-0 mx-auto md:mt-[154px] mt-10 md:pr-4">
                    <h2 className="text-[#7ab9cc]">راحت تر از همیشه!</h2>
                    <h1 className="md:text-[40px] text-[20px] mb-6 font-bold">با ایجاد فروشگاه آنلاین
                        فروش خود را
                        <span className="text-[#4696af]">نامحدود</span>
                        کنید
                    </h1>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <video height={'100%'} width={'100%'} className="absolute md:w-[13.4%] w-[27%] h-[320px] md:top-[201px] top-[324px] md:left-[34%] left-[56%] object-cover" autoPlay muted loop><source src="/videos/displayer.mp4" type="video/mp4" /> </video>
                    </div>
                    <p className="md:text-[18px] text-[10px] text-[#505e81] mb-6">نگران پیچیدگی های فروش آنلاین نباشید. با فروشگاه ساز پادمارت بسادگی ایده خود برای داشتن فروشگاه آنلاین را به واقعیت تبدیل کنید و درآمدتان را افزایش دهید</p>
                    <button className="group relative bg-[#0c7268] pr-4 pl-7 rounded-md text-white py-2 md:ml-0 ml-[25px] hover:z-10 transition-all duration-500">
                        <span>شروع کنید</span>
                        <div className="absolute top-0 left-[-20px] bg-[#1f998d]  h-full w-[40px] group-hover:w-[25px] transition-all duration-300 flex justify-center items-center rounded-l-md">
                        </div>
                        <img className="absolute top-[16px] left-[-12px] w-4 h-fit mx-2 z-20" src="/icons/Path 7626.png" alt="#" />
                    </button>
                </div>

            </div>
            <nav className={`${show ? 'translate-y-0' : '-translate-y-32'} fixed top-0 bg-white z-50 w-[100%] shadow-sm transition-all duration-300`}>
                <div className="flex justify-between items-center py-4 md:w-[65%] w-[80%] mx-auto">
                    <img className="md:flex hidden" src="/icons/Path 8073.png" alt="#" />
                    <button>
                        <img className="md:hidden w-[25px] h-[25px]" src="/icons/menu.png" alt="#" />
                    </button>
                    <div className="menu text-[14px]">
                        <NavLink className={'ml-3 last:ml-3'} to={"/"}>قالب ها</NavLink>
                        <NavLink className={'ml-3 last:ml-3'} to={"/"}>امکانات</NavLink>
                        <NavLink className={'ml-3 last:ml-3'} to={"/"}>درباره ما</NavLink>
                        <NavLink className={'ml-3 last:ml-3'} to={"/"}>تماس با ما</NavLink>
                    </div>
                    <div className="flex items-center">
                        <AttentionSeeker effect="swinng">
                            <button className="group sm:text-[16px] text-[12px] relative bg-[#0c7268] pr-4 pl-7 sm:rounded-md text-white sm:py-2 py-1 ml-10 transition-all duration-500">
                                <span>شروع کنید</span>
                                <div className="absolute top-0 left-[-20px] bg-[#1f998d]  h-full w-[40px] group-hover:w-[25px] transition-all duration-300 flex justify-center items-center rounded-l-md">
                                </div>
                                <img className="absolute sm:top-[16px] top-[10px] left-[-12px] w-4 h-fit mx-2 z-20" src="/icons/Path 7626.png" alt="#" />
                            </button>
                        </AttentionSeeker>
                        <NavLink className={'sm:text-[16px] text-[12px]'} to={"/"}> ورود </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}