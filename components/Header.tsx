import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../css/components/Header.module.css";
import { List } from "@mui/material";
import ThemeListItem from "./ListItem";
import ThemeLink from "./atom/ThemeLink";
import React from "react";

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
          <ThemeLink href="/">home</ThemeLink>
        </ThemeListItem>
        <ThemeListItem>
          <ThemeLink href="/game">game</ThemeLink>
        </ThemeListItem>
        {logUser ? (
          <React.Fragment>
            <ThemeListItem>
              <ThemeLink href="/user">user</ThemeLink>
            </ThemeListItem>
            <ThemeListItem>
              <ThemeLink href="/" onClick={logout}>
                logout
              </ThemeLink>
            </ThemeListItem>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ThemeListItem>
              <ThemeLink href="/login">login</ThemeLink>
            </ThemeListItem>
            <ThemeListItem>
              <ThemeLink href="/register">register</ThemeLink>
            </ThemeListItem>
          </React.Fragment>
        )}
      </List>
    </>
  );
};

export default Header;
