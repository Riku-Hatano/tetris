import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
    const reqBody = {
        purpose: "pick",
        uid: 0
    }
    const [scores, setScores] = useState(null);
    const [player, setPlayer] = useState("");
    useEffect(() => {
        setPlayer(JSON.parse(sessionStorage.getItem("logUser")).uname);
        reqBody.uid = JSON.parse(sessionStorage.getItem("logUser")).uid;
        axios.create().post(`../api/lib/services/score`, reqBody).then(
            (res) => {
                res.data.message[0] !== undefined ? setScores(res.data.message) : console.log("no scores");
            },
            (rej) => {
                console.log(rej);
            }
        )
    }, [])
    return (
        <>
            <h4>welcome { player } !</h4>
            {
                scores !== null ? 
                <table border={1}>
                    <thead>
                        <tr>
                            <th>gamemode</th>
                            <th>score</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            scores.map((data: any, idx: number) => {
                               return (
                                <tr key={idx}>
                                    <td>{data.gamemode}</td>
                                    <td>{data.score}</td>
                                    <td>{data.playdate}</td>
                                </tr>
                               )
                            })
                        }
                    </tbody>
                </table>
                : 
                <h2>you haven&apos;t played yet!</h2>
            }
        </>
    )
}

export default User;