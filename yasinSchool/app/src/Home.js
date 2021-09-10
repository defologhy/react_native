import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pendaftar from './Pendaftar';
import Profil from './Profil';
import Information from './Information';
import { SliderBox } from 'react-native-image-slider-box';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();
const images = [
  require('./assets/logo.png'),
  require('./assets/slider1.jpg'),
  require('./assets/slider2.jpg'),
  require('./assets/slider4.jpg'),
  require('./assets/slider5.jpg')
]

function thisContent({ navigation: { navigate } }){
  return (
    <View style={{flex:1}}>

    <SliderBox images={images} 
      sliderBoxHeight={250}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      dotColor="green"
      inactiveDotColor="#90A4AE"
      paginationBoxVerticalPadding={20}
      autoplay
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
      paginationBoxStyle={{
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        paddingVertical: 10
      }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: "rgba(128, 128, 128, 0.92)"
      }}
      ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 5}}
      imageLoadingColor="#2196F3"
    />
   <View style={{ flex: 2, flexDirection:'row' }}>

   <TouchableOpacity onPress={()=> { navigate('Pendaftaran') }}>
        <View style={{ height:hp('20%'), width:wp('43%'), backgroundColor: 'green', borderRadius: 10, overflow: 'hidden', marginTop:25, marginLeft: 16, alignItems:'center'}}>
          <MaterialCommunityIcons name="account" size={89} color='white' style={{marginTop:5}}/>
          <Text style={{
              fontFamily:'Times New Roman',
              color:'white',
              fontSize:hp('2.5%'),
              marginTop:15
              }}>Pendaftaran</Text>

        </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> { navigate('Pendaftar') }}>
      <View style={{ height:hp('20%'), width:wp('43%'), backgroundColor: 'green', borderRadius: 10, overflow: 'hidden', marginTop:25, marginLeft: 16, alignItems:'center'}}>
      <MaterialCommunityIcons name="file" size={70} color='white' style={{marginTop:15}}/>
      <Text style={{
          fontFamily:'Times New Roman',
          color:'white',
          fontSize:hp('2.5%'),
          marginTop:25
          }}>Data Pendaftar</Text>
          
      </View>
    </TouchableOpacity>
  
  </View>

      <View style={{ flex: 3, flexDirection:'column' }}>
    <TouchableOpacity onPress={()=> { navigate('Informasi') }}>
      <View style={{ height:hp('20%'), width:wp('90%'), backgroundColor: '#fcce03', borderRadius: 10, overflow: 'hidden', marginTop:39, marginLeft: 16, alignItems:'center'}}>
      <MaterialCommunityIcons name="information" size={80} color='white'/>
      <Text style={{
          fontFamily:'Times New Roman',
          color:'white',
          fontSize:hp('2.5%'),
          marginTop:20
          }}>Informasi</Text>
      </View>
    </TouchableOpacity>

      </View>
        
    </View>
    
  );
}

export class Home extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'green',
      }}>
        <Tab.Screen name="Beranda" component={thisContent} 
          options={{ headerShown: true,
                    headerStyle: {
                      backgroundColor: 'green',
                      
                    },
                    headerTitleAlign:'center',
                    headerTintColor: '#fff',
                   tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ) 
        }}/>
        <Tab.Screen name="Pendaftar" component={Pendaftar}
          options={{ headerShown: true,
                    headerStyle: {
                      backgroundColor: 'green',
                      
                    },
                    headerTitleAlign:'center',
                    headerTintColor: '#fff',
                   tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-child" color={color} size={size} />
                  ) 
        }}/>
          <Tab.Screen name="Informasi" component={Information}
          options={{ headerShown: true,
                    headerStyle: {
                      backgroundColor: 'green',
                      
                    },
                    headerTitleAlign:'center',
                    headerTintColor: '#fff',
                   tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="information" color={color} size={size} />
                  ) 
        }}/>
        <Tab.Screen name="Profil" component={Profil}
          options={{ headerShown: true,
                    headerStyle: {
                      backgroundColor: 'green',
                      
                    },
                    headerTitleAlign:'center',
                    headerTintColor: '#fff',
                   tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ) 
        }}/>
      </Tab.Navigator>
    )
  }
}

export default Home