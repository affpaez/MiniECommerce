import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootDrawerParamList } from "../App";

type Props = NativeStackScreenProps<RootDrawerParamList, "About">;

export default function About({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>E-Commerce App</Text>

            <View style={styles.card}>
                <Text style={styles.description}>
                    Esta aplicación es un proyecto práctico para la materia de 
                    Aplicaciones Moviles.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#f8fafc", 
        alignItems: "center", 
        padding: 24,
        justifyContent: 'center'
    },
    title: { 
        fontSize: 28, 
        fontWeight: "bold", 
        color: "#0f766e",
        marginBottom: 20
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        width: '100%',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    description: {
        fontSize: 16,
        color: "#475569",
        textAlign: "center",
        lineHeight: 24,
    }
});