import * as React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

export default HomePage = () => {
    const navigation = useNavigation();
    const [selectedButton, setSelectedButton] = useState('fillDataBaggage');
    const [numberOfItems, setNumberOfItems] = useState(1);
    const [additionalItems, setAdditionalItems] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const costPerPiece = 703.0;
    const asiaMilesPerBaggage = 200;

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

    const goBack = () => {
        navigation.navigate('HomePage'); 
    };

    const incrementItems = () => {
        setNumberOfItems(numberOfItems + 1);
        setAdditionalItems(additionalItems+ 1);
      };
    
    const decrementItems = () => {
        if (numberOfItems > 0) {
          setNumberOfItems(numberOfItems - 1);
          setAdditionalItems(additionalItems - 1);
        }
      };

      const totalCost = costPerPiece * additionalItems;
      const additionalLabel = additionalItems > 0 ? `HKD ${totalCost.toFixed(2)}` : '';

      const asiaMilesLabel = additionalItems < 0 ? (
        <View style={styles.asiaMilesContainer}>
          <Image source={require('../assets/images/asiaMiles.png')} style={styles.asiaMilesIcon} />
          <Text style={styles.asiaMilesText}>{asiaMilesPerBaggage}</Text>
        </View>
      ) : '';

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView style={styles.headerContainer}>
            <TouchableOpacity onPress={goBack}>
                <Image source={require('../assets/images/back.png')} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Fill Data Baggage</Text>
            {/* <TouchableOpacity onPress={openMenu}> */}
            <TouchableOpacity>
                <Image source={require('../assets/images/menu.png')} style={styles.menu} />
            </TouchableOpacity>
            </SafeAreaView>
            
            {/* Passenger Type */}
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.flightTypeContainer}> 
                    <Text style={styles.flightTypelInfo}>Economy </Text>
                    <Text style={styles.flightWeightInfo}> Light</Text>
            </View>

            <View style={styles.bookingReference}> 
                <Text style={styles.titleText}>Cabin Baggage</Text>
                <Text style={styles.questionText}>What item will you bring?</Text>
                <View style={styles.justifyInfo}>
                    <Image source={require('../assets/images/checkbox.png')} style={styles.checkBox} />
                    <Text style={styles.itemText}>1 Piece of Cabin Luggage</Text>
                </View>
                <View style={styles.justifyInfo}>
                    <Image source={require('../assets/images/checkbox.png')} style={styles.checkBox} />
                    <Text style={styles.itemText}>1 Small Item</Text>
                </View>
                <View style={styles.justifyInfo}>
                    <Image source={require('../assets/images/checkbox.png')} style={styles.checkBox} />
                    <Text style={styles.itemText}>I don’t bring any cabin baggage</Text>
                </View>

                <Text style={styles.questionText}>How many Kg (in total)?</Text>
                <View style={styles.answerBox}>
                    <TextInput
                    style={styles.itemText}
                    placeholder={isFocused ? '' : '7.00 Kg'}
                    placeholderTextColor={colors.greyLight}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    />
                </View>
            </View>

            <View style={styles.bookingReference}> 
                <Text style={styles.titleText}>Check-in Baggage</Text>
                <Text style={styles.questionText}>How many item will you bring?</Text>

                <Image source={require('../assets/images/lineProperties.png')}/>
                <Text style={styles.addLuggageText}>Add and purchase extra baggage up to a maximum of 3 piece(s) per adult</Text>
                <Text style={styles.luggageInfo}>From HKD 703.00/piece</Text>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decrementItems}>
                        <View style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{numberOfItems} Piece(s)</Text>
                    <TouchableOpacity onPress={incrementItems}>
                        <View style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                        </View>
                    </TouchableOpacity>
                    {additionalLabel !== '' && <Text style={styles.additionalLabel}>{additionalLabel}</Text>}
                    {asiaMilesLabel !== '' && <Text style={styles.additionalLabel}>{asiaMilesLabel}</Text>}
                </View>

                <Text style={styles.questionText}>How many Kg (Baggage 1)?</Text>
                <View style={styles.answerBox}>
                    <Text style={styles.itemText}>23 Kg</Text>
                </View>
                <Text style={styles.questionText}>What is the size of the baggage?</Text>
                <View style={styles.answerBox}>
                    <Text style={styles.itemText}>Small (± 57 x 39 x 22 cm)</Text>
                </View>
                <Text style={styles.measure}>Measure with Camera</Text>
            </View>

            <View style={styles.additionalReference}> 
                <View style={styles.justifyInfo}>
                    <Image source={require('../assets/images/infoMenu.png')} style={styles.infoMenu} />
                    <Text style={styles.additionalTitle}>Oversize & Special Items</Text>
                </View>
            </View>
            </ScrollView>

            {additionalLabel !== '' && (
                <View style={styles.bottomContainer}>
                    <View style={styles.justifyInfo}>
                        <Text style={styles.prepaidBagTotalText}>Prepaid Bag Total:</Text>
                        <Text style={styles.prepaidBagTotalValue}>{additionalLabel}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.reviewAndPayButton}>
                            <Text style={styles.reviewAndPayButtonText}>Review and Pay</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            {asiaMilesLabel !== '' && (
                <View style={styles.bottomContainer}>
                    <View style={styles.justifyInfo}>
                        <Text style={styles.prepaidBagTotalText}>Prepaid Bag Total:</Text>
                        <Text style={styles.prepaidBagTotalValue}>{asiaMilesLabel}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.reviewAndPayButton}>
                            <Text style={styles.reviewAndPayButtonText}>Review and Pay</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
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
  flightTypeContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 22,
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
    fontSize: 16,
    color: colors.primary,
},
flightWeightInfo:{
    flexDirection: 'row',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: colors.primary,
},
bookingReference :{
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 20,
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
titleText:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 23,
    color: colors.greyLight,
},
questionText:{
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
    color: colors.primary,
},
justifyInfo:{
    flexDirection: 'row', 
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 5,
},
itemText:{
    fontFamily: 'Montserrat-Regular',
    marginHorizontal: 10,   
    fontSize: 14,
    color: colors.grey,
},
checkBox:{
    marginLeft: 5,
    width: 16,
    aspectRatio: 1,
},
answerBox:{
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '100%',
    marginLeft: 'auto', 
    marginRight: 'auto', 
    borderColor: colors.primary,
},
infoText:{
    fontFamily: 'Montserrat-Regular',
    marginHorizontal: 10,   
    fontSize: 15,
    color: colors.grey,
    marginBottom: 10,
},
addLuggageText:{
    fontFamily: 'Inter-Light',  
    fontSize: 13,
    color: colors.blue,
    marginTop: 5,
},
luggageInfo:{
    fontFamily: 'Inter-Light',  
    fontSize: 13,
    color: colors.greyLight,
    marginTop: 5,
},
quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
},
quantityButton: {
    backgroundColor: colors.blueLight,
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 5,
},
quantityButtonText: {
    color: colors.blue,
    fontSize: 20,
},
quantityText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.grey,
    marginHorizontal: 5,
},
additionalTitle:{
    fontFamily: 'Inter-Medium',  
    fontSize: 16,
    color: colors.primary,
},
infoMenu:{
    marginHorizontal: 5,
    width: 25,
    aspectRatio: 1,
},
additionalReference :{
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    width: '100%',
    alignContent: 'center',
    marginLeft: 'auto', 
    marginRight: 'auto', 
    backgroundColor: colors.white,
    borderColor: colors.stroke,
},
measure:{
    flexDirection: 'row',
    fontFamily: 'Inter-Light',
    marginLeft: 'auto', 
    marginTop: 6,
    fontSize: 13,
    color: colors.blue,
    fontStyle: 'italic', 
    textDecorationLine: 'underline',  
},
additionalLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    marginLeft: 'auto', 
    alignSelf: 'flex-end',
    marginBottom: 7,
    color: colors.greyLight, 
},
asiaMiles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    alignSelf: 'flex-end',
},
bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.stroke,
},
prepaidBagTotalText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: colors.primary,
    marginBottom: 15,
},
prepaidBagTotalValue: {
    fontFamily: 'Inter-SemiBold',
    marginLeft: 'auto', 
    alignSelf: 'flex-end',
    fontSize: 16,
    color: colors.greyLight,
    marginBottom: 10,
    marginRight: 3,
},
reviewAndPayButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
},
reviewAndPayButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: colors.white,
},
asiaMilesContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
},
asiaMilesIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
},
asiaMilesText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: colors.greyLight,
},
})
