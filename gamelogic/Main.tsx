import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { blockSetting, fieldSetting, speedSetting } from "./setting";
import FieldClass from "./classes/FieldClass";
import GameStatus from "./status";
import KeyHandler from "./utils/KeyHandler";
import CreateRect from "./utils/gettobottom/CreateRect";
import DrawBlocks from "./utils/DrawBlocks";

let canvas: any; //initialization to export

const field = new FieldClass(fieldSetting.width, fieldSetting.height); //these four lines are also for initialization. If these are inside of useEffect, CreateRect is called twice and see bug.
GameStatus.field = field.returnAll();
const block = CreateRect();
GameStatus.block = block.returnAll();

const Main = () => {
    const ref = useRef<HTMLCanvasElement>(null);
    const field = new FieldClass(fieldSetting.width, fieldSetting.height);

    const [score, setScore] = useState(0); //this setScore will go through KeyHandler.ts -> Move.ts -> GetToBottom.ts -> CheckRow.ts and then finaly used.
    const handleKeyDown = (e: any) => {
        KeyHandler(e, setScore)
    }
    useEffect(() => {
        const tetris = ref.current;
        const ctx: CanvasRenderingContext2D = tetris.getContext("2d");
        canvas = ctx; //to export the refference of canvas created at this file.
        ctx.fillRect(block.positionX, block.positionY, block.size, block.size); //create Tetris field.
        DrawBlocks(); //Draw first block depending on GameStatus.field.firld
        
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown); //to avoid for KeyHandler to be implemented multiple times because of component-mounting.
          };        
    }, []);

    return (
        <>
            <section style={{display: "flex"}}>
                <canvas id="tetris" width={fieldSetting.width} height={fieldSetting.height} ref={ref} style={{backgroundColor: "black"}}></canvas>
                <article style={{backgroundColor: "gainsboro", width: "100px", height: "200px", display: "flex", flexDirection: "column"}}>
                    <div style={{height: "50px"}}></div>
                    <div style={{height: "50px", display: "flex"}}>
                        <h3 style={{width: "100%", textAlign: "center"}}>score</h3>
                        <p>{score}</p>
                    </div>
                </article>
            </section>
        </>
    )
}

export const ScoreChanger = () => {

}

export { canvas }
export default Main;