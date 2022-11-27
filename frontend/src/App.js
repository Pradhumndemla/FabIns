import "./styles.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    // const head = document.head.innerHTML

    // console.log(head);
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
