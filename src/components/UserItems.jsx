import React from "react";
import PropTypes from "prop-types";
import { omit } from "lodash";

import SelectableItems from "./SelectableItems";
import { getItems } from "../helpers/ItemsHelper";

import { USER_ITEMS_TITLE, USER_ITEMS_CATEGORY } from "../helpers/Constants";

const ItemsContainerStyle = {
  display: "flex",
  marginBottom: 18,
  height: 300
};

function ItemsContainer(props) {
  const newProps = omit(props, "items");

  return (
    <SelectableItems
      {...newProps}
      style={ItemsContainerStyle}
      title={USER_ITEMS_TITLE}
      category={USER_ITEMS_CATEGORY}
    >
      {getItems(props, true)}
    </SelectableItems>
  );
}

ItemsContainer.propTypes = {};

export default ItemsContainer;
