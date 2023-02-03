import Image from 'next/image';
import left from '../LeftSide/left.png'
const LeftSide = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto">
                <div>
                    <Image
                        src={left}
                        width="416px"
                        height="496px"
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftSide;