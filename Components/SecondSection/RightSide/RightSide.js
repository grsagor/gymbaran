import Image from 'next/image';
import right from './right.jpg'

const RightSide = () => {
    return (
        <div className="w-3/4 mx-auto">
            <div>
                <Image
                    src={right}
                    width="358px"
                    height="580px"
                />
            </div>
        </div>
    );
};

export default RightSide;