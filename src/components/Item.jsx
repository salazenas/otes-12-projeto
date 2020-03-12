import React from 'react';
import PropTypes from 'prop-types';

const cardWrapperStyle = {
  margin: '6px 0'
};

function Item({ text }) {
  return (
    <div className="card" style={cardWrapperStyle}>
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

Item.propTypes = {};

export default Item;
