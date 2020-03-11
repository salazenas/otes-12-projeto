import React from 'react';
import PropTypes from 'prop-types';

function ItemsContainer(props) {
  return (
    <div className="card row justify-content-md-center">
      <div className={'card-header'}>
        Organize a sua lista de importancia individual e clique em Avançar.
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

ItemsContainer.propTypes = {};

export default ItemsContainer;
