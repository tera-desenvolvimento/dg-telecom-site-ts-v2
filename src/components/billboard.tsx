import billboardImg from "../img/billboard.svg";

import "../style/billboard.css"

function Billboard() {
    return (
        <div className="billboard-container">
            <img src={billboardImg} />
        </div>
    )
}

export default Billboard;