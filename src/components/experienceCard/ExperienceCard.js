import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  console.log("TECHNOLOGIES:", cardInfo.technologies);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const GetTechChips = ({ technologies }) => {
    if (!technologies || technologies.length === 0) return null;

    return (
      <div className="tech-chips-container">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-chip">
            {tech}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{ background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>

      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>

        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>

        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>

        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>

        {/* ===== Badges technologies ===== */}
        <GetTechChips technologies={cardInfo.technologies} />

        {/* ===== Liens GitHub / footerLink ===== */}
        {cardInfo.footerLink && cardInfo.footerLink.length > 0 && (
          <div className="footer-links">
            {cardInfo.footerLink.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}