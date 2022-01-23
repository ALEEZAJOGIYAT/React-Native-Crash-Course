import React, { useState } from "react";
import { List } from "./components/list";
import { Array } from "./components/flatList";

//for scrolling use
//scrolling component
//for refreshing use (refreshcontrol) component

export default function App() {
  return (
    <div>
      {/* <List /> */}
      <Array />
    </div>
  );
}
