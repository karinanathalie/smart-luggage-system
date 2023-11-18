import * as React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import homePageButtonData from '../assets/data/homePageButtonData';
import activitiesData from '../assets/data/activitesData';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default TransactionPage = () => {
    const navigation = useNavigation();
    const [selectedButton, setSelectedButton] = useState('TransactionPage');
    const handleButtonPress = (title) => {
        setSelectedButton(title);
            if (title === 'Home') {
                navigation.navigate('HomePage');
            } else if (title === 'Job Match') {
                navigation.navigate('JobMatchPage');
            } else if (title === 'Migrabot') {
                navigation.navigate('MigrabotPage');
            } else if (title === 'Transaction') {
                navigation.navigate('TransactionPage');
            } else if (title === 'Account') {
                navigation.navigate('AccountPage');
            }
        };

    return (
        <View style={styles.container}>
        {/* Title */}
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Transaction</Text>
            <View style={styles.filterContainer}>
                <Text style={styles.filter}>Filter</Text>
                <Image source={require('../assets/images/filter.png')} style={styles.filterImage}/>
            </View>
        </View>
       

        {/* Button Options */}
        <View style={styles.financialService}>
                <View style={styles.FSButton}>
                    <Text style={styles.FSText}>All</Text>
                </View>
                <View style={styles.FSButton}>
                    <Text style={styles.FSText}>Outgoing</Text>
                </View>
                <View style={styles.FSButton}>
                    <Text style={styles.FSText}>Incoming</Text>
                </View>
            </View>

        {/* Transaction Data
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.financialService}>
            <Text style={styles.categoriesText}>Activities</Text>
            {activitiesData.map((data) => (
                <View key={data.id} style={styles.activitiesLine}>
                <Image source={data.image} style={styles.activitiesImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.activitiesText}>{data.title}</Text>
                    <Text style={styles.dateText}>{data.data}</Text>
                </View>
                {data.incomingFunds && (
                    <Text style={styles.incomingFunds}>{data.description}</Text>
                )}
                {data.outcomingFunds && (
                    <Text style={styles.outcomingFunds}>{data.description}</Text>
                )}
                </View>
            ))}
        </View>
        </ScrollView> */}


        {/* Home Button */}
        <View style={styles.homeButtonContainer}>
                {homePageButtonData.map((data) => (
                <TouchableOpacity
                    key={data.id}
                    style={styles.homeButton}
                    onPress={() => handleButtonPress(data.title)}
                >
                        <Image
                            source={data.image}
                            style={[styles.homeButtonImage]}
                        />
                        <Text
                            style={[
                                styles.homeButtonText,
                                data.selected ? styles.selectedText : null, 
                            ]}
                        >
                            {data.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        <Image source={require('../assets/images/MigraBot.png')} style={styles.MigraBotImage}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
      },
    title: {
        flexDirection: 'row', 
        fontSize: 29,
        fontFamily: 'Poppins-Bold',
        alignItems: 'center',
        marginLeft: 20,
        paddingHorizontal: 10,
        color: colors.primary,
    },
    filterContainer:{
        flexDirection: 'row', 
        position: 'absolute',
        right: 0,
        marginRight: 24,
    },
    filter:{
        flexDirection: 'row', 
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        alignItems: 'center',
        marginTop: 7,
        marginRight: 10,
        color: colors.primary,
    },
    filterImage:{
        width: 20,
        height: 18,
        marginTop: 9,
        marginRight: 10,
        paddingHorizontal: 10,
    },
    profileImage:{
        position: 'absolute',
        marginTop: 60,
        right: 0,
        width: 52, 
        height: 50,
        marginRight: 24,
    },
    search: {
        flexDirection: 'row', 
        padding: 10,
        borderWidth: 1,
        borderColor: colors.greyDark,
        borderRadius: 10,
        marginBottom: 12,
        marginTop: 8,
        marginLeft: 25,
        width : 280,
        backgroundColor: colors.greyLight,
    },
    searchText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: colors.greyDark,
    },
    currentBalance:{
        alignSelf: 'center',
        marginBottom: 20,
    },
    financialService:{
        flexDirection: 'row',
        marginLeft: 25,
    },
    categoriesText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        marginBottom: 10,
    },
    homeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        position: 'absolute',
        borderWidth: 1,
        borderColor: colors.greyLight,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.background,
    },
    homeButton: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 70,
        marginTop: 10,
    },
    homeButtonImage: {
        width: 20,
        height: 20,
        marginBottom: 5,
    },
    homeButtonText: {
        fontFamily: 'Inter-Regular',
        fontSize: 12,
        marginBottom: 15,
        color: colors.greyDark,
    },
    customizableContainer: {
        marginBottom:40,
    },
    customizableText: {
        color: colors.background,
    },
    selectedText: {
        color: colors.primary, 
    },
    MigraBotImage:{
        marginBottom: 20,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 30,
    },
    scrollContainer: {
        flexDirection: 'row', 
        alignSelf: 'center',
      },
    FSButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.greyLight,
        backgroundColor: '#FBFBFB',
        paddingTop: 10,
        paddingHorizontal: 20,
        marginTop: 7,
        marginBottom: 20,
        marginRight: 10,
    },
    imageContainer: {
        margin: 5,
    },
    FSText: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        marginBottom: 10,
    },
    activitiesImage:{
        width: 40, 
        height: 40, 
        marginBottom: 10,
    },
    incomingFunds:{
        color: colors.green,
        marginLeft: 82,
        marginTop: 10,
    },
    outcomingFunds:{
        color: colors.red,
        marginLeft: 82,
        marginTop: 10,
    },
    activitiesLine: {
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: colors.greyLight,
    },
    activitiesText: {
        fontFamily: 'Inter-Regular',
        color: '#6E7191',
        marginLeft: 12,
        marginTop: 10,
        fontSize: 15,
    },
    dateText: {
        fontFamily: 'Inter-Regular',
        color: '#808080',
        marginLeft: 12,
        marginTop: 1,
        fontSize: 9,
    },
  });