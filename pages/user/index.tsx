import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { axiosconfig } from "../api/lib/axios/axiosconfig";

const User = () => {
    const reqBody = {
        purpose: "pick",
        uid: 0
    }
    const [scores, setScores] = useState(null);
    useEffect(() => {
        reqBody.uid = JSON.parse(sessionStorage.getItem("logUser"))[0].uid
        axios.create().post(`${axiosconfig.baseURL}api/lib/services/score`, reqBody).then(
            (res) => {
                setScores(res.data.message);
            },
            (rej) => {
                console.log(rej);
            }
        )
    }, [])
    return (
        <>
            <h4>user</h4>
            {
                scores !== null ? 
                <table border="1">
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









                : null
            }
        </>
    )
}

export default User;