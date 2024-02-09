import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../css/components/Header.module.css";
import { List, ListItem } from "@mui/material";
import ThemeListItem from "./ListItem";

const Header = () => {
  const router = useRouter();
  const [logUser, setLogUser] = useState(null);

  useEffect(() => {
    //This useEffect will be caused by SSR. //サーバーサイドレンダリング時のためのuseEffect
    if (sessionStorage.getItem("logUser") !== null) {
      setLogUser(JSON.parse(sessionStorage.getItem("logUser")).uname);
    } else {
      setLogUser(null);
    }
  }, []);
  useEffect(() => {
    //This useEffect will be caused by change by CSR when user move to another page. //ユーザーがサイト内のページ遷移したときのためのuseEffect
    if (sessionStorage.getItem("logUser") !== null) {
      setLogUser(JSON.parse(sessionStorage.getItem("logUser")).uname);
    } else {
      setLogUser(null);
    }
  }, [router.pathname]);

  const logout = () => {
    sessionStorage.clear();
  };

  return (
    <>
      <List className={styles.list}>
        <ThemeListItem>
          <Link href="/">home</Link>
        </ThemeListItem>
        <ListItem>
          <Link href="/game">game</Link>
        </ListItem>
        {logUser ? null : (
          <ListItem>
            <Link href="/login">login</Link>
          </ListItem>
        )}
        {logUser ? null : (
          <ListItem>
            <Link href="/register">register</Link>
          </ListItem>
        )}
        {logUser ? (
          <ListItem>
            <Link href="/user">user</Link>
          </ListItem>
        ) : null}
        {logUser ? (
          <ListItem>
            <Link href="/" onClick={logout}>
              logout
            </Link>
          </ListItem>
        ) : null}
      </List>
    </>
  );
};

export default Header;
