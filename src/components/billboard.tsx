import billboardImg from "../img/billboard.svg";
import billboardMob01 from "../img/billboardMob01.svg";
import billboardMob02 from "../img/billboardMob02.svg";

import "../style/billboard.css"

import isMobileDevice from '../controllers/checkMobile.controller';

function Billboard() {
    if (!isMobileDevice()){
        return (
            <div className="billboard-container">
                <img src={billboardImg} />
            </div>
        )
    } else {
        return(
            <div className="billboard-container-mob">
                <img src={billboardMob01} />
                <img src={billboardMob02}/>
            </div>
        ) 
    }
}

export default Billboard;