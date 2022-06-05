import { useRef, useState } from 'react'
import { ReactComponent as Question } from "../../../components/Icons/question.svg"
import { ReactComponent as Cloud } from "../../../components/Icons/cloud.svg"
import { ReactComponent as Plus } from "../../../components/Icons/plus.svg"
import { ReactComponent as Minus } from "../../../components/Icons/minus.svg"


export default function FAQitem({ data }) {

    const [show, setShow] = useState(false)
    const ref = useRef(null)
    const handleShow = () => {
        setShow(prev => !prev)
    }

    return (
        <button onClick={handleShow} key={data.id} className={`${show && 'border-2 border-[rgb(111,40,225)] bg-purple-50 '}border rounded-md px-5 py-6 mb-3 last:mb-0 w-[100%] text-right md:text-[18px] text-[14px]`}>
            <div className={`flex justify-between`}>
                <div className='flex justify-between relative'>
                    <div className={`${show ? 'sm:translate-y-10 translate-y-2 bg-green-400' : 'bg-orange-500'} transition-all duration-300 rounded-full w-6 h-6 ml-4 `}>
                        {show ? <Cloud className='absolute top-[7px] right-[7px]' /> : <Question className='absolute top-[5px] right-[7px]' />}
                    </div>
                    <h2 className={`${show && 'text-[rgb(136,82,225)]'} md:text-[18px] text-[14px]`}>{data.title}</h2>
                </div>
                <div>
                    {show ? <Minus /> : <Plus style={{ height: '20px', width: '20px' }} />}
                </div>
            </div>
            <div className='overflow-hidden transition-all duration-300' style={{ height: show ? ref.current?.clientHeight : 0 }}>
                <div className='flex'>
                    <p ref={ref} className='pr-10  md:text-[15px] text-[13px] pt-4'>{data.description}</p>
                </div>
            </div>
        </button>
    )
}