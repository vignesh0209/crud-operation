import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Read from "./components/Read";
import Update from "./components/Update";
import Create from "./components/Create";

function App() {
  return (
    <div className="app">
      <h1>CRUD OPERATION</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
