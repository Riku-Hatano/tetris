import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
    const router = useRouter();
    const [logUser, setLogUser] = useState(null);

    useEffect(() => { //This useEffect will be caused by SSR. //サーバーサイドレンダリング時のためのuseEffect
        if(sessionStorage.getItem("logUser") !== null) {
            setLogUser(JSON.parse(sessionStorage.getItem("logUser"))[0].name);
        } else {
            setLogUser(null);
        }
    }, []);
    useEffect(() => { //This useEffect will be caused by change by CSR when user move to another page. //ユーザーがサイト内のページ遷移したときのためのuseEffect
        if(sessionStorage.getItem("logUser") !== null) {
            setLogUser(JSON.parse(sessionStorage.getItem("logUser"))[0].name);
        } else {
            setLogUser(null);
        }
    }, [router.pathname]);
   
    const logout = () => {
        sessionStorage.clear();
    }
    return (
        <>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/game">game</Link></li>
                { logUser ? null : <li><Link href="/login">login</Link></li> }
                { logUser ? null : <li><Link href="/register">register</Link></li> }
                { logUser ? <li><Link href="/user">user</Link></li> : null }
                { logUser ? <li><Link href="/" onClick={logout}>logout</Link></li> : null }
            </ul>
        </>
    )
}

export default Header;