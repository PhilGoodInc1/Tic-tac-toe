import React from 'react';
import './Square.css';

export const Square: React.FC<PropsType> = ({value, index, click}) => {
    return (
        <button className={"square"} onClick={() => click(index)}>{value}</button>
    );
};

type PropsType = {
    click: ((index: number) => void),
    value: string
    index: number
};