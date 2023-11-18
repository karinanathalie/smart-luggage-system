import * as React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import signInData from '../assets/data/signInData';
import otherSignInOptionsData from '../assets/data/otherSignInOptionsData';
import { useNavigation } from '@react-navigation/native';

export default SignIn = () => {
    const navigation = useNavigation();

    const goToOtherPage = () => {
        navigation.navigate('HomePage'); 
    };

    return (
        <View style={styles.container}>
            {/* Titles */}
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.desc}>Enter your credentials to continue</Text>

            {/* Sign In Data */}
            {signInData.map((data) => (
                <View key={data.id}>
                    <Text style={styles.dataTitle}>{data.title}</Text>
                    <View style={styles.dataButton}>
                        <Text style={styles.dataDescription}>{data.description}</Text>
                    </View>
                </View>
            ))}

            {/* Sign In Button */}
            <TouchableOpacity style={styles.button} onPress={goToOtherPage}>
                <Text style={styles.signInTitle}>Sign In</Text>
            </TouchableOpacity>

        <Text style={styles.signInOptionsTitle}>Other sign in options</Text>
        <View style={styles.horizontalContainer}>
        {otherSignInOptionsData.map((data) => (
            <TouchableOpacity key={data.id}>
            <Image source={data.image} style={styles.image} />
            </TouchableOpacity>
            ))}
        </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
    },
    horizontalContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    title : {
        fontSize: 29,
        fontFamily: 'Poppins-Bold',
        alignItems: 'center',
        marginLeft: 20,
        paddingHorizontal: 10,
        color: colors.primary,
      },
    desc : {
        fontSize: 13,
        fontFamily: 'Inter-regular',
        marginLeft: 30,
        marginBottom: 20,
    },
    dataButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: 'colors.greyDark', 
        borderRadius: 10,
        marginLeft: 30,
        width: 340,
        marginBottom: 20,
      },
    image: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    dataTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginLeft: 30,
        marginBottom : 5,
    },
    dataDescription: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: colors.greyDark,
        marginLeft: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: colors.primary,
        width: 120,
        height: 47,
      },
    signInTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: colors.background,
    },
    signInOptionsTitle: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        alignSelf: 'center',
        color: colors.greyDark,
        marginBottom: 10,
    },
  });