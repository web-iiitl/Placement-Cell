import React from "react";
import GearsImg from "../assets/images/stats23/settings_btech.png";
import GearsImgMtech from "../assets/images/stats23/btech_avg.png";
import PlacementStatsDomainWise from "./PlacemetsStatsDomainWise2021";
import PlacementStats from "../assets/images/stats23/btechpackages.png";
import PlacementStatsMtech from "../assets/images/stats23/mtechpackages.png";
import PlacedPercentageImage from "../assets/images/placedpercentage.PNG";

const Placement = props => {
    

    return (
        <div>
            <div className="stats-outer-wrapper" style={{ marginBottom: "30px" }}>
                <h1 className="ps-name-heading pr-main-heading">
                    Placement Statistics (B.Tech) 2022-23
                </h1>
                <div className="images-row-2">
                    <div className="images-row-2-inner">
                        <img src={PlacementStats} alt="Placement Stats 2023" />
                        <img src={GearsImg} alt="Placement Stats 2023" />
                    </div>
                </div>
                <div className="images-row-2" style={{ marginTop: "30px" }}>
                    <div className="images-row-2-inner" style={{ marginBottom: 100 }}>
                        <PlacementStatsDomainWise />
                        <div style={{ alignSelf: "center" }}>
                            <img
                                src={PlacedPercentageImage}
                                alt="Placed Percentage"
                                style={{ width: "250px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats-outer-wrapper" style={{ margin: "30px" }}>
                <h1 className="ps-name-heading pr-main-heading">
                    Placement Statistics (M.Tech) 2022-23
                </h1>
                <div className="images-row-2">
                    <div className="images-row-2-inner">
                        <img src={PlacementStatsMtech}  alt="Placement Stats 2023" />
                        <img src={GearsImgMtech} style={{height:"200px" ,width:"350px"}} alt="Placement Stats 2023" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Placement;
