import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';

import api from '../../services/api';

import styles from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

function TeacherList() {
    const [isfilterVisible, setIsFilterVisible] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [teachers, setTeachers] = useState([]);

    const [subject, setSuject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    /**Indo do banco local em busca de uma chave chamada favorites => dados em textos sempre*/
    useEffect(() => {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachears = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachears.map((teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds);
            }
        });
    }, []);

    function handleToglleFilterVisible() {
        setIsFilterVisible(!isfilterVisible);
    }

    async function handleFilterSubmit() {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })
        /*Fechar o filtrar quando for pesquisar */
        setIsFilterVisible(false);
        setTeachers(response.data);
    }
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"
                readerRigtht={(
                    <BorderlessButton onPress={handleToglleFilterVisible}>
                        <Feather name="filter" size={20} color="#fff"></Feather>
                    </BorderlessButton>
                )}>
                {isfilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSuject(text)}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="c1bccc"
                                />
                            </View>
                        </View>
                        <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView style={styles.teacherList}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>

                {teachers.map((teacher: Teacher) => {
                    return (<TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />)
                })}

            </ScrollView>
        </View>
    )
}


export default TeacherList;