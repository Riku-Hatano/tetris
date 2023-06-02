import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";
import { axiosconfig } from "../api/lib/axios/axiosconfig";
import { useRouter } from "next/router";

const initialVal = {
    name: "",
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
        // axios.create().post(`${axiosconfig.baseURL}api/lib/services/login`, inputVal).then(
        //     (res) => {
        //         if(res.data.message !== null) {
        //             router.push("/user");
        //             sessionStorage.setItem("logUser", JSON.stringify(res.data.message));
        //         } else {
        //             alert("no user");
        //         }
        //     },
        //     (rej) => {
        //         console.log(rej);
        //     }
        // )agits
        axios.create().get("https://tetris-riku-hatano.vercel.app/api/lib/pseudoServices/pseudoLogin", ).then(
        // axios.create().post("https://tetris-riku-hatano.vercel.app/api/lib/pseudoServices/pseudoLogin", inputVal).then(
            (res) => {
                if(res.data.message != null) {
                    console.log(res.data.message);
                    console.log(res.data);
                    console.log(res);
                    router.push("/user");
                    sessionStorage.setItem("logUser", JSON.stringify(res.data.message));
                } else {
                    alert("no user");
                }
            }
        )
        setInputVal(initialVal);
    }
    return (
        <>
            <form onSubmit={login}>
                <input type="text" placeholder="name" name="name" value={inputVal.name} onChange={inputChange} required/>
                <input type="password" placeholder="password" name="pw" value={inputVal.pw} onChange={inputChange} required/>
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default Login;