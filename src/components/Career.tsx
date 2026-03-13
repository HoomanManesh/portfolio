import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern</h4>
                <h5>WCO</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed backend functionality for internal platforms and web
              services, focusing on API development, authentication, and
              database management. Built server-side logic supporting user
              interactions, automated workflows, and ensured secure handling of
              customer and operational data. Assisted with debugging, deployment
              processes, and improving overall system reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AB-ME</h4>
                <h5>JPMorgan Chase, Coronado</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Helping clients with their daily transactions and account
              maintenance while utilizing available tools to maximize branch
              performance. Managing the lobby to greet clients and direct their
              needs to the One Chase Team.
            </p>
          </div>
          <div className="career-info-box career-info-box--featured">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Software Engineer</h4>
                <h5>NXT Robotics</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on backend systems supporting robotics and AI-driven
              applications — building and maintaining APIs, databases, and
              server-side logic. Collaborating with engineers to design scalable
              services and integrate data pipelines for reliable communication
              between robotics systems and dashboards. Contributing to
              debugging, testing, and improving system performance for internal
              tools and robotics workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
