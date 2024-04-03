import { useState } from 'react';
import './Eightball.css';

//props.answers is an array of objects containing msg , color

const Eightball = ({ answers }) => {
    const idx = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[idx];
    const [eightBallMsg, setEightballMsg] = useState("Think of Question");
    const [eightBallColor, setEightballColor] = useState("black")
    const updateEightball = () => {
        setEightballMsg(msg);
        setEightballColor(color);
    }
    const eightballReset = () => {
        setEightballMsg("Think of Question");
        setEightballColor("black");
    }

    return (
        <div className="Eightball-container">
            <div className="Eightball" style={{ backgroundColor: eightBallColor }} onClick={updateEightball}>
                {eightBallMsg}
            </div>
            <div className="Eightball-reset"><button className="Eightball-reset-button" onClick={eightballReset}>Reset</button></div>
        </div>
    )
}

export default Eightball