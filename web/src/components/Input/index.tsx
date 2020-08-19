import React, { InputHTMLAttributes } from 'react';
import './style.css';
//EXTEND: EXTENDER OUTRA INTERFACE QUE JÁ EXISTE

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;

    //NÃO TEM COM SABER QUE UM INPUT IRÁ RECEBER QUANTAR ATRIBUTOS;
    //COM ISSO NO REACT EXISTE UMA FORMA PARA QUE NÃO PRECISE COLOCAR DE UM POR UM;
    //InputHTMLAttributes<HTMLInputElement>

}

//pegar todas as propos ou
//desestruturação {label} pegar direto

const Input: React.FC<InputProps> = ({label, name, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;