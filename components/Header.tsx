import Link from "next/link";
import CheckLogUser from "../utils/CheckLogUser";

const Header = () => {
    const logUser = CheckLogUser();
    return (
        <>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/game">game</Link></li>
                { logUser ? null : <li><Link href="/login">login</Link></li> }
                { logUser ? null : <li><Link href="/register">register</Link></li> }
                { logUser ? <li><Link href="/user">user</Link></li> : null }
            </ul>
        </>
    )
}

export default Header;