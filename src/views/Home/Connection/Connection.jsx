export default function Connection() {
    return (
        <div className="connection relative max-w-[900px] mx-auto rounded-md mt-20 text-white">
            <div className="flex justify-center mx-auto">
                <img className=" absolute top-[-77px]" src="/icons/group_7957.png" alt="#" />
            </div>
            <div>
                <img className="flex justify-center mx-auto" src="/icons/group_7735.png" alt="#" />
            </div>
            <div className="text-center mt-20 mb-10">
                <p className="text-[rgba(122,185,204,1)] md:text-[20px] text-[16px]">زمان مناسب همین الانه</p>
                <h1 className="md:text-[32px] text-[20px]">با ما ارتباط برقرار کنید اگر:</h1>
            </div>
            <div className="w-[80%] mx-auto py-5 flex justify-between items-center">
                <div>
                    <h2 className="md:text-[24px] sm:text-[18px] text-[14px]">نیاز به مشاوره دارید</h2>
                    <button className="h-4 mx-auto block text-center mt-6 pb-8 relative sm:w-[160px] w-[100px]">
                        <div className="flex justify-center items-center relative z-20">
                            <span>
                                تماس با ما
                            </span>
                            <img className="w-[15px] h-[9px]" src="/icons/Path 7626.png" alt="#" />
                        </div>
                        <div className="absolute bottom-0 bg-[#0c7268] w-full h-4"></div>
                    </button>
                </div>
                <div>
                    <h2 className="md:text-[24px]  sm:text-[18px] text-[14px]">محصولی برای فروش دارید</h2>
                    <button className="h-4 mx-auto block text-center mt-6 pb-8 relative sm:w-[160px] w-[100px]">
                        <div className="flex justify-center items-center relative z-20">
                            <span>
                                شروع کنید
                            </span>
                            <img className="w-[15px] h-[9px]" src="/icons/Path 7626.png" alt="#" />
                        </div>
                        <div className="absolute bottom-0 bg-[#0c7268] w-full h-4"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}