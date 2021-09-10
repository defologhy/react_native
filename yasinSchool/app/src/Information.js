import React, { Component } from 'react'
import { View, ScrollView, Alert, ActivityIndicator } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

export class Information extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      list_information: []
    }
  }
   getdata(token) {
    fetch('https://cv-defitramuhamadyasin.000webhostapp.com/public/api/informasi', {
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
        list_information: resJson,
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
    const {list_information, isLoading} = this.state
    if(list_information.length > 0){
      return (
        <ScrollView>
        <View style={{ flex: 1 }}>
            {
                list_information.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <Avatar source={{uri: 'https://cv-defitramuhamadyasin.000webhostapp.com/public/assets/' + l.foto }} />
                    <ListItem.Content>
                    <ListItem.Title>{l.judul}</ListItem.Title>
                    <ListItem.Subtitle>{l.deksripsi}</ListItem.Subtitle>
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

export default Information
