import React from "react";
import PropTypes from "prop-types";

const cardWrapperStyle = {
  margin: "6px",
  padding: "2px",
  height: "fit-content",
  width: "fit-content"
};

const cardBodyStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5em"
};

const cardTextStyle = {
  fontSize: 10
};

function Item({ position, text, onDragStart }) {
  return (
    <div
      className="card col-md-2 draggable"
      style={cardWrapperStyle}
      draggable
      onDragStart={e => onDragStart(e, text)}
    >
      <div className="card-body" style={cardBodyStyle}>
        <p className="card-text" style={cardTextStyle}>
          {position !== null ? `${position + 1}. ${text}` : text}
        </p>
      </div>
    </div>
  );
}

Item.propTypes = {};

export default Item;
