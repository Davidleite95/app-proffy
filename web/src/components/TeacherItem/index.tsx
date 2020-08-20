import React from 'react'

import whatszaapIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';
import api from '../../services/api';

//interface para aceitar a propriedade para isso tem q mudar a função colocando o react.fc
export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}


//Quando as informações estã fixas é chamada de: hardCode
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    //criar conexão quando clicar no whats
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id,
        })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>Preço/Hora <strong>{teacher.cost}</strong></p>
                <a target="_black" onClick={createNewConnection} href={`https://api.whatsapp.com/send?phone=${teacher.whatsapp}&text=Ol%C3%A1%2C%20tudo%20bem%20%3F%20Quero%20estudar`}>
                    <img src={whatszaapIcon} alt="whatsapp" /> Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;