import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Front End Development",
    descriptions: `On the front-end side, I specialize in creating dynamic, responsive websites using React, Next.js, and SASS. My approach combines modern JavaScript frameworks with advanced CSS techniques to craft seamless user experiences, prioritizing accessibility, and performance. I'm dedicated to building interactive, visually compelling web applications that stand out in the digital landscape.`,
  },
  {
    icon: "icon-desktop",
    title: "Back End Development",
    descriptions: `In the realm of back-end development, I harness the power of Node.js, Express, and NestJS to build robust and scalable server-side applications. My expertise lies in creating efficient, secure APIs, managing databases, and integrating third-party services, ensuring a solid foundation for web applications that require high performance and reliability.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
