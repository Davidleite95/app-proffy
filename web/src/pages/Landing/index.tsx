import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import givelCassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './style.css';

function Landing() {
    //CRIAÇÃO DO ESTADO
    //TEM QUE COMEÇAR COM 0 DEVIDO A INDA PARA BUSCAR NA API DEMORAR UM POUCO, POR ISSO VAMOS INICIAR COM 0
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            //console.log(response);
            //const total = response.data.total;

            //desustruturação
            const { total } = response.data;
            setTotalConnections(total);

        })
    }, [])
    //só prencho o array caso queira que chame sempre a api;

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de Estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" /> Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={givelCassesIcon} alt="Dar aulas" /> Dar aular
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;