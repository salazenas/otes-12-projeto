import React from "react";
import PropTypes from "prop-types";
import { omit } from "lodash";

import SelectableItems from "./SelectableItems";
import { getItems } from "../helpers/ItemsHelper";
import { ITEMS_LIST_CATEGORY } from "../helpers/Constants";

const ItemsContainerStyle = {
  display: "flex",
  marginBottom: 18
};

function ItemsContainer(props) {
  const newProps = omit(props, "items");

  return (
    <SelectableItems
      {...newProps}
      style={ItemsContainerStyle}
      category={ITEMS_LIST_CATEGORY}
    >
      {getItems(props)}
    </SelectableItems>
  );
}

ItemsContainer.propTypes = {};

export default ItemsContainer;
