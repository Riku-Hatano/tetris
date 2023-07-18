import { ChangeEvent, SyntheticEvent } from "react";
import { useState } from "react";
import axios from "axios";

const initialVal = {
    uname: "",
    pw: "",
    regdate: ""
}

const regDate = new Date();
initialVal.regdate = `${regDate.getFullYear()}-${String(regDate.getMonth() + 1).padStart(2, "0")}-${String(regDate.getDate() + 1).padStart(2, "0")}`;

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
        setInputVal(initialVal);

        axios.create().post(`../api/lib/services/register`, inputVal).then(
            (res) => {
                alert("thanks for registering! enjoy tetris!!");
            },
            (rej) => {
                console.log(rej);
            }
        )
    }
    return (
        <>
            <form onSubmit={register}>
                <input type="text" placeholder="name" name="uname" value={inputVal.uname} onChange={inputChange} required />
                <input type="text" placeholder="password" name="pw" value={inputVal.pw} onChange={inputChange} required />
                {/* <input type="date" placeholder="date" name="regdate" value={inputVal.regdate} onChange={inputChange} required /> */}
                <button type="submit">register</button>
            </form>
        </>
    )
}

export default Register;