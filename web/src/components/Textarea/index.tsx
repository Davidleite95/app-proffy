import React, { TextareaHTMLAttributes } from 'react';
import './style.css';
//EXTEND: EXTENDER OUTRA INTERFACE QUE JÁ EXISTE

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;

    //NÃO TEM COM SABER QUE UM INPUT IRÁ RECEBER QUANTAR ATRIBUTOS;
    //COM ISSO NO REACT EXISTE UMA FORMA PARA QUE NÃO PRECISE COLOCAR DE UM POR UM;
    //InputHTMLAttributes<HTMLInputElement>

}

//pegar todas as propos ou
//desestruturação {label} pegar direto

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default Textarea;