import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionBtn}>
                <View style={styles.btn}>
                    <AntDesign name="addfolder" size={24} color="black" />
                </View>
                <Text style={styles.btnLabel}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
                <View style={styles.btn}>
                    <AntDesign name="tagso" size={24} color="black" />
                </View>
                <Text style={styles.btnLabel}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
                <View style={styles.btn}>
                    <AntDesign name="creditcard" size={24} color="black" />
                </View>
                <Text style={styles.btnLabel}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
                <View style={styles.btn}>
                    <AntDesign name="barcode" size={24} color="black" />
                </View>
                <Text style={styles.btnLabel}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
                <View style={styles.btn}>
                    <AntDesign name="setting" size={24} color="black" />
                </View>
                <Text style={styles.btnLabel}>Conta</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingStart: 14,
        paddingEnd: 14,
    },
    actionBtn: {
        alignItems: 'center',
        marginRight: 32,
    },
    btn: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLabel: {
        marginTop: 4,
        textAlign: "center",
        fontWeight: "bold",
    },
});