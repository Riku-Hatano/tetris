import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { blockSetting, fieldSetting, speedSetting } from "./setting";
import FieldClass from "./classes/FieldClass";
import GameStatus from "./status";
import KeyHandler from "./utils/KeyHandler";
import CreateRect from "./utils/gettobottom/CreateRect";
import DrawBlocks from "./utils/DrawBlocks";
import DrawNextBlocks from "./utils/drawNextBlocks/DrawNextBlocks";
import styles from "../css/game.module.css";
import GameOverModal from "./utils/gameover/GameOverModal";
import DropBlock from "./utils/dropblock/DropBlock";

let canvas: any; //initialization to export
let nextBlocks: any;

const field = new FieldClass(fieldSetting.width, fieldSetting.height); //these four lines are also for initialization. If these are inside of useEffect, CreateRect is called twice and see bug.
GameStatus.field = field.returnAll();
const block = CreateRect();
GameStatus.block = block.returnAll();
DropBlock();

const Main = () => {
    const ref = useRef<HTMLCanvasElement>(null);
    const blockRef = useRef<HTMLCanvasElement>(null);
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

        const nextBlock = blockRef.current;
        const blockCtx: CanvasRenderingContext2D = nextBlock.getContext("2d");
        nextBlocks = blockCtx;
        DrawNextBlocks();
        
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown); //to avoid for KeyHandler to be implemented multiple times because of component-mounting.
          };        
    }, []);

    return (
        <>
            <section className={styles.gameContainer}>
                <canvas id="tetris" className={styles.tetris} width={fieldSetting.width} height={fieldSetting.height} ref={ref}></canvas>
                <article className={styles.scoreBoard}>
                    <div className={styles.nextBlockContainer}>
                        <h4>next blocks</h4>
                        <canvas id="nextBlock" ref={blockRef} className={styles.nextBlock}></canvas>
                    </div>
                    <div className={styles.score}>
                        <p>{score}</p>
                    </div>
                </article>
                <GameOverModal score={score}></GameOverModal>
            </section>
        </>
    )
}

export { canvas, nextBlocks }
export default Main;