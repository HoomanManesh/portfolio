import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "TacticLang",
    category: "Programming Language / Interpreter",
    tools: "Python",
    image: "/images/construction.png",
    link: "https://github.com/hoomanmanesh/TacticLang",
  },
  {
    name: "Shipping App",
    category: "Full-Stack Web Application",
    tools: "C++, Node.js, JavaScript, HTML, CSS",
    image: "/images/shipping.png",
    link: "https://github.com/hoomanmanesh/shipping-app",
  },
  {
    name: "Aztec BBall Scouting",
    category: "Sports Analytics",
    tools: "Python, Data Analysis",
    image: "/images/construction.png",
    link: "https://github.com/hoomanmanesh/AztecBBallScouting",
  },
  {
    name: "Valentine",
    category: "Creative Web",
    tools: "JavaScript, HTML, CSS",
    image: "/images/construction.png",
    link: "https://github.com/hoomanmanesh/Valentine",
  },
  {
    name: "Background Remover",
    category: "Full-Stack Web Application",
    tools: "Python, Flask, JavaScript, HTML, CSS",
    image: "/images/HM_BGR.png",
    link: "https://github.com/hoomanmanesh/background-remover",
  },
  {
    name: "JPMorgan Forage",
    category: "Software Engineering",
    tools: "Java",
    image: "/images/construction.png",
    link: "https://github.com/hoomanmanesh/forage-midas",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
