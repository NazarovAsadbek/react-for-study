import React from "react";
import {useAlert} from "./UseContextOptimal";

export default function UseContextMainComponent() {
  const {toggle} = useAlert()
  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button onClick={toggle} className="btn btn-success">Показать alert</button>
    </>
  )
}
