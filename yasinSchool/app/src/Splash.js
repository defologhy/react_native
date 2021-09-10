import React, { useEffect } from 'react'
import { StyleSheet, Image, ImageBackground } from 'react-native'

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('Home');
        }, 3000)
    }, [navigation]);

    return (
       <ImageBackground style={styles.background}>
           <Image source={require('./assets/logo.png')} style={styles.image}/>
       </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    image: {
        width:150,
        height:150
    }
})
