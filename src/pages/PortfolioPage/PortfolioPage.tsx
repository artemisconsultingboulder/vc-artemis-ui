/** @module PortfolioPage */

import { designConstants, PortfolioCard } from "../../common/index";
import {
  DATA_ANALYTICS_PROJECT_TYPE,
  MACHINE_LEARNING_PROJECT_TYPE,
  FINANCIAL_PLANNING_PROJECT_TYPE,
  STRATEGY_CONSULTING_PROJECT_TYPE
} from "../../common/PortfolioCard/constants/portfolioCardConstants";
import type { PortfolioCardProps } from "../../common/PortfolioCard/types/portfolioCardTypes";

// Import logos
import fbLogo from "../../common/assets/images/fb_logo.png";
import vfLogo from "../../common/assets/images/vf_logo.png";
import smashLogo from "../../common/assets/images/smashburger_logo.png";
import syndeoLogo from "../../common/assets/images/syndeo_logo.png";

import "./PortfolioPage.css";

const { FINANCE_AND_BANKING_COMPANY_TYPE, FOOD_AND_BEVERAGE_COMPANY_TYPE, PROFESSIONAL_DEVELOPMENT_COMPANY_TYPE } =
  designConstants;

const SAMPLE_PROJECTS: PortfolioCardProps[] = [
  {
    image: fbLogo,
    companyType: FINANCE_AND_BANKING_COMPANY_TYPE,
    projectName: "Exploring Treasury Funds Transfer Pricing Models",
    companyName: "FirstBank",
    description:
      "Designed and implemented a modern FTP framework that centralizes interest-rate risk, rewards deposit-gatherers fairly, and guides disciplined loan/deposit pricing across billions of dollars in assets.",
    metrics: {
      duration: "3 months",
      teamSize: 4,
      impact: "Enterprise-scale impact"
    },
    projectTypes: [
      FINANCIAL_PLANNING_PROJECT_TYPE,
      STRATEGY_CONSULTING_PROJECT_TYPE
    ],
    keyResults: [
      "Built FTP curve driven by Senior Unsecured Debt (SUD) reflecting market liquidity signals",
      "Enabled clear, transparent FTP rates that align incentives between lending & deposit teams",
      "Centralized interest rate risk to treasury for hedging while freeing business units to focus on growth"
    ]
  },
  {
    image: vfLogo,
    companyType: FOOD_AND_BEVERAGE_COMPANY_TYPE,
    projectName: "Farm and Egg Supply Production - Forecast & Analysis Model",
    companyName: "Vital Farms",
    description:
      "Built a scalable ML-powered egg supply forecasting model achieving 75% accuracy, enabling data-driven decision making and strengthening financial planning for the leading pasture-raised egg producer.",
    metrics: {
      duration: "3 months",
      teamSize: 7,
      impact: "75% forecast accuracy"
    },
    projectTypes: [MACHINE_LEARNING_PROJECT_TYPE, DATA_ANALYTICS_PROJECT_TYPE],
    keyResults: [
      "Developed scalable forecasting model with R² ≈ 75% accuracy",
      "Enabled data-driven decision making by surfacing critical production drivers",
      "Strengthened financial planning and risk mitigation for farm-level operations",
      "Delivered tools to evaluate ROI of new farms and assess supplier performance"
    ]
  },
  {
    image: smashLogo,
    companyType: FOOD_AND_BEVERAGE_COMPANY_TYPE,
    projectName: "Elasticity Analysis for Menu Pricing Optimization",
    companyName: "SmashBurger",
    description:
      "Analyzed menu item elasticity and pricing strategy across 200+ locations using 3 years of transaction data, delivering data-driven pricing insights and menu optimization recommendations.",
    metrics: {
      duration: "4 months",
      teamSize: 4,
      impact: "Data-driven pricing strategy"
    },
    projectTypes: [
      DATA_ANALYTICS_PROJECT_TYPE,
      STRATEGY_CONSULTING_PROJECT_TYPE
    ],
    keyResults: [
      "Processed 3 years of transaction data across 200+ locations to derive item-level elasticities",
      "Pinpointed inelastic menu items for selective price increases while protecting volume",
      "Optimized promotional strategy by aligning discounts with high-elasticity items",
      "Delivered insights on combination meals to boost average order value"
    ]
  },
  {
    image: syndeoLogo,
    companyType: PROFESSIONAL_DEVELOPMENT_COMPANY_TYPE,
    projectName: "Next Client Partnership",
    companyName: "The Syndeo Institute",
    description:
      "Ready to tackle your next business challenge? Artemis Consulting Club is actively seeking new client partnerships to deliver innovative solutions and measurable results.",
    metrics: {
      duration: "3-4 months",
      teamSize: 5,
      impact: "To be determined"
    },
    projectTypes: [
      STRATEGY_CONSULTING_PROJECT_TYPE,
      DATA_ANALYTICS_PROJECT_TYPE
    ],
    keyResults: [
      "Tailored approach based on your specific business needs",
      "Dedicated team of CU Boulder's top consulting talent",
      "End-to-end project delivery with measurable outcomes",
      "Fresh perspectives and innovative problem-solving"
    ]
  }
];

const PortfolioPage = (): React.JSX.Element => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Real projects. Measurable impact. Proven results across diverse industries.</p>
      </div>
      <div className="portfolio-grid">
        {SAMPLE_PROJECTS.map(
          (project, index): React.JSX.Element => (
            <PortfolioCard key={`${project.companyName}-${index}`} {...project} />
          )
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
