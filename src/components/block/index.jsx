import { useState } from "react"
import style from "./index.module.scss"

const Block = ({type, size = 10}) => {
    return <div style={{
        width: "10px",
        height: "10px",
        backgroundColor: type.color
    }}>
    </div>
}

export default Block