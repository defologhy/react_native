import React, { Component } from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export class Profil extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      nameSess: null,
      alamatSess: null,
      notelpSess: null,
      fotoSess: null,
      profil: {}
    }
  }
  onPressLogout = () => {
    AsyncStorage.removeItem('name');
    AsyncStorage.removeItem('alamat');
    AsyncStorage.removeItem('notelp');

    this.props.navigation.navigate('Login');

  }
  componentDidMount(){
    AsyncStorage.getItem("name")
    .then(value => {
      this.setState({ "nameSess": value });
    })
    .done();
    AsyncStorage.getItem("alamat")
    .then(value => {
      this.setState({ "alamatSess": value });
    })
    .done();
    AsyncStorage.getItem("notelp")
    .then(value => {
      this.setState({ "notelpSess": value });
    })
    .done();
    AsyncStorage.getItem("foto")
    .then(value => {
      this.setState({ "fotoSess": value });
    })
    .done();
  }
  render(){
    const {nameSess, alamatSess, notelpSess, fotoSess} = this.state;
    
    return (
      <View style={styles.container}>
        {nameSess ? (
          <SafeAreaView>
      
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image 
                source={{uri: 'https://cv-defitramuhamadyasin.000webhostapp.com/public/assets/pendaftar/' + fotoSess}}
                size={80}
              />
              <View style={{marginLeft: 20}}>
                <Title style={[styles.title, {
                  marginTop:15,
                  marginBottom: 5,
                }]}>{nameSess}</Title>
                <Caption style={styles.caption}>Yassin Islamic School</Caption>
              </View>
            </View>
          </View>
    
          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons name="map-marker-radius" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>{alamatSess}</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons name="phone" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>{notelpSess}</Text>
              </View>
            </TouchableRipple>

            <View style={{alignItems:'center', justifyContent:'center'}}>
    
          <TouchableOpacity style={{backgroundColor: 'red', padding: 10, borderRadius: 5, marginTop: 50, width: wp('50%')}} onPress={() => this.onPressLogout() }>
          <Text style={{color: 'white', textAlign: 'center', fontSize: hp('2%')}}>Logout </Text>
        </TouchableOpacity>
        </View>
           
          </View>
        </SafeAreaView>
        ) : (
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>Silahkan Login Untuk Melihat Profil Anda</Text>
    
          <TouchableOpacity style={{backgroundColor: '#fcce03', padding: 10, borderRadius: 5, marginTop: 30, width: wp('50%')}} onPress={() => this.props.navigation.navigate('Login') }>
          <Text style={{color: 'white', textAlign: 'center', fontSize: hp('2%')}}>Login</Text>
        </TouchableOpacity>
        </View>
        )}
      </View>
    )

  }

};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});