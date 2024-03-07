import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Full stack Engineer`,
    jobType: `Sports Insight LLC | present`,
    jobDuration: `Oct 2023 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Sports Insight LLC",
    jobDescription: `As a Full Stack Developer at Sports Insight LLC, I play a key role in enhancing and evolving our digital solutions in the sports domain. My responsibilities include refactoring existing codebases for improved performance and maintainability, architecting project structures for scalability, and developing new features to meet our dynamic needs. I work extensively with Next.js, React, Express, Node.js, and GraphQL, leveraging these technologies to deliver robust, efficient, and user-centric web applications.`,
    technologies: [
      "Node.js",
      "React",
      "MUI",
      "Next.js",
      "Express",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "NestJS",
      "GitLab CI/CD",
      "Docker",
    ],
  },
  {
    jobPosition: `Front End Developer`,
    jobType: `Loft mx (truehome) | Remote`,
    jobDuration: `Aug 2021 - Feb 2023`,
    timeDuraton: `Full time`,
    compnayName: "Loft México (truehome)",
    jobDescription: `At Loft, a cutting-edge proptech and fintech company, I served as a Front-End Web Developer, where I specialized in creating sophisticated, user-friendly web applications for both external customers and internal stakeholders, such as financial consultants. My primary tools were React, Next.js, and SASS, which I used to develop a range of solutions from internal applications aimed at enhancing operational efficiency to customer-facing platforms like property listings. A notable part of my role involved integrating Google Maps for a seamless property visualization experience, significantly improving user interaction and satisfaction. Working closely with cross-functional teams, I contributed to the end-to-end development process, from concept to deployment, ensuring a consistent and engaging user experience across all platforms.`,
    technologies: [
      "Node.js",
      "React",
      "Next.js",
      "Styled components",
      "Express",
      "PostgreSQL",
      "Jest",
      "Storybook",
      "Azure DevOps",
      "Docker",
      "JWT",
    ],
  },
  {
    jobPosition: `Full Stack Engineer`,
    jobType: `UMSNH TECH | Present`,
    jobDuration: `Jan 2020 - Dec 2020`,
    timeDuraton: `Part Time`,
    compnayName: "UMSNH Tech area",
    jobDescription: `In a dynamic part-time role, I collaborated with a dedicated team to design and implement a comprehensive Quality Management System (QMS) for a university department, aiming to streamline processes and enhance overall efficiency. This full-stack development project demanded a robust, secure, and user-friendly platform, which we achieved by utilizing React for the front end and Node with Express for the back end. Critical to our system was the integration of token-based authentication to ensure secure access, along with sophisticated file upload and download capabilities to manage document flow effectively. The application was self-hosted on the university's servers, requiring meticulous attention to deployment and ongoing maintenance to meet the department's specific needs. My contribution spanned the full project lifecycle, from initial planning and development to deployment and user training, ensuring the QMS met all operational requirements and standards.`,
    technologies: [
      "React",
      "Linux Server",
      "Mysql",
      "CSS",
      "Node.js",
      "Express",
    ],
  },
];

const educatonContent = [
  {
    passingYear: "2015-2020",
    degreeTitle: "Univerisy UMNSH",
    instituteName: "Faculty of Computer Engineering",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                    {
                      <div className="rb-right mt-4">
                        <h6 className="mb-4">Technologies:</h6>
                        <div className="d-flex gap-3 flex-wrap">
                          {val.technologies.map((tech, i) => (
                            <span key={i} className="rb-tec">
                              <p>{tech}</p>
                            </span>
                          ))}
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="column gap-4 col-lg-4 m-15px-tb">
              <div className="">
                <ul className="aducation-box">
                  {educatonContent.map((val, i) => (
                    <li key={i}>
                      <span>{val.passingYear}</span>
                      <h6>{val.degreeTitle} </h6>
                      <p>{val.instituteName}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <ul className="aducation-box">
                  <li>
                    <h6>Languajes</h6>
                    <p>Spanish: Native</p>
                    <p>English: 70% - Technical</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
