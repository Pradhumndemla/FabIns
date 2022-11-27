import axios from "axios";
import * as redux from "../redux/Auth/authSlice";

export const login = async (dispatch, newUser) => {
    try {
        // process.env.REACT_APP_BACKEND
        // "http://localhost:4000"
        let res = await axios.post(process.env.REACT_APP_BACKEND +"/auth/login", { email: newUser.email, password: newUser.password })
        // if (res.status !== 200) {
        //     console.log("error " + res.status);
        //     localStorage.removeItem("token")
        //     // error
        //     return res
        // }
        // let { token } = res.data
        // localStorage.setItem("token", token)
        // dispatch(redux.login(token))
        console.log(res);
        dispatch(redux.login("ashdajhs"))
    } catch (error) {
        console.log(error);
        return
    }
}

export const register = async (dispatch, newUser) => {
    try {
        // let res = await axios.post(process.env.REACT_APP_BACKEND + "/auth/register", { ...newUser })
        // if (res.status !== 200) {
        //     console.log("error " + res.status);
        //     localStorage.removeItem("token")
        //     // error
        //     return res
        // }
        // let { token } = res.data
        // localStorage.setItem("token", token)
        // dispatch(redux.register(token))
    } catch (error) {
        console.log(error);
        return
    }
}
export const logout = () => {
    try {

    } catch (error) {

    }
}