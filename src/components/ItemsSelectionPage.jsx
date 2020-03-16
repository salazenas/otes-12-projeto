import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  itemsObject,
  ITEMS_LIST_CATEGORY,
  USER_ITEMS_CATEGORY
} from "../helpers/Constants";
import ItemsList from "./ItemsList";
import UserItems from "./UserItems";
import { itemExistsInArray, filterItemFromArray } from "../helpers/ItemsHelper";

const itemsSelectionPageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100%",
  flexDirection: "column"
};

function ItemsSelectionPage(props) {
  function getInitialItems() {
    return {
      [USER_ITEMS_CATEGORY]: [],
      [ITEMS_LIST_CATEGORY]: Object.values(itemsObject)
    };
  }

  const [items, setItems] = useState(getInitialItems());

  function onDragStart(e, itemName) {
    e.dataTransfer.setData("itemName", itemName);
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDrop(e, category) {
    const itemName = e.dataTransfer.getData("itemName"),
      {
        [USER_ITEMS_CATEGORY]: userItems,
        [ITEMS_LIST_CATEGORY]: itemsList
      } = items;

    if (
      category === USER_ITEMS_CATEGORY &&
      !itemExistsInArray(userItems, itemName)
    ) {
      userItems.push(itemName);
    } else if (
      category === ITEMS_LIST_CATEGORY &&
      !itemExistsInArray(itemsList, itemName)
    ) {
      itemsList.push(itemName);
    }

    setItems({
      ...items,
      [USER_ITEMS_CATEGORY]:
        category === USER_ITEMS_CATEGORY
          ? userItems
          : filterItemFromArray(userItems, itemName),
      [ITEMS_LIST_CATEGORY]:
        category === ITEMS_LIST_CATEGORY
          ? itemsList
          : filterItemFromArray(itemsList, itemName)
    });
  }

  function getUserItems() {
    return (
      <UserItems
        items={items[USER_ITEMS_CATEGORY]}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
      />
    );
  }

  function getItemsList() {
    return items[ITEMS_LIST_CATEGORY].length ? (
      <ItemsList
        items={items[ITEMS_LIST_CATEGORY]}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
      />
    ) : (
      <button className="btn btn-success">Avançar</button>
    );
  }

  return (
    <div className="col-md-12" style={itemsSelectionPageStyle}>
      {getUserItems()}
      {getItemsList()}
    </div>
  );
}

ItemsSelectionPage.propTypes = {};

export default ItemsSelectionPage;
