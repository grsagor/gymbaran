import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSides/RightSide";

const SecondSection = () => {
    return (
        <div>
                <div className="flex flex-col-reverse lg:flex-row my-10">
                    <LeftSide></LeftSide>
                    <RightSide></RightSide>
                </div>
        </div>
    );
};

export default SecondSection;