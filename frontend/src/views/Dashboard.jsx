import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ShareFeed from "./components/ShareFeed";
import Timeline from "./components/Timeline";
// import Stories from "./components/Stories";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Dashboard() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate();

  useEffect(()=>{
    if (token === false ){
      return navigate("/login");
    }
  })
  return (
    <>
      <Header />
      <main>
        {/* <!--  Container START --> */}
        <div className="container">
          <div className="row g-4">
            <Sidebar />
            {/* <!--  Main content START --> */}
            <div className="col-md-8 col-lg-6 vstack gap-4">
              {/* <Stories /> */}
              <ShareFeed />
              <Timeline />
            </div>
            {/* <!--  Main content END --> */}
            {/* <RightSidebar /> */}
          </div>
          {/* <!--  Row END --> */}
        </div>
        {/* <!--  Container END --> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
