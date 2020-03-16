import React from "react";
import { omit } from "lodash";

import Item from "../components/Item";

export function getItems(props, showPosition) {
  const newProps = omit(props, "items");

  return props.items.map((item, index) => {
    return (
      <Item
        {...newProps}
        key={index}
        position={showPosition ? index : null}
        text={item}
      />
    );
  });
}

export function itemExistsInArray(array, item) {
  return array.some(arrayItem => arrayItem === item);
}

export function filterItemFromArray(array, item) {
  return array.filter(arrayItem => arrayItem !== item);
}
