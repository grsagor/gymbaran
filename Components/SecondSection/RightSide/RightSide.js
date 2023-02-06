import Image from 'next/image';
import right from './right.jpg'
import background1 from './background1.png'

const RightSide = () => {
    return (
        <div className="w-3/4 mx-auto">
            <div className='relative'>
                <div className='relative z-50' style={{zIndex: 3}}>
                <Image
                    src={right}
                />
                </div>
                <div className='absolute -left-10 bottom-0 z-0' style={{zIndex: 1}}>
                <Image
                    src={background1}
                />
                </div>
            </div>
        </div>
    );
};

export default RightSide;