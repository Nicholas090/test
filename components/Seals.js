import React from "react";
import {View, Text, StyleSheet, ScrollView, Button, Alert} from "react-native";


export default function Seals() {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <View style={styles.mainTabView}>
                    <Text style={styles.text}>Some seals migrate hundreds of miles every year in search of food.</Text>
                    <Text style={styles.text}>Seals can dive to great depths underwater and stay there for up to two hours.</Text>
                    <Text style={styles.text}>Seals use clicking or trilling noises to communicate.</Text>
                    <Text style={styles.text}> Seals eat fish, birds, and shellfish.</Text>
                </View>
                <View >
                    <Button  title={'ok?'} st  onPress={() => Alert.alert('ok!')}/>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 0,
        paddingTop: 44,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTabView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    text: {
        fontSize: 16,
        paddingVertical: 5,
        fontFamily: 'AlkatraBold'
    },
});
