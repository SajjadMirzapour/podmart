import { DETAILS } from './Question'
import FAQitem from './FAQitem'

export default function Questions() {

    return (
        <div className='w-[80%] mx-auto flex justify-center py-20'>
            <div>
                <h1 className='text-center mb-6'>
                    <span className='text-[gray] text-[16px]'>بیش از ۳۵ ویژگی کاربردی ها</span>
                    <div className='text-[24px]'>
                        <span className='text-[rgb(103,23,229)]'>پرسش </span>
                        <span> های متداول</span>
                    </div>
                </h1>
                <div className='w-full'>
                    {
                        DETAILS.map(data =>
                            <FAQitem key={data.id} data={data} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}