import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const SecondSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-96 lg:gap-0 mt-0 lg:mt-40 font-poppins">
            <LeftSide></LeftSide>
            <RightSide></RightSide>
        </div>
    );
};

export default SecondSection;