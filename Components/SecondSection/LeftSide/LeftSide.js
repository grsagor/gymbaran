import Image from "next/image";
import vector from '../LeftSide/Vector.png'
import play from '../LeftSide/play.png'
import Brands from "./Brands/Brands";

const LeftSide = () => {
    return (
        <div className="w-11/12 lg:w-3/4 mx-auto flex flex-col justify-center items-center">
            <div className="mt-20">
            <p className="text-3xl lg:text-5xl mb-10 font-grotesque font-bold">Healthy in side <span className="text-indigo-400">fresh</span> out side</p>
            <p className="text-xs lg:text-base mb-6 font-poppins text-justify text-slate-400">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
            <div className="text-xs lg:text-base flex mb-10 drop-shadow-xl shadow-blue-900">
                <button className="bg-blue-900 text-white flex items-center py-2 px-6 rounded-xl">
                    <span className="">Get Started</span>
                    <span className="ml-4">
                        <Image
                            src={vector}
                            width='26px'
                            height='26px'
                        />
                    </span>
                </button>
                <button className="bg-white text-blue-900 shadow flex items-center py-2 px-6 rounded-xl ml-6">
                    <span className="">
                        <Image
                            src={play}
                            width='26px'
                            height='26px'
                        />
                    </span>
                    <span className="ml-4">Learn More</span>
                </button>
            </div>
            <Brands></Brands>
            </div>
        </div>
    );
};

export default LeftSide;