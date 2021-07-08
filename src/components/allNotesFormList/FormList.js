import React, { useState } from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route, 
  Redirect } from "react-router-dom";

const FormList = () => {
  const [name, setName] = useState("");
	const [doctor, setDoctor] = useState("");
	const [date, setDate] = useState("");
	const [lament, setLament] = useState("");

  return (
    <div className="App">
      <div>form</div>
    </div>
  );
}

export default FormList;