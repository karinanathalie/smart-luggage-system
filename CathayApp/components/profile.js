import * as React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default Home = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.navigate('fillDataBaggage'); 
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView style={styles.headerContainer}>
            <TouchableOpacity onPress={goBack}>
                <Image source={require('../assets/images/back.png')} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Profile</Text>
            {/* <TouchableOpacity onPress={openMenu}> */}
            <TouchableOpacity>
                <Image source={require('../assets/images/menu.png')} style={styles.menu} />
            </TouchableOpacity>
            </SafeAreaView>

            {/* Name */}
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <Image source={require('../assets/images/palm.jpeg')} style={styles.palm} />
                <View style={styles.overlayContent}>
                    <Text style={styles.titleText}>John Smith</Text>
                    <View style={styles.justifyInfo}>
                        <Text style={styles.type}>Green</Text>
                        <Text style={styles.number}>12345678901</Text>
                    </View>
                    <View style={styles.justifyInfo}>
                        <Text style={styles.editProfile}>Edit Profile</Text>
                        <Image source={require('../assets/images/arrowRight.png')} style={styles.arrow} />
                    </View>
                </View>
            </View>

            {/* Properties */}
            <View style={styles.propertiesInfo}>
                <Text style={styles.properties}>Asia Miles</Text>
                <View style={styles.justifyInfo}>
                    <Text style={styles.moreDetails}>More details</Text>
                    <Image source={require('../assets/images/arrowRight.png')} style={styles.arrowMore} />
                </View>
            </View>

            <View style={styles.justifyInfo}>
                <Image source={require('../assets/images/asiaMiles.png')} style={styles.asiaMilesIcon}/>
                <Text style={styles.points}>2,300</Text>
            </View>

            <View style={styles.justifyInfoPoints}>
                <Text style={styles.expPoints}>You've collected </Text>
                <Text style={styles.totalPoints}>300 Asia Miles </Text>
                <Text style={styles.expPoints}>for being Sustainable</Text>
            </View>

            <Image source={require('../assets/images/lineProperties.png')} style={styles.line}/>

            <View style={styles.propertiesInfo}>
                <Text style={styles.properties}>Status Points</Text>
                <View style={styles.justifyInfo}>
                    <Text style={styles.moreDetails}>More details</Text>
                    <Image source={require('../assets/images/arrowRight.png')} style={styles.arrowMore} />
                </View>
            </View>

            <View style={styles.justifyInfo}>
                <Text style={styles.statusPoints}>23</Text>
            </View>

            <View style={styles.justifyInfoPoints}>
                <Text style={styles.totalPoints}>277 </Text>
                <Text style={styles.expPoints}>More points for status upgrade</Text>
            </View>

            <View style={styles.bookingReference}> 
                <View style={styles.propertiesInfo}>
                    <Text style={styles.propertiesInside}>Benefits</Text>
                    <View style={styles.justifyInfo}>
                        <Text style={styles.moreDetails}>View all</Text>
                        <Image source={require('../assets/images/arrowRight.png')} style={styles.arrowMore} />
                    </View>
                </View>

                <View style={styles.justifyInfoPoints}>
                    <Image source={require('../assets/images/lineGold.png')} style={styles.lineGold}/>
                    <Text style={styles.expPoints}>Please visit the website for a full list of your member benefits.</Text>
                </View>

                <Image source={require('../assets/images/lineProperties.png')} style={styles.line}/>

                <View style={styles.propertiesInfo}>
                    <Text style={styles.propertiesInside}>Transactions</Text>
                    <View style={styles.justifyInfo}>
                        <Text style={styles.moreDetails}>View all</Text>
                        <Image source={require('../assets/images/arrowRight.png')} style={styles.arrowMore} />
                    </View>
                </View>

                <View style={styles.justifyInfoPoints}>
                    <Image source={require('../assets/images/lineGold.png')} style={styles.lineGold2}/>
                    <Text style={styles.expPoints}>Check your transaction history.</Text>
                </View>

            </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      position: 'relative',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 65,
    },
    menu: {
        marginRight: 5,
        right: 0,
    },
    back: {
        marginLeft: 5,
    },
    headerText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 23,
        color: colors.primary,
    },
    palm:{
        marginTop: 10,
        height: 300,
        resizeMode: 'cover',
    },
    overlayContent: {
        ...StyleSheet.absoluteFillObject,
        marginTop: 110,
        height: 150,
        width: '60%',
        backgroundColor: colors.background,
        padding: 20,
      },
    content:{
        justifyContent: 'center',
    },
    titleText:{
        fontFamily: 'Inter-Regular',
        fontSize: 29,
        color: colors.textBlack,
    },
    justifyInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    type:{
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        marginRight: 5,
        color: colors.primary,
    },
    number:{
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.textBlack,
    },
    editProfile:{
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        marginTop: 25,
        color: colors.primary,
    },
    arrow:{
        marginTop: 25,
        marginLeft: 7,
        width: 15, 
        aspectRatio: 1, 
    },
    properties:{
        fontFamily: 'Inter-Regular',
        marginLeft: 20,
        fontSize: 20,
        color: colors.gold,
    },
    arrowMore:{
        marginLeft: 7,
        width: 15, 
        aspectRatio: 1, 
    },
    moreDetails:{
        fontFamily: 'Inter-Regular',
        marginLeft: 'auto',
        fontSize: 14,
        color: colors.primary,
    },
    propertiesInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginTop: 20,
    },
    asiaMilesIcon:{
        marginLeft: 20,
        marginTop: 10,
        width: 20, 
        aspectRatio: 1, 
    },
    points:{
        fontFamily: 'Inter-Regular',
        marginTop: 5,
        marginLeft: 10,
        fontSize: 25,
        color: colors.textBlack,
    },
    line:{
        marginTop: 20,
        width: '110%',
    },
    statusPoints:{
        fontFamily: 'Inter-Regular',
        marginTop: 5,
        marginLeft: 20,
        fontSize: 25,
        color: colors.textBlack,
    },
    justifyInfoPoints:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
    },
    totalPoints:{
        fontFamily: 'Inter-SemiBold',
        fontSize: 14,
        color: colors.primary,
    },
    bookingReference :{
        marginTop: 20,
        paddingBottom: 25,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        width: '100%',
        alignContent: 'center',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: colors.white,
        borderColor: colors.stroke,
    },
    propertiesInside:{
        fontFamily: 'Inter-Regular',
        marginLeft: 20,
        fontSize: 20,
        color: colors.textBlack,
    },
    lineGold:{
        marginTop: 5,
        height: '9%',
        aspectRatio: 0.1, 
        marginRight: 10,
    },
    lineGold2:{
        marginTop: 5,
        height: '5%',
        aspectRatio: 0.2, 
        marginRight: 10,
    }
  });