import { ChangeEvent, SyntheticEvent } from "react";
import { useState } from "react";
import axios from "axios";

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
        axios.create().post("http://localhost:3000/api/register", inputVal).then(
            (res) => {
                console.log(res.data.message);
            },
            (rej) => {
                console.log(rej);
            }
        )
        setInputVal(initialVal);
    }
    const getUsers = () => {
        axios.create().get("http://localhost:3000/api/register").then(
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
            <button onClick={getUsers}>check database user</button>
        </>
    )
}

export default Register;