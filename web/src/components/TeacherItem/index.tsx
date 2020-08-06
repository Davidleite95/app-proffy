import React from 'react'

import whatszaapIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/20979639?s=460&u=99511dc1e69152ae1c25b8d4919af6cf19a85798&v=4" alt="David Leite" />
                <div>
                    <strong>David Leite Silva</strong>
                    <span>Programação Orientada a Objetos</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
            <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>Preço/Hora <strong>R$80,00</strong></p>
                <button>
                    <img src={whatszaapIcon} alt="whatsapp" /> Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;