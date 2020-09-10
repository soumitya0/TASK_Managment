import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [name, setName] = useState("");
  const [phonNumber, setPhoneNumber] = useState("");

  console.log(name);

  const clickHandler = (e) => {
    e.preventDefault();
  };

  const demoMethod = () => {
    props.sendData(name, phonNumber);
  };

  demoMethod();

  return (
    <div className="app-background1">
      <form>
        <div className="layout2">
          <p className="textMsg"> have a nice day 😊</p>
        </div>
        <div className="layout1">
          <input
            className="input-Flied1"
            type="text"
            name="userName"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="input-Flied2"
            type="text"
            name="userMobileNo"
            placeholder="Moble No"
            value={phonNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <Link to="/users" className="login-button">
            Click Me!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
