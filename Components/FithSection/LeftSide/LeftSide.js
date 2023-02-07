import Image from 'next/image';
import left from '../LeftSide/left.png'
import lines from './lines.png'
const LeftSide = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto flex flex-col justify-center items-center relative">
                <div className='relative bottom-0 left-'>
                    <Image
                        src={left}
                        className=''
                    />
                </div>
                
            </div>
        </div>
    );
};

export default LeftSide;