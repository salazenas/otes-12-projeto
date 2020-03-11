import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../helpers/Constants';
import ItemsContainer from './ItemsContainer';
import Item from './Item';

const itemsSelectionPageStyle = {
  display: 'flex',
  justifyContent: 'center'
};

function ItemsSelectionPage(props) {
  const [items, setItems] = useState(Object.values(Constants.itemsObject));

  function getItems() {
    return items.map(function(item) {
      return <Item text={item} />;
    });
  }

  return (
    <div style={itemsSelectionPageStyle}>
      <ItemsContainer>{getItems()}</ItemsContainer>
    </div>
  );
}

ItemsSelectionPage.propTypes = {};

export default ItemsSelectionPage;
