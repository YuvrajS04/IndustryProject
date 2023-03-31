import "./Button.scss";
import { useState } from "react";

function Button({ subject, clickHandler }) {
  const [activeBtn, setActiveBtn] = useState(false);

  function btnClickHandler() {
    setActiveBtn((activeBtn) => !activeBtn);
  }

  const btnClassName = activeBtn ? "button button--active" : "button";

  return (
    <>
      <li className="button__item">
        <button
          className={btnClassName}
          onClick={() => {
            btnClickHandler();
            clickHandler();
          }}
        >
          {subject}
        </button>
      </li>
    </>
  );
}

export default Button;
