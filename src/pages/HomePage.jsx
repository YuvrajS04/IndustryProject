import Header from "../components/Header/Header";
import TopCards from "../components/TopCards/TopCards";
import Button from "../components/Button/Button";
import BottomCard from "../components/BottomCard/BottomCard";
import { useState } from "react";
import "./HomePage.scss";

export default function HomePage() {
  const [activeBtn, setActiveBtn] = useState(false);
  const talentsDataLeft = {
    heading: "Talent Acquisition",
    bullet:
      "According to Deloitte, organizations that prioritize talent acquisition can reduce their cost per hire by up to 50%.",
  };
  const talentsDataMid = {
    heading: "Retain Top Talent",
    bullet:
      "According to Oxford Economics losing a top performer can lead to team productivity loss of up to 6 months.",
  };
  const talentsDataRight = {
    heading: "Employee Experience",
    bullet:
      "According to LinkedIn, 94% of employees say that they would stay with a company longer if it invested in their  career development.",
  };

  const strategyDataLeft = {
    heading: "Manage Through Recession",
    bullet:
      "Companies that manage well during a recession can cut labor costs by 15% and maintain productivity, according to a Hackett Group Study.",
  };
  const strategyDataMid = {
    heading: "Understand Hybrid Impact",
    bullet:
      "A FlexJobs study reports 65% of remote workers feel more productive due to fewer distractions and interruptions.",
  };
  const strategyDataRight = {
    heading: "Propel Internal Mobility",
    bullet:
      "According to Deloitte, 79% of companies consider internal mobility important for talent develoment.",
  };

  const revenueDataLeft = {
    heading: "Drive Revenue Outcomes",
    bullet:
      "Using data to drive revenue growth can make companies up to 6 times more profitable, according to McKinsey & Company.",
  };
  const revenueDataMid = {
    heading: "Unlock People Leaders",
    bullet:
      "Strong leadership programs make companies 1.5 times more likely tobe top performers financially, per Harvard Business Review.",
  };
  const revenueDataRight = {
    heading: "Deliver on DEI",
    bullet:
      "Companies in the top quartile for gender diversity on their executive teams are 25% more likely to have above-average profitability.",
  };

  const [leftContent, setLeftContent] = useState(talentsDataLeft);
  const [midContent, setMidContent] = useState(talentsDataMid);
  const [rightContent, setRightContent] = useState(talentsDataRight);

  function setTalentContent() {
    setLeftContent(talentsDataLeft);
    setMidContent(talentsDataMid);
    setRightContent(talentsDataRight);
  }

  function setStrategyContent() {
    setLeftContent(strategyDataLeft);
    setMidContent(strategyDataMid);
    setRightContent(strategyDataRight);
  }

  function setRevenueContent() {
    setLeftContent(revenueDataLeft);
    setMidContent(revenueDataMid);
    setRightContent(revenueDataRight);
  }

  return (
    <>
      <div className="display">
        <Header />
        <TopCards />
      </div>
      <div>
        <h3 className="bottom-section__heading">Key Solutions</h3>
        <ul className="buttons">
          <Button subject="Talents" clickHandler={setTalentContent} />
          <Button subject="Strategy" clickHandler={setStrategyContent} />
          <Button subject="Revenue" clickHandler={setRevenueContent} />
        </ul>

        <BottomCard
          leftContent={leftContent}
          midContent={midContent}
          rightContent={rightContent}
        />
      </div>
    </>
  );
}
