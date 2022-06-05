import { Fade } from "react-awesome-reveal"

export default function Manager() {
    return (
        <div className="manager flex flex-wrap justify-between max-w-[1096px] mx-auto mb-20">
            <Fade delay={500} direction='up' triggerOnce >
                <img className="w-full" src="/icons/Group 7952.png" alt="" />
            </Fade>
            <div className="sm:w-[424px] pr-4">
                <Fade delay={500} direction='up' triggerOnce >
                    <img className="mb-1" src="/icons/Group 7636.png" alt="" />
                    <h1 className="text-[20px] text-[#7ab9cc] mb-2">هیچ بخشی از نگاه شما پنهان نخواهد بود</h1>
                    <h2 className="text-[32px] text-[#081c4c] mb-6">
                        همه چیز را
                        <span className="text-[#207d99]">
                            مدیریت
                        </span>
                        کنید
                    </h2>
                    <h3 className="text-[16px] text-[#505e81] mb-6">در پنل مدیریتی فروشنده پادمارت همه بخش های فروشگاه خود را براحتی مدیریت کنید</h3>
                </Fade>
                <Fade delay={500} direction='up' triggerOnce >
                    <ul className="text-[16px]">
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                محیطی ساده با تجربه کاربری راحت و لذت بخش
                            </span>
                        </li>
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                مشاهده سفارش ها، کاربران، کالاها، نظرات و غیره
                            </span>
                        </li>
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                آنالیز فروش، سفارش ها، موجودی انبار و غیره با استفاده از گزارش گیری کامل و دقیق
                            </span>
                        </li>
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                شخصی سازی موارد قابل مشاهده در جداول
                            </span>
                        </li>
                    </ul>
                </Fade>
            </div>
        </div>
    )
}