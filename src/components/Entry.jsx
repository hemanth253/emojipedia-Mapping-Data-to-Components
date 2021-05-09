import React from "react";

const Entry = function (props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.details.emoji}
        </span>
        <span>{props.details.name}</span>
      </dt>
      <dd>{props.details.meaning}</dd>
    </div>
  );
};

export default Entry;
