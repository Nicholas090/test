import React, { useState, useEffect} from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import {getItemFromAsyncStorage} from "./AsyncStorageMethods";

export default function Account({ userData, setUserData }) {


    const [userInfo, setUserInfo] = useState({});

    useEffect(  () => {
        const fetchData = async () => {
            const newItem = await getItemFromAsyncStorage('test')
            if(newItem) {
                console.log('new item')
                setUserInfo(newItem)
            }
        }

        fetchData().catch((err) => console.log(err))
    }, [userData]);


    const User = ({ data }) => (
        <View style={styles.userWrapper}>
            <Text  style={styles.text}>{data.name}</Text>
            <Text  style={styles.text}>email: {data.email}</Text>
            <Text  style={styles.text}>name: {data.name}</Text>
            <Text  style={styles.text}>emailNotifications: {data.emailNotifications}</Text>
            <Text  style={styles.text}>appNotifications: {data.appNotifications}</Text>
            <Text  style={styles.text}>userAvatar: {data.userAvatar}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <View style={styles.imageView}>
                    {Object.keys(userInfo).length ? <User data={userInfo}/> : <Text>Account</Text>}
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
    imageView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
