import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import ShareFeed from "./components/ShareFeed";
import Timeline from "./components/Timeline";
import Stories from "./components/Stories";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../redux/Auth/authSlice";
// import { logout } from "../auth/auth";


export default function Dashboard() {
  const { token } = useSelector((state) => state.auth)
  // let token = localStorage.getItem("token")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = ()=>{
    localStorage.removeItem("token");
    dispatch(logout());
  }
  useEffect(()=>{
    if (token === false ){
      return navigate("/login");
    }
  })
  return (
    <>
    on Dashboard <br />
    <button onClick={logoutHandler}>logout</button>
    <br />
    {/* isLogged = {isLogged? "True" : "false"} */}
    <br />
    localstorage token = {token ? token : "false"}
    </>
  );
}
