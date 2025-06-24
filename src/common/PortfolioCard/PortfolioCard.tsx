/** @module PortfolioCard */

import { FaCalendarAlt, FaUsers, FaChartLine } from "react-icons/fa";
import type { PortfolioCardProps } from "./types/portfolioCardTypes";

import Tag from "../Tag/Tag";

import "./PortfolioCard.css";

const PortfolioCard = ({
  image,
  companyType,
  projectName,
  companyName,
  description,
  metrics,
  projectTypes,
  keyResults
}: PortfolioCardProps): React.JSX.Element => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={projectName} className="portfolio-card-image" />
      <div className="portfolio-card-content">
        <Tag variant="filled" color="blue">
          {companyType}
        </Tag>
        <div className="portfolio-card-title">{projectName}</div>
        <div className="portfolio-card-company">{companyName}</div>
        <div className="portfolio-card-description">{description}</div>

        <div className="portfolio-card-metrics">
          <div className="portfolio-card-metric">
            <FaCalendarAlt className="portfolio-card-metric-icon" />
            <span className="portfolio-card-metric-text">
              {metrics.duration}
            </span>
          </div>
          <div className="portfolio-card-metric">
            <FaUsers className="portfolio-card-metric-icon" />
            <span className="portfolio-card-metric-text">
              {metrics.teamSize} members
            </span>
          </div>
          <div className="portfolio-card-metric">
            <FaChartLine className="portfolio-card-metric-icon" />
            <span className="portfolio-card-metric-text">{metrics.impact}</span>
          </div>
        </div>

        <div className="portfolio-card-tags">
          {projectTypes.map(
            (type): React.JSX.Element => (
              <Tag key={type} variant="outlined" color="red">
                {type}
              </Tag>
            )
          )}
        </div>

        <div>Key Results</div>
        <ul className="portfolio-card-key-results">
          {keyResults.map(
            (result, index): React.JSX.Element => (
              <li key={index} className="portfolio-card-key-result">
                {result}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioCard;
