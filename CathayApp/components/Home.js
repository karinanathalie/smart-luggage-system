import * as React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';

export default Home = () => {
    const navigation = useNavigation();

    const goToOtherPage = () => {
        navigation.navigate('SignIn'); 
    };

    return (
        <View style={styles.container}>
             <TouchableOpacity style={styles.container} onPress={goToOtherPage}>
            <Image
            style={styles.logo} 
            source={require('../assets/images/logo.png')} 
            resizeMode="contain"
            />
            </TouchableOpacity>
        </View>
    )
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.HomePagebackground,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '1%', // Adjust the width percentage as needed
      aspectRatio: 0.2, // Maintain aspect ratio (width:height)
    },
  });