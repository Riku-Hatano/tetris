import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";
import { axiosconfig } from "../api/lib/axios/axiosconfig";
import { useRouter } from "next/router";

const initialVal = {
    uname: "",
    pw: ""
}

const Login = () => {
    const [inputVal, setInputVal] = useState(initialVal);
    const router = useRouter();
    const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }
    const login = (e: SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        axios.create().post(`${axiosconfig.baseURL}api/lib/services/login`, inputVal).then(
            (res) => {
                if(res.data.message !== null) {
                    router.push("/user");
                    sessionStorage.setItem("logUser", JSON.stringify(res.data.message));
                } else {
                    alert("no user");
                }
            },
            (rej) => {
                console.log(rej);
            }
        )
    }
    return (
        <>
            <form onSubmit={login}>
                <input type="text" placeholder="name" name="uname" value={inputVal.uname} onChange={inputChange} required/>
                <input type="password" placeholder="password" name="pw" value={inputVal.pw} onChange={inputChange} required/>
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default Login;