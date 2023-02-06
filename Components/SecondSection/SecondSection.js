import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const SecondSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 font-poppins">
            <LeftSide></LeftSide>
            <RightSide></RightSide>
        </div>
    );
};

export default SecondSection;