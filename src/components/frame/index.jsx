import Block from "../block"
import Ball from "../balls"
import style from "./index.module.scss"
import types from "../../types"
import { useEffect, useState } from "react"

const W_SIZE = 50
const H_SIZE = 50

// TODO: add configration to see how to divide the frame between blocks

const Frame = () => {
    const [blocks, setBlocks] = useState([]);
    const [balls, setBalls] = useState([]);

    const generateBlocks = () => {
        let tempBlocks = [];

        for (let row = 0; row < H_SIZE; row++) {
            let rowBlocks = [];
            for (let cells = 0; cells < W_SIZE * 2; cells++) {
                rowBlocks.push(<Block type={cells < W_SIZE ? types.day : types.night} />)
            }
            tempBlocks.push(rowBlocks)
        }
        return tempBlocks;
    }

    const generateBalls = () => {
        return [1, 2]
        
    }

    useEffect(() => {
        setBlocks(generateBlocks())
        setBalls(generateBalls())
    }, [])

    return <div className={style.frameWrapper} >
        {
            blocks.length > 0 && blocks.map(col => <div style={{display: "flex"}}>{col}</div>)
        }
        <div className={style.ballsPlayGround}>
            {
                balls.length > 0 && balls.map(ball => <Ball />)
            }
        </div>
    </div>
}

export default Frame