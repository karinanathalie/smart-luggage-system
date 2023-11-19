import * as React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default HomePage = () => {
    const navigation = useNavigation();
    const [selectedButton, setSelectedButton] = useState('HomePage');
    const goToOtherPage = () => {
        navigation.navigate('fillDataBaggage'); 
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView style={styles.headerContainer}>
            {/* <TouchableOpacity onPress={goBack}> */}
            <TouchableOpacity>
                <Image source={require('../assets/images/back.png')} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Manage Booking</Text>
            {/* <TouchableOpacity onPress={openMenu}> */}
            <TouchableOpacity>
                <Image source={require('../assets/images/menu.png')} style={styles.menu} />
            </TouchableOpacity>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false}>
            {/* Flight Information */}
            <View style={styles.flightInformation}>
                <Text style={styles.infoText}>Sat 23 Dec 2023 | CX 719</Text>
                <Text style={styles.infoDestText}>Hong Kong to Los Angeles</Text>
                <Text style={styles.infoText}>Confirmed</Text>
            </View>
            
            <View style={styles.checkInInformation}> 
                <Text style={styles.infoCheckInText}>Check-in opens from 48 hours until 90 minutes before departure</Text>
            </View>

            <View style={styles.bookingInformation}> 
                <View style={styles.textContainer}> 
                    <Image source={require('../assets/images/location.png')} style={styles.location} />
                    <Text style={styles.latestRequirementText}>View the </Text>
                    <Text style={styles.latestRequirementText2}>latest travel requirements of Los Angeles</Text>
                </View>
            </View>

            <View style={styles.bookingReference}> 
                <Text style={styles.latestRequirementText}>Booking reference: 12AB3C</Text>
                <View style={styles.justifyInfo}> 
                    <Text style={styles.timeText}>12:15</Text>
                    <Text style={styles.durationText}>12h 40 m</Text>
                    <Text style={styles.timeText}>20:55</Text>
                </View>
                <View style={styles.plane}>
                    <Image source={require('../assets/images/plane.png')} />
                    <Image source={require('../assets/images/line.png')} />
                </View>
                <View style={styles.justifyInfo}> 
                    <Text style={styles.dest}>HKG</Text>
                    <Text style={styles.dest}>LAX</Text>
                </View>
                <View style={styles.justifyInfo}> 
                    <Text style={styles.destInfo}>Hong Kong Int'l</Text>
                    <Text style={styles.destInfo}>Los Angeles Int'l</Text>
                </View>
                <View style={styles.justifyInfo}> 
                    <Text style={styles.terminalInfo}>Terminal 1</Text>
                    <Text style={styles.terminalInfo}>Terminal E</Text>
                </View>
                <View style={styles.flightTypeContainer}> 
                    <Text style={styles.flightTypelInfo}>Economy </Text>
                    <Text style={styles.flightWeightInfo}> Light</Text>
                </View>
                <Text style={styles.terminalInfo}>Airbus Industrie A330 - 1000</Text>
                <Text style={styles.latestUpdateInfo}>Latest updated: 04 Nov, 14:35 (GMT +8)</Text>
            </View>


            {/* Passenger */}
            <Text style={styles.titleText}>Passenger</Text>

            <View style={styles.passengerInfoWallet}> 
                <View style={styles.passengerInfo}> 
                    <Text style={styles.passengerType}>Green</Text>
                    <View style={styles.justifyInfo}> 
                        <Image source={require('../assets/images/profile.png')} style={styles.passengerProfile}/>
                        <Text style={styles.passengerName}>Mr John Smith</Text>
                    </View>
                </View>
            </View>

            <View style={styles.justifyInfo}> 
                <View style={styles.justifyInfoPoints}> 
                    <Text style={styles.pointsTitleText}>Status Points</Text>
                    <Image source={require('../assets/images/info.png')} style={styles.infoIcon}/>
                </View>
                <Text style={styles.pointsMilesText}>8</Text>
            </View>

            <View style={styles.justifyInfoMilesPoints}> 
                <View style={styles.justifyInfoPoints}> 
                    <Text style={styles.pointsTitleText}>Asia Miles</Text>
                    <Image source={require('../assets/images/info.png')} style={styles.infoIcon}/>
                </View>
                <View style={styles.justifyInfoPoints}> 
                    <Image source={require('../assets/images/asiaMiles.png')} style={styles.asiaMilesIcon}/>
                    <Text style={styles.pointsMilesText}>888</Text>
                </View>  
            </View>

            {/* Check In Properties */}
            <View style={styles.propertiesReference}> 
                <View style={styles.justifyInfoProperties}> 
                    <Image source={require('../assets/images/seat.png')} style={styles.propertiesIcon}/>
                    <View style={styles.properties}>
                        <Text style={styles.propertiesType}>SEAT</Text>
                        <Text style={styles.propertiesText}>Purchase a seat now</Text>
                    </View>
                    <Image source={require('../assets/images/next.png')} style={styles.nextIcon}/>
                </View>

                <Image source={require('../assets/images/lineProperties.png')}/>

                <View style={styles.justifyInfoProperties}> 
                    <Image source={require('../assets/images/meal.png')} style={styles.propertiesIcon}/>
                    <View style={styles.properties}>
                        <Text style={styles.propertiesType}>MEAL</Text>
                        <Text style={styles.propertiesMeal}>Standard meal</Text>
                    </View>
                    <Text style={styles.propertiesConfirmed}>Confirmed</Text>
                    <Image source={require('../assets/images/next.png')} style={styles.nextIconMeal}/>
                </View>

                <Image source={require('../assets/images/lineProperties.png')}/>

                <TouchableOpacity onPress={goToOtherPage}>
                <View style={styles.justifyInfoProperties}> 
                    <Image source={require('../assets/images/briefcase.png')} style={styles.propertiesIcon}/>
                    <View style={styles.properties}>
                        <Text style={styles.propertiesType}>SMART LUGGAGE SYSTEM</Text>
                        <Text style={styles.propertiesText}>Fill baggage info now</Text>
                    </View>
                    <Image source={require('../assets/images/next.png')} style={styles.nextIcon}/>
                </View>
                </TouchableOpacity>
            </View>

            <View style={styles.justifyNoteInfo}> 
                <Text style={styles.noteText}>Special note on service availability</Text>
                <Image source={require('../assets/images/info.png')} style={styles.infoIcon}/>
            </View>

            {/* Forms Properties */}
            <View style={styles.frequentFlyerReference}> 
                <View style={styles.justifyInfoProperties}> 
                    <Image source={require('../assets/images/planeDiagonal.png')} style={styles.propertiesIcon}/>
                    <View style={styles.properties}>
                        <Text style={styles.propertiesType}>FREQUENT FLYER PROGRAMME</Text>
                        <Text style={styles.propertiesText}>Cathay</Text>
                    </View>
                    <Image source={require('../assets/images/next.png')} style={styles.nextIcon}/>
                </View>
            </View>

            <View style={styles.justifyNoteInfo}> 
                <Text style={styles.note2Text}>Please ensure you complete the necessary forms prior to arriving at the airport so that your airport experience is a smooth one.</Text>
            </View>

            </ScrollView>
        </View>
        
    )
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
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
    infoText:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5,
        color: colors.HomePagebackground,
    },
    infoDestText:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 26,
        color: colors.background,
    },
    flightInformation:{
        padding: 15,
        borderWidth: 1,
        marginTop: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    infoCheckInText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        lineHeight: 20,
        color: colors.greyDark,
    },
    checkInInformation: {
        padding: 15,
        borderWidth: 1,
        marginBottom: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: colors.green,
        borderColor: colors.green,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    latestRequirementText:{
        flexDirection: 'row',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        lineHeight: 20,
        color: colors.greyDark,
    },
    latestRequirementText2:{
        flexDirection: 'row',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        lineHeight: 20,
        color: colors.primary,
    },
    bookingInformation :{
        marginHorizontal: 10,
        padding: 15,
        borderWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: colors.yellow,
        borderColor: colors.yellow,
    },
    bookingReference :{
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: colors.white,
        borderColor: colors.white,
    },
    justifyInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    timeText:{
        marginTop: 15,
        marginBottom: 10,
        fontFamily: 'Inter-Regular',
        fontSize: 26,
        color: colors.grey,
    },
    durationText:{
        flexDirection: 'row',
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.grey,
    },
    plane:{
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between',
    },
    dest:{
        flexDirection: 'row',
        fontFamily: 'Inter-SemiBold',
        fontSize: 26,
        color: colors.primary,
    },
    destInfo:{
        flexDirection: 'row',
        fontFamily: 'Inter-Regular',
        marginBottom:2,
        fontSize: 12,
        color: colors.greyDark,
    },
    terminalInfo:{
        flexDirection: 'row',
        fontFamily: 'Inter-Medium',
        fontSize: 12,
        color: colors.greyDark,
    },
    flightTypeContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: colors.green,
        borderColor: colors.green,
    },
    flightTypelInfo:{
        flexDirection: 'row',
        fontFamily: 'Inter-SemiBold',
        fontSize: 14,
        color: colors.primary,
    },
    flightWeightInfo:{
        flexDirection: 'row',
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.primary,
    },
    latestUpdateInfo:{
        marginVertical: 10,
        flexDirection: 'row',
        fontFamily: 'Inter-Light',
        fontSize: 10,
        color: colors.greyLight,
    },
    titleText:{
        margin: 20,
        fontFamily: 'Inter-Regular',
        fontSize: 20,
        color: colors.greyDark,
    },
    pointsMilesText: {
        marginRight: 20,
        fontFamily: 'Inter-Regular',
        fontSize: 12,
        color: colors.greyDark,
    },
    pointsTitleText: {
        marginLeft: 20,
        fontFamily: 'Inter-Regular',
        fontSize: 12,
        color: colors.greyDark,
    },
    justifyInfoMilesPoints:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    justifyInfoPoints:{
        flexDirection: 'row',
        marginTop: 2.5,
        alignItems: 'center',
        marginBottom: 10,
    },
    infoIcon:{
        marginLeft: 5,
        width: 15, 
        aspectRatio: 1, 
    },
    asiaMilesIcon:{
        marginRight: 5,
        width: 15, 
        aspectRatio: 1, 
    },
    passengerInfoWallet:{
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        alignContent:'center',
        width: '65%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        borderColor: colors.primary,
        backgroundColor: colors.primary
    },
    passengerInfo:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        alignContent:'center',
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: colors.background,
        borderColor: colors.background,
    },
    passengerName:{
        fontFamily: 'Montserrat-Medium',
        fontSize: 19,
        color: colors.greyLight,
    },
    passengerProfile:{
        width: 30, 
        marginRight: 5,
        aspectRatio: 1, 
    },
    passengerType:{
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.primary,
    },
    justifyInfoProperties:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    propertiesIcon:{
        width: 35, 
        marginTop: 10,
        marginHorizontal: 15,
        marginBottom: 10,
        aspectRatio: 1, 
    },
    propertiesText:{
        fontFamily: 'Inter-Medium',
        fontSize: 15,
        color: colors.primary,
    },
    propertiesType:{
        fontFamily: 'Inter-Regular',
        fontSize: 11,
        color: colors.greyLight,
    },
    propertiesMeal:{
        fontFamily: 'Inter-Medium',
        fontSize: 15,
        color: colors.greyLight,
    },
    propertiesConfirmed:{
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.greyLight,
        marginLeft: 'auto',
    },
    nextIcon: {
        width: 35,
        marginLeft: 'auto',
        marginTop: 10,
        marginBottom: 10,
        aspectRatio: 1,
    },
    nextIconMeal: {
        width: 35,
        marginTop: 10,
        marginBottom: 10,
        aspectRatio: 1,
    },
    propertiesReference :{
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: colors.white,
        borderColor: colors.white,
    },
    frequentFlyerReference :{
        marginTop: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: colors.white,
        borderColor: colors.white,
    },
    justifyNoteInfo:{
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    noteText:{
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.primary,
    },
    note2Text:{
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        color: colors.greyLight,
        marginBottom: 20,
    },
  });