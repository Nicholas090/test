import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

export default function Splash()   {
        return (
            <View style={{flex: 1}}>
                <LottieView
                    source={require('../assets/animations/ReactAnimation.json')}
                    autoPlay
                    loop={true}
                />
            </View>
        )

}
