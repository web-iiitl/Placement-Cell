import React from "react";
import Card from "./Card";
import vks from "../assets/team22/vks.jpg";
import ritu from '../assets/team23/ritu.jpg'
import abhishek from "../assets/team22/abhishek.jpg";
import Pranjal from "../assets/team22/pranjal.jpeg";
import Anu from "../assets/team22/anu.jpg";
import Ishan from "../assets/team22/ishan.jpg";
import Ravikant from "../assets/team23/ravikant.jpg"
import Zainab from "../assets/team22/zainab.jpg"
import Orunayan from "../assets/team22/orunayan.jpg"
import Ajay from "../assets/team22/ajay.jpg"
import Aysha from "../assets/team22/aysha.jpg"
import Hriday from '../assets/team23/hriday.jpg'
import Harsh from '../assets/team23/harsh.jpg'
import Shivani from '../assets/team23/shivani.jpg'
import Avantika from '../assets/team23/avantika.jpg'
import Saniya from '../assets/team23/saniya.jpg'
import Ashutosh from '../assets/team23/ashutosh.jpg'
import Nitesh from '../assets/team23/nitesh.jpg'
import Anukool from '../assets/team23/anukool.jpg'
import Kotiswar from '../assets/team23/kotiswar.jpg'
import Aayush from "../assets/team23/aayush .jpg"
import Madhuri from "../assets/team23/madhuri.jpg"

const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={vks}
                alt="Dr. Vishal Krishna Singh"
                name="Dr. Vishal Krishna Singh"
                isTeacher={false}
                position="Training and Placements Officer"
                email="placements@iiitl.ac.in, tpo@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/vishal-krishna-singh-48670916a/"
                islinkedin={true}
                isPhone={false}
                isEmail={true}
              />
              <Card
                src={ritu}
                alt="Ritu Kumari"
                name="Ritu Kumari"
                isTeacher={false}
                position="Overall Coordinator"
                email="placements@iiitl.ac.in "
                phone="+91-8287014840"
                linkedin="https://www.linkedin.com/in/ritu-kumari-272579205/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Hriday}
                alt="Hriday Gupta"
                name="Hriday Gupta"
                isTeacher={false}
                position="Overall Coordinator"
                email="placements@iiitl.ac.in "
                phone="+91-8699578106"
                linkedin="https://www.linkedin.com/in/hridaygupta/?originalSubdomain=in"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Anukool}
                alt="Anukool"
                name="Anukool"
                isTeacher={false}
                position="Branch Coordinator(CS)"
                phone="+91-8130340950"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/anukool12/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Aayush}
                alt="Aayush Verma"
                name="Aayush Verma"
                isTeacher={false}
                position="Branch Coordinator(IT)"
                phone="+91-7905458294"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/aayush-verma2411/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Harsh}
                alt="Harsh Singh"
                name="Harsh Singh"
                isTeacher={false}
                position="Branch Coordinator(CSAI)"
                phone="+91-7985712254"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/harsh-singh-882398199/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />


            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={Ashutosh}
                alt="Ashutosh"
                name="Ashutosh"
                isTeacher={false}
                position="Member-CS"
                phone="+91-7905458294"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/ashutosh-singh-iiitl/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Nitesh}
                alt="Nitesh Singh"
                name="Nitesh Singh"
                isTeacher={false}
                position="Member-CS"
                phone="+91-8393828898"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/nitesh-singh-761b77202/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Kotiswar}
                alt="Kotiswar Kaithepalli"
                name="Kotiswar Kaithepalli"
                isTeacher={false}
                position="Member-IT"
                phone="+91-8074334426"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/kaithepalli-kotiswar/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Avantika}
                alt="Avantika Modi"
                name="Harsh Singh"
                isTeacher={false}
                position="Member-CSAI"
                phone="+91-7990381436"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/avantikamodi/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Saniya}
                alt="Saniya Maheshwari"
                name="Saniya Maheshwari"
                isTeacher={false}
                position="Member-CSAI"
                phone="+91-7060675253"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/saniya-maheshwari-a772b4201/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={Ravikant}
                alt="Ravikant Amal"
                name="Ravikant Amal"
                isTeacher={false}
                position="MTech Placement COORDINATOR"
                phone="+91-8349683499"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/ravikantamal/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Shivani}
                alt="Shivani Kushwaha"
                name="Shivani Kushwaha"
                isTeacher={false}
                position="MTech Placement Exceutive"
                phone="+91-9453422900"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/shivani-sirsat-17860a165/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Zainab}
                alt="Vivek Kumar"
                name="Vivek Kumar"
                isTeacher={false}
                position="MTech Placement Executive"
                phone="+91-8433497963"
                email="mcs21001@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/zainab-fatima118/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={Madhuri}
                alt="Madhuri Mishra"
                name="Madhuri Mishra"
                isTeacher={false}
                position="Phd Placement Coordinator"
                email="placements@iiitl.ac.in"
                phone="+91-6280058825"
                linkedin="https://www.linkedin.com/in/madhuri-mishra-79467540/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Orunayan}
                alt="Abhishek Singh"
                name="Abhishek Singh"
                isTeacher={false}
                position="MBA ( Digital Business) Placement Coordinator"
                phone="+91-9038686200"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/orunayan-bhattacharya-3a4b5518b/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Ajay}
                alt="Rashika Srivastav"
                name="Rashika Srivastav"
                isTeacher={false}
                position="MBA ( Digital Business) Placement Executive"
                phone="+91-9019593477"
                email="mdb2002@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/ajay-vikram-11545a14"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={Aysha}
                alt="Shailaja Srivastav"
                name="Shailaja Srivastav"
                isTeacher={false}
                position="MBA ( Digital Business) Placement Executive"
                phone="+91-9656482753"
                email="mdb2020@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/aysha-hannah-904213150/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
            </div>
          </div>
        </div>
      </div >
    </React.Fragment >
  );
};

export default contactUs;
