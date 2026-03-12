import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container">
      <div className="education-container">
        <h2>
          My <span>&</span>
          <br /> education
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Cybersecurity Bootcamp</h4>
                <h5>San Diego State University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed an intensive cybersecurity bootcamp at SDSU covering
              network security, ethical hacking, threat analysis, and
              security operations — leading to CompTIA Security+ certification
              in June 2025.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Bachelor's in Computer Science</h4>
                <h5>San Diego State University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Earned a Bachelor's degree in Computer Science after completing
              over 120 credits across algorithms, systems, software engineering,
              and data structures. Graduated with a GPA of 3.5.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
