import './Questions.css'
import datas from './data.js'
import React, { useState } from "react";

const Questions = () => {
    const [activeId, setActiveId] = useState(0);
    const asks = datas.map((data, index) => (
        <div key={data.id} className="question-card flex-row">
            <div className={`plus-minus-toggle ${parseInt(activeId) === data.id ? '' : 'collapsed'}`} onClick={() => activeId === data.id ? setActiveId(0) : setActiveId(data.id)} ></div>
            <div>
                <div className="question-ask">{data.name}</div>
                <div className={`question-answer  ${parseInt(activeId) === data.id ? 'active' : ''}`} id="question-answer">{data.about}</div>
            </div>
        </div>)
    )
    return (
        <div className="section-11 grey">
            <div className="container flex-column">
                <div className="section-title section-title-1">Frequently</div>
                <div className="section-title section-title-2">Asked Questions</div>
                <div className="section-11-container flex-column">
                    {asks}
                </div>
            </div>
        </div>
    )
}

export default Questions