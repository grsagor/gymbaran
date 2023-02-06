import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSides/RightSide";

const SecondSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
            <LeftSide></LeftSide>
            <RightSide></RightSide>
        </div>
    );
};

export default SecondSection;