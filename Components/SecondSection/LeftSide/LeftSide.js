import Image from "next/image";
import vector from '../LeftSide/Vector.png'
import play from '../LeftSide/play.png'
import Brands from "./Brands/Brands";

const LeftSide = () => {
    return (
        <div className="w-3/4 mx-auto">
            <p className="text-6xl">Healthy in side fresh out side</p>
            <p className="text-base">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
            <div className="flex">
                <button className="bg-blue-900 text-white flex py-2 px-6 rounded-xl">
                    <span className="">Get Started</span>
                    <span className="ml-4">
                        <Image
                            src={vector}
                            width='26px'
                            height='26px'
                        />
                    </span>
                </button>
                <button className="bg-white text-blue-900 flex py-2 px-6 rounded-xl ml-6">
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
    );
};

export default LeftSide;