import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './component/Loader';

export class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false
    }
  }

  onSubmit = (token) => {
    
    if (!this.state.username) {
      alert('Isi Username');
      return;
    }
    if (!this.state.password) {
      alert('Isi Password');
      return;
    }
    this.setState({
      isLoading: true
    })
    
    let body = new FormData();
    body.append('username', this.state.username);
    body.append('password', this.state.password);

    fetch('https://cv-defitramuhamadyasin.000webhostapp.com/public/api/login', {
      method: 'POST',
      body: body,
      headers: {
        'Authorization': token
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false
        })
        
        if (responseJson.message === 'success') {
          AsyncStorage.setItem('name', responseJson.data.name);
          AsyncStorage.setItem('alamat', responseJson.data.alamat);
          AsyncStorage.setItem('notelp', responseJson.data.notelp);
          AsyncStorage.setItem('foto', responseJson.data.foto);

          this.props.navigation.push('Home', { screen: 'Profile' });

        } else {
          
          Alert.alert('Data Tidak Ditemukan');
          
        }
      })
  }
  getvals() { 
    fetch('https://cv-defitramuhamadyasin.000webhostapp.com/public/api/token', {
      "Content-Type": "application/json"
    })  
    .then(res=> {
      return res.json();
    })
    .then(resJson=> {
      return this.onSubmit(resJson.value);
    }).catch(function(error) {
      Alert.alert("No Internet Connection");
    })
  }
  render(){
  return (
    <View style={styles.mainBody}>
      <Loader loading={this.state.isLoading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('./assets/logo.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) =>
                  this.setState({username: text})
                }
                placeholder="Masukan Username"
                placeholderTextColor="#8b9cb5"
                returnKeyType="next"
                underlineColorAndroid="#f000"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) =>
                  this.setState({password: text})
                }
                placeholder="Masukan Password"
                placeholderTextColor="#8b9cb5"
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => this.getvals()}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
  }
};
export default Login;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#fcce03',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  }
});