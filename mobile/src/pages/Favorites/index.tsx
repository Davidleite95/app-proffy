import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';

function Favorite() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachears = JSON.parse(response);
                setFavorites(favoritedTeachears);
            }
        });
    }

    //useEffect é utilizado para carregar uma vez quando usuário entrar na tela
    //useFocus é para toda vez que a tela entra em foco ex: tabs
    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />

            <ScrollView
                style={styles.techerList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favorites.map((teachers: Teacher) => {
                    return (
                        <TeacherItem
                            key={teachers.id}
                            teacher={teachers}
                            favorited={true}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorite;