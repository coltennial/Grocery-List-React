import React from "react";

const Grocery = ({ name, id, complete, groceryClick }) => (
  <div id="list-wrap">
    <li
      onClick={() => groceryClick(id)}
      style={ complete ? {...styles.grocery, ...styles.complete} : styles.grocery} >
    { name }
    </li>
  </div>
)

const styles = {
  grocery: { cursor: "pointer"},
  complete: {color: "#555", textDecoration: "line-through"}
};

export default Grocery;