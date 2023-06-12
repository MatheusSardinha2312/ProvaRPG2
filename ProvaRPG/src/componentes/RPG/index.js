import React from 'react';
import { Button, Image, View, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function RPG(props){
    const navigation = useNavigation();

    const handleTrocar = () => {
  };

    return (
        <View style={styles.cardContainer}>
            <View style={styles.imgV}>
                <Image source={{uri: props.card.imagem}} style={styles.img}/>

            </View>
            <View style={styles.dataV}>
                <Text style={styles.nome}>Nome: {props.card.nome}</Text>
                <Text style={styles.desc}>Descrição: {props.card.desc}</Text>
                <Button title="Trocar" onPress={handleTrocar} style={styles.butt}/>

            </View>
        </View>
    );
}