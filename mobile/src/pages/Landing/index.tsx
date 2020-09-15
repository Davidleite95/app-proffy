import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Habilita o botão do sistema operacional que usuário está utilizando
import { RectButton } from 'react-native-gesture-handler';

import styles from './style';

import langinImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/giveClasses.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';

function Landing() {
    //const navigation = useNavigation();
    const { navigate } = useNavigation();
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

    function handleNavigationToGiveClassesPage() {
        //navigation.navigate();
        //name da rota
        navigate('GiveClasses');
    }

    function handleNavigationToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container} >
            <Image source={langinImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBolds}>O que deseja fazer ?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                {/** Botão Estudante
                {/**TouchableOpacity = RectButton*/}

                <RectButton onPress={handleNavigationToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                {/** Botão Professor*/}
                <RectButton
                    onPress={handleNavigationToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassesIcon} />

                    <Text style={styles.buttonText}>Dar Aula</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {''}
                <Image source={heartIcon} />

            </Text>
        </View>
    )
}
export default Landing;