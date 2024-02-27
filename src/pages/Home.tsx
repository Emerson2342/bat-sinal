import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './HomeStyles';


export function Home() {

    const [ativado, setAtivado] = useState(true);
    const [dados, setDados] = useState({
        nome: '',
        endereco: '',
        telefone: '',
        profissao: "",
    });

    const active = () => {
        setAtivado(!ativado)
    }

    const enviar = () => {
        setDados((prevDados) => ({
            ...prevDados,
            nome: '',
            endereco: '',
            telefone: '',
            profissao: '',
        }));
        active();
    }

    return (
        <View >
            <View
                style={ativado ? styles.containerHome : styles.containerHidden}
            >
                <View
                    style={styles.imageHome}
                ><Image
                        source={require("../images/batSinal.jpg")} /></View>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={active}
                >
                    <Text style={styles.textButton}>
                        Active Bat Signal
                    </Text>
                </TouchableOpacity>
            </View>

            <View
                style={ativado ? styles.containerHidden : styles.containerForms}
            >
                <Image
                    source={require("../images/batIcon.jpg")}
                />
                <Text
                    style={{ textAlign: 'center' }}>Nome</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Digite seu nome'
                    onChangeText={(nome) => setDados({ ...dados, nome })}
                    value={dados.nome}
                />

                <Text
                    style={{ textAlign: 'center' }}>Telefone</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Digite seu telefone'
                    onChangeText={(telefone) => setDados({ ...dados, telefone })}
                    value={dados.telefone}
                />
                <Text
                    style={{ textAlign: 'center' }}>Endereço</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Digite seu endereço'
                    onChangeText={(endereco) => setDados({ ...dados, endereco })}
                    value={dados.endereco}
                />
                <TouchableOpacity
                    onPress={() => enviar()}
                    style={styles.buttonContainer}>
                    <Text
                        style={styles.textButton}>Enviar</Text>
                </TouchableOpacity>



            </View>
        </View>
    );
}