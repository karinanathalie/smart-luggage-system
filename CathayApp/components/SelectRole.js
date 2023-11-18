import * as React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import selectRoleData from '../assets/data/selectRoleData';
import { useNavigation } from '@react-navigation/native';

export default SelectRole = () => {
    const navigation = useNavigation();

    const goToOtherPage = () => {
        navigation.navigate('SignIn'); 
    };

    return (
        <View style={styles.container}>
            {/* Titles */}
            <Text style={styles.title}>Please select your role</Text>
            <Text style={styles.desc}>Choose your role to access our tailored services.</Text>

            {/* Buttons of each role */}
            {selectRoleData.map((role) => (
                <TouchableOpacity key={role.id} style={styles.roleButton} onPress={goToOtherPage}>
                    <Image source={role.image} style={styles.image} />
                    <View style={styles.container}>
                        <Text style={styles.roleTitle}>{role.title}</Text>
                        <Text style={styles.roleDescription}>{role.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
        
    )
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
    //   alignItems: 'center',
    },
    title : {
        fontSize: 29,
        fontFamily: 'Poppins-Bold',
        alignItems: 'center',
        marginLeft: 20,
        paddingHorizontal: 10,
      },
    desc : {
        fontSize: 13,
        fontFamily: 'Inter-regular',
        marginLeft: 30,
        marginBottom: 30,
    },
    roleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: colors.border,
        marginLeft: 30,
        borderRadius: 10,
        marginBottom: 12,
        width : 340,
        backgroundColor: colors.primary,
      },
    image: {
        width: 70,
        height: 60,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    roleTitle: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: colors.background,
        backgroundColor: colors.primary,
    },
    roleDescription: {
        fontSize: 13,
        fontFamily: 'Inter-Regular',
        color: colors.background,
        backgroundColor: colors.primary,
    },
  });