import React from "react";
import PropTypes from "prop-types";

const itemsContentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  height: "auto"
};

const cardTitleStyle = {
  display: "flex",
  alignSelf: "center",
  marginTop: 18
};

function ItemsContainer({ style, title, children }) {
  function getCardTitle() {
    return title ? (
      <div className="card-title" style={cardTitleStyle}>
        {title}
      </div>
    ) : null;
  }
  return (
    <div className="card col-10" style={style}>
      {getCardTitle()}
      <div className="card-body row" style={itemsContentStyle}>
        {children}
      </div>
    </div>
  );
}

ItemsContainer.propTypes = {};

export default ItemsContainer;
