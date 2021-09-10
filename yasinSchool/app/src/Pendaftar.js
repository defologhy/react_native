import React, { Component } from 'react'
import { View, ScrollView, ActivityIndicator, Alert } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

export class Pendaftar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isLoading: true,
          list_pendaftar: []
        }
    }
    getdata(token) {
      fetch('https://cv-defitramuhamadyasin.000webhostapp.com/public/api/users', {
        headers:{
          "Content-Type": "application/json",
          "Authorization": token
        }
      })  
      .then(res=> {
        return res.json();
      })
      .then(resJson=> {
        return this.setState({
          list_pendaftar: resJson,
          isLoading: false
        })
      }).catch(function(error) {
        Alert.alert("No Internet Connection");
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
        return this.getdata(resJson.value);
      }).catch(function(error) {
        Alert.alert("No Internet Connection");
      })
    }
    componentDidMount() {
      this.getvals();
  }
    render() {
      const {isLoading, list_pendaftar} = this.state;
      if(list_pendaftar.length > 0){
        return (
          <ScrollView>
          <View style={{ flex: 1 }}>
              {
                  list_pendaftar.map((l, i) => (
                  <ListItem key={i} bottomDivider>
                      <Avatar source={{uri: 'https://cv-defitramuhamadyasin.000webhostapp.com/public/assets/pendaftar/' + l.foto}} />
                      <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                      <ListItem.Subtitle>Alamat: {l.alamat}</ListItem.Subtitle>
                      </ListItem.Content>
                  </ListItem>
                  ))
              }
          </View>
          </ScrollView>
        )
      }else{
        return (
          <View style={{ flex: 1 , justifyContent:'center', alignItems:'center'}}>
              {isLoading && <ActivityIndicator size={'large'} color={"green"} />}
          </View>
        )
      }

    }
}

export default Pendaftar
