import Image from "next/image";
import nike from '../Brands/nike.png'
import puma from '../Brands/puma.png'
import addidas from '../Brands/addidas.png'
import reebok from '../Brands/reebok.png'

const Brands = () => {
    return (
        <div>
            <h1>Brands</h1>
            <div className="flex justify-between gap-9 items-center">
                <div>
                <Image
                    src={nike}
                />
                </div>
                <div>
                <Image
                    src={addidas}
                />
                </div>
                <div>
                <Image
                    src={puma}
                />
                </div>
                <div>
                <Image
                    src={reebok}
                />
                </div>
            </div>
        </div>
    );
};

export default Brands;