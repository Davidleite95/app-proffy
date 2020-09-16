import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/Favoritar.png';
import unFavoriteIcon from '../../assets/images//icons/unFavoriteIcon.png';
import whatszaapIcon from '../../assets/images/Whatsapp.png';

import styles from './style';

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
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    /** SEMPRE QUE UMA INFORMAÇÃO FOR MUDAR ELA TEM QUE ESTÁ NO ESTADO DA APLICAÇÃO */
    const [isFavorite, setIsFavirited] = useState(favorited);

    function handleLinkToWhatsapp() {
        /** DP LINK - UMA APLICAÇÃO ABRI A OUTRA, modulo: Linking */
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    /**se tiver faviritado */
    async function handleToggleFavorite() {
        if (isFavorite) {
            //remover dos favoritos

        } else {
            //adicionar aos favoritos
            const favorites = await AsyncStorage.getItem('favorites');

            let favoritesArray = [];

            if (favorites) {
                favoritesArray = JSON.parse(favorites);
            }

            favoritesArray.push(teacher);

            setIsFavirited(true);
            await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>{teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                    onPress={handleToggleFavorite}
                    style={[
                        styles.favoriteButton, 
                        isFavorite ? styles.favorited : {},
                        ]}>
                        {isFavorite
                            ? <Image source={unFavoriteIcon}></Image>
                            : <Image source={heartOutlineIcon}></Image>
                        }
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatszaapIcon}></Image>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;

