import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSlider = ({ images }) => {
    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} showsButtons={false}>
                {images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))}
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margintOP:10,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 200, // Set a fixed height for the image slider container
        borderWidth: 1,
        width:'90%',
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default ImageSlider;
