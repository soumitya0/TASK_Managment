import React from "react";

function ListItems(props) {
  return (
    <div className="list-item row jc-space-between  ">
      <span> {props.itemData.description}</span>

      <img
        className="delete-icon"
        src={require("../Asset/delete.png")}
        onClick={() => {
          props.delete(props.index);
        }}
      />

      <img
        className="edit-icon"
        src={require("../Asset/pen.png")}
        onClick={() => {
          props.edit(props.index);
        }}
      />
    </div>
  );
}

export default ListItems;
