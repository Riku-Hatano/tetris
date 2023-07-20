import style from "../css/home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [highestScore, setHighestScore] = useState({
    highest: {
      uid: 0,
      uname: "",
      score: 0
    },
    todayHighest: {
      uid: 0,
      uname: "",
      score: 0
    },
    yourHighest: {
      score: 0
    }
  })
  useEffect(() => {
    const bodyData = {
      // logUser: sessionStorage.getItem("logUser"),
      logUser: sessionStorage.getItem("logUser") ? sessionStorage.getItem("logUser") : null,
      purpose: "pickHighest"
    }
    const reqBody = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    }

    fetch("./api/lib/services/score", reqBody)
      .then((data) => data.json())
      .then((data) => setHighestScore(data.message))
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div className={style.main}>
      <section>
        <h2>how to play Tetris</h2>
        <p>arrow up: rotate right</p>
        <p>arrow down: drop blocks</p>
        <p>arrow right/left: move blocks</p>
        <p>z: rotate left</p>
      </section>
      <article>
        <h2>highest scores</h2>
        <p>highest score in server: { highestScore.highest.score } by { highestScore.highest.uname }</p>
        <p>todays highest score: { highestScore.todayHighest.score } by { highestScore.todayHighest.uname }</p>
        <p>your highest score: { highestScore.yourHighest.score }</p>
      </article>
    </div>
  )
}
