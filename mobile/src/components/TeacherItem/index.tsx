import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/Favoritar.png';
import unFavoriteIcon from '../../assets/images//icons/unFavoriteIcon.png';
import whatszaapIcon from '../../assets/images/Whatsapp.png';

import styles from './style';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: 'https://github.com/davidleite95.png' }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>David Leite</Text>
                    <Text style={styles.subject}>Programador</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Entusiastas das melhores tecnologias de programação avançada.
                {'\n'}{'\n'}
                Apaixonado por explodir coisas em laborátorios e por mudar a vida das pessoas atráves de
                experiências.
            </Text>

            <View style={styles.footer}> 
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/**<Image source={heartOutlineIcon}></Image>**/}
                        <Image source={unFavoriteIcon}></Image>

                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatszaapIcon}></Image>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;

