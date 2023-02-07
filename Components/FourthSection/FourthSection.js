import Image from "next/image";
import first from "../FourthSection/first.png"
import second from "../FourthSection/second.png"
import third from "../FourthSection/third.png"
import arrow from "../FourthSection/arrow.png"
import dash from "../FourthSection/dash.png"
import { AiOutlineArrowRight } from 'react-icons/ai';


const FourthSection = () => {
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-0 my-6 bg-gradient-to-r from-indigo-500 to-indigo-300 p-8 lg:p-12 rounded-2xl text-white mt-10">
            <div className="flex gap-5 w-3/4">
                <div className="bg-indigo-400 p-4 h-24 w-24 rounded-lg flex items-center">
                    <Image
                        src={first}
                    />
                </div>
                <div>
                    <p className="text-base lg:text-xl font-bold">Get that 11 line in 30 days</p>
                    <button className="flex items-center mt-4 text-slate-300">
                        <span>Learn more</span>
                        <span className="ml-4 flex">
                            <AiOutlineArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex gap-5 w-3/4">
                <div className="bg-indigo-300 p-4 h-24 w-24 rounded-lg flex items-center">
                    <Image
                    src={second}
                />
                </div>
                <div>
                    <p className="text-base lg:text-xl font-bold">14 Days sherd challenge</p>
                    <button className="flex items-cente text-slate-300">
                        <span>Learn more</span>
                        <span className="ml-4 flex">
                            <AiOutlineArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex gap-5 w-3/4">
                <div className="bg-indigo-200 p-4 h-24 w-24 rounded-lg flex items-center">
                    <Image
                    src={third}
                />
                </div>
                <div>
                    <p className="text-base lg:text-xl font-bold">Get flat belly in 30 days</p>
                    <button className="flex items-center text-slate-300">
                        <span>Learn more</span>
                        <span className="ml-4 flex">
                            <AiOutlineArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;