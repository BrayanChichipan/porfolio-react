import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "JavaScript (TypeScript)",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "React JS (Next JS)",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "Node (Express)",
    numberPercent: "75",
    startCount: "0",
    endCount: "75",
  },
  {
    name: "HTML5",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "CSS (SASS)",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "Git",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "Architectural Patterns",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
  {
    name: "SQL Databases",
    numberPercent: "75",
    startCount: "0",
    endCount: "75",
  },
  {
    name: "Docker (Docker Compose)",
    numberPercent: "75",
    startCount: "0",
    endCount: "75",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
