import { AiOutlineArrowRight } from 'react-icons/ai';


const RightSide = () => {
    return (
        <div className='flex justify-center flex-col items-center w-3/4 mx-auto'>
            <div className='w-3/4 mx-auto'>
                <p className="text-5xl mb-10 font-grotesque">Best full body workout to lose fat</p>
                <p className="text-base mb-10 text-slate-400 font-poppins">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                <button className="bg-blue-900 text-white flex items-center py-2 px-6 rounded-xl">
                    <span className="">Get Started</span>
                    <span className="ml-7"><AiOutlineArrowRight /></span>
                </button>
            </div>
        </div>
    );
};

export default RightSide;