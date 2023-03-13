import React, { useState } from "react";
import data from "../../data";

import "../Homepage/Homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="container">
        {data.map((company) => {
          return (
            <div className="card">
              <div className="logo">
                <img src={company.logo} alt="" />
              </div>
              <div className="text">
                <div className="top-text">
                  <p className="main-name">{company.company}</p>
                  <p className={company.new ? "new" : ""}>
                    {company.new ? "NEW!" : ""}
                  </p>
                  <p className={company.featured ? "featured" : ""}>
                    {company.featured ? "FEATURED" : ""}
                  </p>
                </div>
                <div className="middle-text">
                  <h2>{company.position}r</h2>
                </div>
                <div className="bottom-text">
                  <div className="time-stamps">
                    <p>{company.postedAt}</p>
                  </div>
                  <div className="dot"></div>
                  <div className="length">
                    <p>{company.contract}</p>
                  </div>
                  <div className="dot"></div>
                  <div className="region">
                    <p>{company.location}</p>
                  </div>
                </div>
              </div>
              <div className="stack">
                <p>{company.role}</p>
                <p>{company.level}</p>
                {company.tools.map((tool) => {
                  return <p>{tool}</p>;
                })}
                {company.languages.map((language) => {
                  return <p>{language}</p>;
                })}
              </div>
            </div>
          );
        })}
        {/* <div className="card">
          <div className="logo">
            <img src={photosnap} alt="" />
          </div>
          <div className="text">
            <div className="top-text">
              <p className="main-name">Photosnap</p>
              <p className="new">NEW!</p>
              <p className="featured">FEATURED</p>
            </div>
            <div className="middle-text">
              <h2>Senior Frontend Developer</h2>
            </div>
            <div className="bottom-text">
              <div className="time-stamps"><p>1d ago</p></div>
              <div className="dot"></div>
              <div className="length"><p>Full Time</p></div>
              <div className="dot"></div>
              <div className="region"><p>USA only</p></div>
            </div>
          </div>
          <div className="stack">
            <p>Frontend</p>
            <p>Senior</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Homepage;
