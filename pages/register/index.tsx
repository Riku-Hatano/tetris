import { ChangeEvent, SyntheticEvent } from "react";
import { useState } from "react";
import axios from "axios";
import { axiosconfig } from "../api/lib/axios/axiosconfig";

const initialVal = {
    name: "",
    pw: "",
    regdate: "2023-04-10"
}

const Register = () => {
    const [inputVal, setInputVal] = useState(initialVal);
    const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }
    const register = (e: SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
<<<<<<< HEAD
        // console.log("this operation is disabled in production environment!")
=======
>>>>>>> 19b65f54ae7b96960d8cd9ccfb6bfe33aa906890
        axios.create().post(`${axiosconfig.baseURL}api/lib/services/register`, inputVal).then(
            (res) => {
                console.log(res.data.message);
            },
            (rej) => {
                console.log(rej);
            }
        )
    }
    const getUsers = () => {
        axios.create().get(`${axiosconfig.baseURL}api/lib/services/register`).then(
            (res) => {
                console.log(res.data.message);
            },
            (rej) => {
                console.log(rej);
            }
        )
    }
    return (
        <>
            <form onSubmit={register}>
                <input type="text" placeholder="name" name="name" value={inputVal.name} onChange={inputChange} required />
                <input type="text" placeholder="password" name="pw" value={inputVal.pw} onChange={inputChange} required />
                <input type="date" placeholder="date" name="regdate" value={inputVal.regdate} onChange={inputChange} required />
                <button type="submit">register</button>
            </form>
            <button onClick={getUsers}>check users in database</button>
        </>
    )
}

export default Register;