import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import CheckLogUser from "../utils/CheckLogUser";

const Header = () => {
    const [path, setPath] = useState("");
    const router = useRouter();
    const [logUser, setLogUser] = useState(null);

    useEffect(() => { //This useEffect will run in the first rendering, which means just after web page is refreshed.
        if(sessionStorage.getItem("logUser") !== null) {
            // console.log(sessionStorage.getItem("logUser"));
            setLogUser(JSON.parse(sessionStorage.getItem("logUser"))[0].name);
            console.log(logUser);
        } else {
            console.log("no logged in user");
        }
    }, []);
    useEffect(() => { //This useEffect will run after second rendering. Only with the useEffecth which doesn't contain the pathname as the watching variable.
        if(sessionStorage.getItem("logUser") !== null) {
            // console.log(sessionStorage.getItem("logUser"));
            setLogUser(JSON.parse(sessionStorage.getItem("logUser"))[0].name);
            console.log(logUser);
        } else {
            console.log("no logged in user");
        }
    }, [router.pathname]);
    // const [path, setPath] = useState("");
    // const router = useRouter();
    // let logUser = null;

    // useEffect(() => { //This useEffect will run in the first rendering, which means just after web page is refreshed.
    //     if(sessionStorage.getItem("logUser") !== null) {
    //         // console.log(sessionStorage.getItem("logUser"));
    //         logUser = JSON.parse(sessionStorage.getItem("logUser"))[0].name;
    //         console.log(logUser);
    //     } else {
    //         console.log("no logged in user");
    //     }
    // }, []);
    // useEffect(() => { //This useEffect will run after second rendering. Only with the useEffecth which doesn't contain the pathname as the watching variable.
    //     if(sessionStorage.getItem("logUser") !== null) {
    //         // console.log(sessionStorage.getItem("logUser"));
    //         logUser = JSON.parse(sessionStorage.getItem("logUser"))[0].name;
    //         console.log(logUser);
    //     } else {
    //         console.log("no logged in user");
    //     }
    // }, [router.pathname]);
    return (
        <>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/game">game</Link></li>
                { logUser ? null : <li><Link href="/login">login</Link></li> }
                { logUser ? null : <li><Link href="/register">register</Link></li> }
                { logUser ? <li><Link href="/user">user</Link></li> : null }
                { logUser ? null : <li><Link href="/user">user for null</Link></li>}
            </ul>
        </>
    )
}

export default Header;