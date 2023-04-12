import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CheckLogUser = (): null | string => {
    const router = useRouter();
    const [path, setPath] = useState("");
    let logUser = null;

    useEffect(() => { //This useEffect will run in the first rendering, which means just after web page is refreshed.
        if(sessionStorage.getItem("logUser") !== null) {
            // console.log(sessionStorage.getItem("logUser"));
            logUser = sessionStorage.getItem("logUser");
        } else {
            // console.log("no logged in user");
        }
    }, []);
    useEffect(() => { //This useEffect will run after second rendering. Only with the useEffecth which doesn't contain the pathname as the watching variable.
        if(sessionStorage.getItem("logUser") !== null) {
            // console.log(sessionStorage.getItem("logUser"));
            logUser = sessionStorage.getItem("logUser");
        } else {
            // console.log("no logged in user");
        }
    }, [router.pathname]);

    return logUser;
}

export default CheckLogUser;