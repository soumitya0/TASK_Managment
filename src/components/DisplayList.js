import React, { useState, useReducer, Fragment } from "react";
import ListItems from "./Listitme";
import { Redirect } from "react-router-dom";

function DisplayList(props) {
  const [categoryInput, setCategory] = useState(""); // input

  console.log(categoryInput);

  const [categoryList, setCategoryList] = useState([]); // empty array for list

  const [changeButton, setChangeButton] = useState({
    buttonName: "ADD",
    value: false,
  });

  // add button
  const addButton = () => {
    console.log("button click");

    if (changeButton.value === false) {
      categoryList.push({ description: categoryInput });
      setCategoryList(categoryList);
      setCategory("");
    } else {
      categoryList[changeButton.index].description = categoryInput;
      setCategoryList(categoryList);
      setCategory("");
    }
  };

  // delete button
  const deleteButton = (index) => {
    const newList = categoryList.filter((item, i) => {
      return i != index;
    });
    // updating state
    setCategoryList(newList);
  };

  // edit button
  const editButton = (index) => {
    console.log(categoryList[index]);
    setChangeButton({
      buttonName: "EDIT",
      value: true,
      index: index,
    });
    setCategory(categoryList[index].description);
  };

  return (
    <Fragment>
      {props.name != "" ? (
        <div className="app-background">
          <p className="heading-text">{props.name}</p>
          <p className="phonNO">{props.phonNumber}</p>
          <div className="task-container">
            <div>
              <input
                className="text-input"
                name="addTask"
                value={categoryInput}
                onChange={(e) => setCategory(e.target.value)}
              />
              <button className="add-button" onClick={addButton}>
                {changeButton.buttonName}
              </button>
            </div>

            {categoryList.length ? (
              categoryList.map((listObject, index) => {
                return (
                  <ListItems
                    index={index}
                    itemData={listObject}
                    delete={deleteButton}
                    edit={editButton}
                  />
                );
              })
            ) : (
              <p>No Task Added ! 📌 </p>
            )}
          </div>

          <p className="footer-text"> souMitya</p>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )}
    </Fragment>
  );
}

export default DisplayList;
