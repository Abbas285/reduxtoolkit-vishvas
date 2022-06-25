import React from "react";
import CakeView from "./feature/cake/CakeView";
import UserView from "./feature/user/UserView";
import IcreamView from "./feature/icecream/IcreamView";

// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CakeView />
      <UserView />
      <IcreamView />
    </div>
  );
}
