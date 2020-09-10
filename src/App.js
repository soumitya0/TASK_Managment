import React, { useState } from "react";
import "./App.css";
import ListItems from "./components/Listitme";
import DisplayList from "./components/DisplayList";
import Register from "./components/Register";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  const [namePass, setNamePass] = useState("");
  const [phonNumberPass, setPhonNumberPass] = useState("");

  const getData = (name, phonNumber) => {
    console.log("i am running getData");
    console.log(name);
    console.log(phonNumber);

    setNamePass(name);
    setPhonNumberPass(phonNumber);
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Register sendData={getData} />
          </Route>

          <Route exact path="/users">
            <DisplayList name={namePass} phonNumber={phonNumberPass} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
