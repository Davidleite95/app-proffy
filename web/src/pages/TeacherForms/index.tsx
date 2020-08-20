import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import './style.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

//Componente não aceite a propriedade description, com isso tem que criar a interface
function TeacherForms() {
    //INSERT
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setConst] = useState('');





    //ESTADO -- SUSBTITUI O IR NO HTML INNER HTML OU APPENDE NO JS TRADICIONAL
    //NO REACT É SÓ ACRESCENTAR DE UM ITEM A MAIS NO ARRAY POR ISSO TEM QUE FAZER O ESTADO, PRA ISSO TEM QUE IMPORTA useState

    //setSheduleItems é para fazer a desustruração pq não pode alterar a variável schudelteItems
    const [sheculeItems, setSheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        //tem que fazer novamente o array:
        setSheduleItems([
            ...sheculeItems,
            {
                week_day: 0, from: '', to: ''
            }
        ]);
    }

    function setSheduleItemValue(index: number, fiel: string, value: string) {
        
    }

    //CADASTRA
    function handleCreateClasses(e: FormEvent) {
        //não dar reload na tela
        e.preventDefault();
        console.log()
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição." />

            <main>
                <form onSubmit={handleCreateClasses}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label="Nome Completo" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                        <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>Seus aulas</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Eduação Física', label: 'Eduação Física' },
                                { value: 'Geofrafia', label: 'Geofrafia' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                            ]} />

                        <Input name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => { setConst(e.target.value) }}
                        />


                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>

                        {sheculeItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        onChange={e => setSheduleItemValue(index,'week_day', e.target.value)} 
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]} />

                                    <Input name="from" label="Dias" type="time" />
                                    <Input name="to" label="Até" type="time" />
                                </div>
                            )
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                    Importante! <br />
                    Preencha todos os dados.
                </p>
                        <button type="submit">
                            Salvar cadastro
                </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}
export default TeacherForms;