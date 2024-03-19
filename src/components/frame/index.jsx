import Block from "../block"
import style from "./index.module.scss"
import types from "../../types"
import { useEffect, useState } from "react"

/*
W_SIZE = 100
width will be 100 block
W_SIZE must be able to be divided by NUM_TYPES
*/
const W_SIZE = 100
const H_SIZE = 50
const NUM_TYPES = 2

// TODO: add configration to see how to divide the frame between blocks

const Frame = () => {
    const [blocks, setBlocks] = useState([]);

    const generateBlocks = () => {
        let tempBlocks = [];
        const sizeWidth = W_SIZE / NUM_TYPES;

        for (let row = 0; row < H_SIZE; row++) {
            let rowBlocks = [];
            for (let cells = 0; cells < W_SIZE; cells++) {
                rowBlocks.push(<Block type={cells < sizeWidth ? types.day : types.night} />)
            }
            tempBlocks.push(rowBlocks)
        }
        return tempBlocks;
    }

    useEffect(() => {
        setBlocks(generateBlocks())
    }, [])

    return <div className={style.frameWrapper} >
        {
            blocks.length > 0 && blocks.map(col => <div style={{display: "flex"}}>{col}</div>)
        }
    </div>
}

export default Frame