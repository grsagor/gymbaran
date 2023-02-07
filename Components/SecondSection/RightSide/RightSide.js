import Image from 'next/image';
import right from './right.jpg'
import background1 from './background1.png';
import pic1 from './150.png';
import circle from './circle.png';
import topright from './topright.png';
import bottomleft from './bottomleft.png';
import lines from './lines.png';
import bigcircle from './bigcircle.png';


const RightSide = () => {
    return (
            <div className='relative w-3/5 lg:w-3/4 mt-60 lg:mt-60'>
                <div className=''>
                <Image
                    src={right}
                    className="absolute z-50 -right-24 lg:-right-20 -bottom-0"
                />
                </div>
                <div className='absolute w-60 lg:w-96 -right-16 lg:-right-10 bottom-7 z-0'>
                <Image
                    src={bigcircle}
                    className=""
                />
                </div>
                <div className='absolute w-72 lg:w-fit -right-28 lg:-right-24 bottom-0 z-0'>
                <Image
                    src={background1}
                    className=""
                />
                </div>
                <div className='absolute w-64 lg:w-96 -right-20 lg:-right-10 bottom-14 z-0'>
                <Image
                    src={lines}
                    className=""
                />
                </div>
                <div className='absolute z-50 right-28 lg:right-52 -top-72 lg:-top-60 bg-white shadow-lg rounded-xl'>
                    <div className='flex items-center'>
                        <div className='ml-1'>
                            <Image
                                src={pic1}
                                className='w-8 lg:w-full'
                            />
                        </div>
                        <div className='mr-4 text-xs lg:text-base'>
                            <p>150+</p>
                            <p className='text-slate-400'>Members</p>
                        </div>
                    </div>
                </div>
                

                <div className='absolute z-50 bg-white drop-shadow-xl rounded-xl -right-40 bottom-10 text-center flex flex-col justify-center items-center p-4'>
                        <Image
                            src={circle}
                            className='w-8 lg:w-12'
                        />
                        <p className='font-bold text-xs lg:text-base'>Zaqky Simorang</p>
                        <p className='text-slate-400 text-xs lg:text-base'>Trainer</p>
                    </div>
                <div className='absolute z-50 -top-72 lg:-top-60 -right-36'>
                    <Image
                        src={topright}
                        className='w-16 lg:w-full'
                    />
                </div>
                <div className='absolute z-50 bottom-6 right-36 lg:-bottom-2 lg:right-64'>
                    <Image
                        src={bottomleft}
                        className='w-60 lg:w-100'
                    />
                </div>                
            </div>
    );
};

export default RightSide;