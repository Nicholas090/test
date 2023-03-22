import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import { gStyle } from "./Style/style";
import HomepageStack from './navigate';
import * as Font from 'expo-font';
import Splash from "./components/Splash";
import { getItemFromAsyncStorage, storeItemToAsyncStorage } from "./components/AsyncStorageMethods";

export default function App() {

  const [loading, setLoading] = useState(true);


  useEffect(async() => {
    // await new Promise(resolve => setTimeout(resolve, 3000));

    await Font.loadAsync({
      AlkatraBold: require('./assets/fonts/Alkatra-Bold.ttf'),
    });
    setLoading(false);
  }, []);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          await fetch('https://moduleblocks.net/testing/Users.json')
              .then((res) => res.json())
              .then(async (data) => {
                  const randomIndex = Math.floor(Math.random() * data.length);
                  const user = data[randomIndex];

                      await storeItemToAsyncStorage(
                          'test',
                          {
                              _id: user._id,
                              email: user.email,
                              name: user.name,
                              emailNotifications: user.emailNotifications,
                              appNotifications: user.appNotifications,
                              secret: user.secret,
                              userAvatar: user.userAvatar,
                          });

                  setUserData(data)
              })
              .catch((err) => console.log(err))
      }

      fetchData().catch((err) => console.log(err))
  }, []);

  if (loading){
    return (
        <View style={gStyle.main}>
          <Splash />
        </View>
    )
  } else {
    return (
        <View style={gStyle.main}>
          <HomepageStack userData={userData} setUserData={setUserData}/>
        </View>
          )
  };
}

