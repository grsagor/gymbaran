import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSides/RightSide";
import lines from '../FithSection/LeftSide/lines.png'
import bgcircle from '../FithSection/LeftSide/bg-circle.png'
import right from '../FithSection/LeftSide/right.png'
import bgleft from '../FithSection/LeftSide/bgleft.png'
import top from '../FithSection/LeftSide/top.png'
import bottomleft from '../FithSection/LeftSide/bottomleft.png'
import Image from "next/image";

const SecondSection = () => {
    return (
        <div className="relative">
                <div className="flex gap-8 flex-col-reverse lg:flex-row my-10 relative z-50">
                    <LeftSide></LeftSide>
                    <RightSide></RightSide>
                </div>
                <div className='absolute bottom-8 left-32'>
                    <Image
                        src={bgcircle}
                        className='w-64'
                    />
                </div>
                <div className='absolute bottom-8 left-32'>
                    <Image
                        src={lines}
                        className='w-64'
                    />
                </div>
                <div className='absolute bottom-8' style={{left: '360px'}}>
                    <Image
                        src={right}
                        className=''
                    />
                </div>
                <div className='absolute bottom-8 left-8'>
                    <Image
                        src={bgleft}
                        className='w-60'
                    />
                </div>
                <div className='absolute left-20 z-50' style={{bottom: '270px'}}>
                    <Image
                        src={top}
                        className=''
                    />
                </div>
                <div className='absolute bottom-10 left-0 z-50 bg-white drop-shadow-lg flex items-center gap-2 px-4 py-1 rounded-xl'>
                    <div>
                    <Image
                        src={bottomleft}
                        className='bg-gradient-to-r from-indigo-400 to-indigo-300 rounded-full p-2 w-8'
                    />
                    </div>
                    <div>
                        <p className="font-bold">800 kall</p>
                        <p className="text-slate-400">Burn fat</p>
                    </div>
                </div>

        </div>
    );
};

export default SecondSection;