// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const PhoneDetail = () => {
//     // Correctly use useNavigation hook to get the navigation object
//     const navigation = useNavigation();

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>PhoneDetail Screen</Text>
//             {/* Button onPress should be a function */}
//             <Button title='go to chat' onPress={() => navigation.navigate('Chat')} />
//         </View>
//     );
// }

// export default PhoneDetail;


// import React from 'react';
// import { View, Text, Button, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Swiper from 'react-native-swiper';

// const images = [
//     require('../../assets/phone_1.jpg'),
//     require('../../assets/phone_2.jpg'),
//     require('../../assets/phone_3.jpg'),
//     require('../../assets/phone_4.jpg'),
//     require('../../assets/phone_5.jpg'),
//     require('../../assets/phone_6.jpg'),
//     // Add all your image paths here
// ];

// const PhoneDetail = () => {
//     const navigation = useNavigation();

//     return (
//         <View style={styles.container}>
//             <View style={styles.imageContainer}>
//                 <Swiper style={styles.wrapper} showsButtons={false}>
//                     {images.map((image, index) => (
//                         <View key={index} style={styles.slide}>
//                             <Image source={image} style={styles.image} />
//                         </View>
//                     ))}
//                 </Swiper>
//             </View>
//             <View style={styles.contentContainer}>
//                 <Text>PhoneDetail Screen</Text>
//                 <Button title='Go to chat' onPress={() => navigation.navigate('Chat')} />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container:
//     {
//          flex: 1,
//           alignItems: 'center', 
//           justifyContent: 'center'
//         , },

//     imageContainer: {
//        // flex: 1,
//         justifyContent: 'center',
//         //alignItems: 'center',
//        // width: '100%', // Adjust the width as needed
//         alignSelf: 'center', // Center the container horizontally
//         height:'20%',
//         borderWidth:1,
//     },
//     contentContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     wrapper: {},
//     slide: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'stretch',
//     },
// });

// export default PhoneDetail;

import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageSlider from '../components/ImageSlider'; // Import the ImageSlider component
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const images = [
    require('../../assets/phone_1.jpg'),
    require('../../assets/phone_2.jpg'),
    require('../../assets/phone_3.jpg'),
    require('../../assets/phone_4.jpg'),
    require('../../assets/phone_5.jpg'),
    require('../../assets/phone_6.jpg'),
    // Add all your image paths here
];


const Model = 'Samsung-XYZ';
const Price = 1000000;
const Location='PUCIT new campus';
const PhoneNo = '0303-0000000';

const PhoneDetail = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <ImageSlider images={images} /> 
                <View style={styles.contentContainer}>
                    <View style={styles.detailContainer}>
                        <Text style={styles.detailHeading}> Model</Text>
                        <View style={styles.detailCircle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name='cellphone-settings' style={styles.icon} />
                            </View>
                            <Text style={styles.detailText}>{Model}</Text>
                        </View>
                    </View>

                    <View style={styles.detailContainer}>
                        <Text style={styles.detailHeading}> Price</Text>
                        <View style={styles.detailCircle}>
                            <View style={styles.iconContainer}>
                                <Ionicons name='pricetag' style={styles.icon} />
                            </View>
                            <Text style={styles.detailText}>{Price}</Text>
                        </View>
                    </View>

                    <View style={styles.detailContainer}>
                        <Text style={styles.detailHeading}> Location</Text>
                        <View style={styles.detailCircle}>
                            <View style={styles.iconContainer}>
                                <Ionicons name='location-sharp' style={styles.icon} />
                            </View>
                            <Text style={styles.detailText}>{Location}</Text>
                        </View>
                    </View>

                    <View style={styles.detailContainer}>
                        <Text style={styles.detailHeading}> Phone No.</Text>
                        <View style={styles.detailCircle}>
                            <View style={styles.iconContainer}>
                                <FontAwesome5 name='phone' style={styles.icon} />
                            </View>
                            <Text style={styles.detailText}>{PhoneNo}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.ChatIconContainer} onPress={()=>navigation.navigate('Chat')}>
                        <MaterialCommunityIcons name='chat' size={30}/>
                    </TouchableOpacity>
                </View>
            
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,
    },
    contentContainer: {
        marginTop:20,
        alignItems: 'left',
        justifyContent: 'left',
        borderWidth:1,
        width:'90%',
        borderRadius:20,
    },
    detailContainer: {
        flexDirection:'column',
        marginVertical:10,
        padding:10,
       // borderWidth:1,
    },
    detailHeading: {
        fontWeight:'bold',
        fontSize:14,
        color:'black',
    },
    detailText: {
        fontSize:12,
        color:'grey',
    },
    detailCircle: {
        borderRadius:10,
        borderWidth:1,
        padding:5,
        flexDirection:'row',
        alignItems:'flex-start',
    },
    iconContainer: {
        //borderWidth:1,
        marginRight:5,
    },
    ChatIconContainer: {
        //borderWidth:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginRight:30,
        marginTop:2,
        marginBottom:5

    },
});

export default PhoneDetail;
