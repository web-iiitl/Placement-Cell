import React from "react";
import { Link } from "react-router-dom";
import brochurePdf from "../assets/Placement_brochure_2024-25.pdf";
import jnf from "../assets/JNF 2024-25 IIIT Lucknow.docx";
import maniraj from "../assets/team24/mani_raj.jpg";
import anwaransari from "../assets/team24/anwar_ansari.jpg";

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
              <a
                href="https://www.linkedin.com/in/mani-raj-gupta-11b329224/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={maniraj}
                  alt={"Mani Raj Gupta"}
                  className="footer-img"
                />
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Mani Raj Gupta</p>
                <p className="footer-contact-position">
                  Overall Placement Coordinator
                </p>
                <p>
                  <a href="tel:+91-8083007276">+91-8083007276</a>
                </p>
                <p>
                  <a href="mailto:placements@iiitl.ac.in">
                    placements@iiitl.ac.in
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col-parent">
              <a
                href="https://www.linkedin.com/in/anwaransari14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={anwaransari}
                  alt={"Anwar Ansari"}
                  className="footer-img"
                />
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Anwar Ansari</p>
                <p className="footer-contact-position">
                  M.tech Placement Coordinator
                </p>
                <p>
                  <a href="tel:+91-7776038299">+91-7776038299</a>
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
          ,{" "}
          <a
            href="https://www.linkedin.com/in/narendra-singh-139b5219a/"
            target="none"
          >
            Narendra
          </a>
          ,{" "}
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
          ,{" "}
          <a href="https://www.linkedin.com/in/rktejesh/" target="none">
            Tejesh
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/dhruva-n-l-choudhary/"
            target="none"
          >
            Dhruva
          </a>
          )
        </p>
      </div>
    </footer>
  );
};

export default footer;
