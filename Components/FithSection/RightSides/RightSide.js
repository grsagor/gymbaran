import { AiOutlineArrowRight } from 'react-icons/ai';


const RightSide = () => {
    return (
        <div>
            <p className="text-6xl">Best full body workout to lose fat</p>
            <p className="text-base">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
            <button className="bg-blue-900 text-white flex items-center py-2 px-6 rounded-xl">
                    <span className="">Get Started</span>
                    <span className="ml-7"><AiOutlineArrowRight/></span>
                </button>
        </div>
    );
};

export default RightSide;