import "./BottomCardSection.scss";

export default function BottomCardSection({ heading, bullet }) {
  return (
    <>
      <h3 className="bottom-card__heading">{heading}</h3>
      <ul className="bottom-card__list">
        <li className="bottom-card__list-item">{bullet}</li>
      </ul>
      <div className="bottom-card__button">View Analytics</div>
    </>
  );
}
