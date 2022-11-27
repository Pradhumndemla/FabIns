import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";              
import { login } from "../auth/auth";

export default function Login() {
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = e => setNewUser({ ...newUser, [e.target.name]: (e.target.value + "").trim() });

  const loginHandler = async (e) => {
    e.preventDefault();
    login(dispatch, newUser)
  }

  useEffect(() => {
    if (state.token) {
      navigate("/")
    }
  })

  return (
    <main>
      {/* <!-- Container START --> */}
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100 py-5">
          {/* <!-- Main content START --> */}
          <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            {/* <!-- Login START --> */}
            <div className="card card-body text-center p-4 p-sm-5">
              {/* <!-- Title --> */}
              <h1 className="mb-2">Login</h1>
              <p className="mb-0">Don't have an account?<a href="/register"> Click here to Register</a></p>
              {/* <!-- Form START --> */}
              <form className="mt-sm-4">
                {/* <!-- Email --> */}
                <div className="mb-3 input-group-lg">
                  <input type="text" className="form-control" placeholder="Enter email" name="email" value={newUser.email} onChange={(e) => handleChange(e)} />
                </div>
                {/* <!-- New password --> */}
                <div className="mb-3 position-relative">
                  {/* <!-- Password --> */}
                  <div className="input-group input-group-lg">
                    <input className="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password" name="password" value={newUser.password} onChange={(e) => handleChange(e)} />
                    <span className="input-group-text p-0">
                      <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                    </span>
                  </div>
                  {/* <!-- Pswmeter --> */}
                  {/* <div id="pswmeter" className="mt-2 password-strength-meter"><div className="password-strength-meter-score"></div></div>
                  <div className="d-flex mt-1">
                    <div id="pswmeter-message" className="rounded">Write your password...</div> */}
                  {/* <!-- Password message notification --> */}
                  {/* <div className="ms-auto">
                      <i className="fa-solid fa-circle-info ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long." data-bs-original-title="" title=""></i>
                    </div>
                  </div>*/}
                </div>
                {/* <!-- Remember me --> */}
                {/* <div className="mb-3 d-sm-flex justify-content-between">
                  <div>
                    <input type="checkbox" className="form-check-input" id="rememberCheck" />
                    <label className="form-check-label" htmlFor="rememberCheck">Remember me?</label>
                  </div>
                  <a href="forgot-password.html">Forgot password?</a>
                </div> */}
                {/* <!-- Button --> */}
                <div className="d-grid"><button type="submit" className="btn btn-lg btn-primary" id="register"
                  onClick={(e) => loginHandler(e)} >Login</button></div>
                {/* <!-- Copyright --> */}
                {/* <p className="mb-0 mt-3">©2022 <a target="_blank" href="https://www.Fabins.com/">Fabins.</a> All rights reserved</p> */}
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Login START --> */}
          </div>
        </div> {/* <!-- Row END --> */}
      </div>
      {/* <!-- Container END --> */}
    </main>
  );
}
