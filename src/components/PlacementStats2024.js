import React from "react";
import GearsImg from "../assets/images/stats24/btech_settings.png";
import PlacementStatsDomainWise from "./PlacemetsStatsDomainWise2021";
import PlacementStats from "../assets/images/stats24/btech_packages.png";
import HighestPackage from "../assets/images/stats24/highest_package.jpg";
import PlacementStatsMtech from "../assets/images/stats24/mtech_packages.png";
import GearsImgMtech from "../assets/images/stats24/mtech_settings.png";

const Placement = props => {
    return (
        <div>
            <div className="stats-outer-wrapper" style={{ marginBottom: "30px" }}>
                <h1 className="ps-name-heading pr-main-heading">
                    Placement Statistics (B.Tech) 2023-24
                </h1>
                <div className="images-row-2">
                    <div className="images-row-2-inner">
                        <img src={PlacementStats} alt="Placement Stats 2024"  />
                        <img src={GearsImg} alt="Placement Stats 2024" />
                    </div>
                </div>
                <div className="images-row-2" style={{ marginTop: "30px" }}>
                    <div className="images-row-2-inner" style={{ marginBottom: 100 }}>
                        <PlacementStatsDomainWise />
                        <div style={{ alignSelf: "center" }}>
                            <img
                                src={HighestPackage}
                                alt="Highest Package"
                            />
                        </div>
                    </div>
                </div>
            </div>
             <div className="stats-outer-wrapper" style={{ margin: "30px" }}>
                <h1 className="ps-name-heading pr-main-heading">
                    Placement Statistics (M.Tech) 2023-24
                </h1>
                <div className="images-row-2">
                    <div className="images-row-2-inner">
                        <img src={PlacementStatsMtech}  alt="Placement Stats 2024" />
                        <img src={GearsImgMtech} style={{height:"200px" ,width:"200px"}} alt="Placement Stats 2024" />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Placement;
