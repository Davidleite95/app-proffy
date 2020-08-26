import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import giveClassesBgImage from '../../assets/images/icons/giveClassesBgImage.png'

import styles from './style';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    //costante para navegação
    const { goBack } = useNavigation();

    function handleNavigationBack() {
        //navigation.navigate();

        //name da rota
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={giveClassesBgImage}
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa ser se cadastrar como professor na plataforma web.
            </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigationBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Tudo bem
                </Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;