import Image from "next/image";
import first from "../FourthSection/first.png"
import second from "../FourthSection/second.png"
import third from "../FourthSection/third.png"
import arrow from "../FourthSection/arrow.png"
import dash from "../FourthSection/dash.png"
import { AiOutlineArrowRight } from 'react-icons/ai';


const FourthSection = () => {
    return (
        <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 my-6 bg-gradient-to-r from-indigo-600 to-indigo-400 p-12 rounded-2xl text-white mt-10">
            <div className="flex gap-5 w-3/4">
                <div className="bg-indigo-500 p-4 h-24 w-24 rounded-lg flex items-center">
                    <Image
                        src={first}
                    />
                </div>
                <div>
                    <p className="text-xl font-bold">Get that 11 line in 30 days</p>
                    <button className="flex items-center mt-4 text-slate-300">
                        <span>Learn more</span>
                        <span className="ml-4 flex">
                            <AiOutlineArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex gap-5 w-3/4">
                <div className="bg-indigo-400 p-4 h-24 w-24 rounded-lg flex items-center">
                    <Image
                    src={second}
                />
                </div>
                <div>
                    <p className="text-xl font-bold">14 Days sherd challenge</p>
                    <button className="flex items-center">
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
                    src={third}
                />
                </div>
                <div>
                    <p className="text-xl font-bold">Get flat belly in 30 days</p>
                    <button className="flex items-center">
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