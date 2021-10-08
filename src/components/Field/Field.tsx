import React from 'react';
import {Square} from "../Square/Square";
import './Field.css';

export const Field: React.FC<PropsType> = ({board, click}) => {
    return <div className={"field"}>
        {
            board.map((value, i) => <Square value={value} key={i} index={i} click={click}/>)
        }
    </div>
};


type PropsType = {
    board: Array<string>,
    click: (index: number) => void
}
