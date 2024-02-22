import React from "react";
import { Link } from "react-router-dom";
import brochurePdf from "../assets/Placement_brochure.pdf";
import jnf from "../assets/JNF 2022-23 IIIT Lucknow.docx";
import anu from "../assets/team22/anu.jpg";
import Ritu from '../assets/team23/ritu.jpg'
import Ravikant from '../assets/team23/ravikant.jpg'

const footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <h2>Contact Us</h2>
              <p>
                IIIT Lucknow
                <br />
                Chak Ganjaria, C. G. City
                <br />
                Lucknow – 226002
              </p>
              <p>
                <a href="mailto:placements@iiitl.ac.in">
                  placements@iiitl.ac.in
                </a>
              </p>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/ritu-kumari-272579205/" target="_blank" rel="noopener noreferrer">
                <img src={Ritu} alt={"Ritu"} className="footer-img" />
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Ritu Kumari</p>
                <p className="footer-contact-position">Overall Placement Coordinator</p>
                <p>
                  <a href="tel:+91-8094123615">+91-8287014840</a>
                </p>
                <p>
                  <a href="mailto:placements@iiitl.ac.in">
                    placements@iiitl.ac.in
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/ravikantamal/" target="_blank" rel="noopener noreferrer">
                <img src={Ravikant} alt={"ravikant"} className="footer-img" />
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Ravikant Amal</p>
                <p className="footer-contact-position">M.tech Placement Coordinator</p>
                <p>
                  <a href="tel:+91-8094123615">+91-9630165400</a>
                </p>
                <p>
                  <a href="mailto:placements@iiitl.ac.in">
                    placements@iiitl.ac.in
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col">
              <h2>Links</h2>
              <p>
                <a
                  href="https://www.ncs.gov.in/Pages/default.aspx"
                  target="blank"
                >
                  National Career Service
                </a>
              </p>
              <p>
                <a href={brochurePdf} target="blank">
                  Brochure
                </a>
              </p>
              <p>
                <a href={jnf} target="blank">
                  Job Notification form
                </a>
              </p>
              <p>
                <Link to="/courses">Academics</Link>
              </p>
              <p>
                <Link to="/facilities">Facilities</Link>
              </p>
              <p>
                <Link to="/alumni-speaks">Alumni Speaks</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          ALL RIGHTS RESERVED © 2021. <strong>IIIT LUCKNOW.</strong> (Developed
          & Managed By -{" "}
          <a href="https://www.linkedin.com/in/blurry-x-face/" target="none">
            Rishabh
          </a>
          , {" "}
          <a
            href="https://www.linkedin.com/in/narendra-singh-139b5219a/"
            target="none"
          >
            Narendra
          </a>, {" "}
          <a
            href="https://www.linkedin.com/in/harshdeep-061661193/x"
            target="none"
          >
            Harshdeep
          </a>
          ,{"  "}
          <a href="https://www.linkedin.com/in/vinamrbajaj/" target="none">
            Vinamr
          </a>
          , {" "}
          <a href="https://www.linkedin.com/in/rktejesh/" target="none">
            Tejesh
          </a>
          , {" "}
          <a href="https://www.linkedin.com/in/dhruva-n-l-choudhary/" target="none">
            Dhruva
          </a>
          )
        </p>
      </div>
    </footer>
  );
};

export default footer;
