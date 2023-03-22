import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";

export default function Homepage({ userData, setUserData }) {
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;

    const handleLoadMore = () => {
        setPage(page => page + 1);
    };

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

    const renderFooter = () => {
        if (userData.length <= itemsPerPage * page) return null;

        return (
            <TouchableOpacity style={styles.loadMoreButton} onPress={handleLoadMore}>
                <Text style={styles.loadMoreButtonText}>Load More</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={userData.slice(0, page * itemsPerPage)}
                renderItem={({ item }) => <User data={item} />}
                keyExtractor={(item) => item._id}
                maxToRenderPerBatch={8}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        padding: 0,
        // paddingTop: 44,
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    homeView: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    userWrapper: {
        marginTop: 30,
        marginLeft: 15,
        fontSize: 16,
        paddingVertical: 5,
        fontFamily: "AlkatraBold",
        backgroundColor: "#8894b9",
    },
    loadMoreButton: {
        backgroundColor: "#8894b9",
        padding: 10,
        borderRadius: 5,
        alignSelf: "center",
        marginVertical: 20,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        margin: 10,
    },
    loadMoreButtonText: {
        fontWeight: "bold",
    },
});
