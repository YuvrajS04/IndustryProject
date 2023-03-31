import "./BottomCard.scss";
import BottomCardSection from "../BottomCardSection/BottomCardSection";
import { useState } from "react";

export default function BottomCard({ leftContent, midContent, rightContent }) {
  return (
    <article className="bottom-card">
      <ul className="bottom-card__sections">
        <li className="bottom-card__section">
          <BottomCardSection
            heading={leftContent.heading}
            bullet={leftContent.bullet}
          />
        </li>
        <li className="bottom-card__section">
          <BottomCardSection
            heading={midContent.heading}
            bullet={midContent.bullet}
          />
        </li>
        <li className="bottom-card__section">
          <BottomCardSection
            heading={rightContent.heading}
            bullet={rightContent.bullet}
          />
        </li>
      </ul>
    </article>
  );
}
