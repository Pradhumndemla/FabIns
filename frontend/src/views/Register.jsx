import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
// import { register } from "../auth/auth";

export default function Register() {
  const [newUser, setNewUser] = useState({ email: "", name: "", password: "" });
  const state = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => setNewUser({ ...newUser, [e.target.name]: (e.target.value + "").trim() });

  const confirmPasswordHandler = e => {
    let abc = document.querySelector("#registerError").classList
    const registerButton = document.querySelector("#register").classList
    if (newUser.password !== e.target.value) {
      abc.remove("d-none")
      registerButton.add("disabled")
    }
    else {
      abc.add("d-none")
      registerButton.remove("disabled")
    }
  }

  const registerHandler = async (e) => {
    e.preventDefault();
    // register(dispatch, newUser);
  }

  useEffect(() => {
    if (state.token) {
      navigate("/")
    }
  })
  return (
    <>
      <main>
        {/* <!-- Container START --> */}
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100 py-5">
            {/* <!-- Main content START --> */}
            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              {/* <!-- Register START --> */}
              <div className="card card-body rounded-3 p-4 p-sm-5">
                <div className="text-center">
                  {/* <!-- Title --> */}
                  <h1 className="mb-2">Register</h1>
                  <span className="d-block">Already have an account? <a href="/login"> Login here</a></span>
                </div>
                {/* <!-- Form START --> */}
                <form className="mt-4">
                  {/* <!-- Email --> */}
                  <div className="mb-3 input-group-lg">
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={newUser.email} onChange={(e) => handleChange(e)} />
                    {/* <small>We'll never share your email with anyone else.</small> */}
                  </div>
                  {/* <!-- Full name --> */}
                  <div className="mb-3 input-group-lg">
                    <input type="name" className="form-control" placeholder="Enter name" name="name" value={newUser.name} onChange={(e) => handleChange(e)} />
                    {/* <small>We'll never share your name with anyone else.</small> */}
                  </div>
                  {/* <!-- New password --> */}
                  <div className="mb-3 position-relative">
                    {/* <!-- Input group --> */}
                    <div className="input-group input-group-lg">
                      <input className="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password" name="password" value={newUser.password} onChange={(e) => handleChange(e)} />
                      <span className="input-group-text p-0">
                        <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                      </span>
                    </div>
                    {/* <!-- Pswmeter --> */}
                    <div id="pswmeter" className="mt-2 password-strength-meter"><div className="password-strength-meter-score"></div></div>
                    <div className="d-flex mt-1">
                      <div id="pswmeter-message" className="rounded">Write your password...</div>
                      {/* <!-- Password message notification --> */}
                      <div className="ms-auto">
                        <i className="fa-solid fa-circle-info ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long." data-bs-original-title="" title=""></i>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Confirm password --> */}
                  <div className="mb-3 input-group-lg">
                    <input className="form-control" type="password" placeholder="Confirm password" onChange={(e) => confirmPasswordHandler(e)} />
                  </div>
                  <div id="registerError" className="d-flex mt-1 text-danger m-2 d-none">
                    <div className="">Password didn't match </div>
                  </div>
                  {/* <!-- Keep me Registered --> */}
                  <div className="mb-3 text-start">
                    <input type="checkbox" className="form-check-input" id="keepsingnedCheck" />
                    <label className="form-check-label" htmlFor="keepsingnedCheck"> Keep me Registered</label>
                  </div>
                  {/* <!-- Button --> */}
                  <div className="d-grid">
                    <button type="submit"
                      className="btn btn-lg btn-primary disabled"
                      id="register"
                      onClick={(e) => registerHandler(e)}
                    >
                      Register
                    </button>
                  </div>
                  {/* <!-- Copyright --> */}
                  <p className="mb-0 mt-3 text-center">©2022 <a target="_blank" href="/">Fabins.</a> All rights reserved</p>
                </form>
                {/* <!-- Form END --> */}
              </div>
              {/* <!-- Register END --> */}
            </div>
          </div> {/* <!-- Row END --> */}
        </div>
        {/* <!-- Container END --> */}
      </main>
    </>
  );
}
