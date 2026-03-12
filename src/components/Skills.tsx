import "./styles/Skills.css";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "Java", "JavaScript", "SQL", "HTML", "CSS", "Bash / Shell Scripting"],
  },
  {
    category: "Backend Development",
    skills: [
      "REST API Development",
      "Backend Architecture Design",
      "Server-Side Application Logic",
      "Authentication & Authorization",
      "Database Schema Design",
      "API Integration",
      "Backend Debugging & Testing",
      "Microservice Architecture",
      "Backend Performance Optimization",
      "Kafka",
    ],
  },
  {
    category: "Frameworks & Platforms",
    skills: ["Spring Boot", "Node.js", "Flask", "Supabase", "Framer", "Vite", "Docker", "Git", "GitHub"],
  },
  {
    category: "Web Development",
    skills: [
      "Frontend UI Integration",
      "Responsive Web Design",
      "Authentication Flows",
      "Website Deployment",
      "Form Handling",
      "API Consumption",
      "Navigation Architecture",
      "User Account Systems",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "Relational Database Design",
      "SQL Querying",
      "Data Modeling",
      "Backend Data Validation",
    ],
  },
  {
    category: "Systems Programming",
    skills: [
      "Memory Management",
      "Multi-Level Paging",
      "WSClock Page Replacement",
      "OS Memory Simulation",
      "Virtual Memory Translation",
      "Page Table Design",
      "Low-Level Debugging",
      "Pointer Manipulation",
      "Systems-Level Logging",
    ],
  },
  {
    category: "Software Engineering",
    skills: [
      "Object-Oriented Programming",
      "Algorithm Implementation",
      "Debugging Large Codebases",
      "Unit Testing",
      "System Design",
      "API Design Principles",
      "Version Control Workflows",
      "Collaborative Development",
    ],
  },
  {
    category: "Cybersecurity",
    skills: [
      "Network Security Architecture",
      "Firewall Configuration",
      "VPN Implementation",
      "SIEM Monitoring",
      "Threat Detection",
      "Incident Response",
      "Threat Hunting",
      "Log Analysis",
      "Digital Forensics",
      "Packet Analysis",
      "Vulnerability Scanning",
      "Penetration Testing",
      "Reconnaissance & Enumeration",
      "Intrusion Detection",
      "Malware Analysis",
      "Cybersecurity Risk Assessment",
    ],
  },
  {
    category: "Networking",
    skills: [
      "TCP/IP Protocol Analysis",
      "DNS Traffic Inspection",
      "HTTP / HTTPS Analysis",
      "Network Segmentation",
      "Secure Network Design",
      "Packet Capture Analysis",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      "Docker Containers",
      "Environment Configuration",
      "Service Deployment",
      "Server Configuration",
      "CI/CD Exposure",
    ],
  },
  {
    category: "AI / Robotics Systems",
    skills: [
      "Backend Services for Robotics",
      "Data Pipelines for Robotics",
      "Robotics System Integration",
      "AI System Backend Support",
    ],
  },
  {
    category: "Specialized Projects",
    skills: [
      "Programming Language Design",
      "Interpreter Development",
      "Recursive Parsing",
      "Grid-Based Command Systems",
      "Algorithm Implementation",
      "Simulation Systems",
    ],
  },
  {
    category: "Tools",
    skills: ["Wireshark", "Linux CLI", "Git", "Docker", "Supabase", "Framer", "JSON", "Pandas"],
  },
  {
    category: "Certifications",
    skills: ["CompTIA Security+"],
  },
];

const Skills = () => {
  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-container">
        <h2>
          Skills <span>&</span>
          <br /> expertise
        </h2>
        <div className="skills-grid">
          {skillCategories.map((group, i) => (
            <div className="skills-card" key={i}>
              <h4>{group.category}</h4>
              <div className="skills-tags">
                {group.skills.map((skill, j) => (
                  <span className="skill-tag" key={j}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
