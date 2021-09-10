import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert, TextInput, ScrollView, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as ImagePicker from 'react-native-image-picker';
import Loader from './component/Loader';

const optionsUpload = {
  title: 'Pilih Opsi',
  takePhoto: 'Ambil Foto Dari Kamera',
  chooseFromGaleri: 'Pilih Foto Dari Galeri',
};

export default class Pendaftaran extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nis: '',
      name: '',
      jk: '',
      agama: '',
      alamat: '',
      notelp:'',
      jurusan:'',
      username:'',
      password:'',
      sourcepic: require('./assets/default-image.png'),
      pic: null,
      sourceberkas: require('./assets/default-image.png'),
      berkas: null,
      isLoading: false
    };
  }
  optionForUpload = () => {
    ImagePicker.launchImageLibrary(optionsUpload, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image Picker Error: ', response.errorMessage);
      } else {
        let source = {uri: response.assets[0].uri};
        // display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          sourcepic: source,
          pic: response.assets,
        });
      }
    });
  };
  optionForUploadberkas = () => {
    ImagePicker.launchImageLibrary(optionsUpload, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image Picker Error: ', response.errorMessage);
      } else {
        let source = {uri: response.assets[0].uri};
        // display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          sourceberkas: source,
          berkas: response.assets,
        });
      }
    });
  };
  getvals() { 
    this.setState({
      isLoading: true
    })
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
  onSubmit = (token) => {

    if(this.state.nis && this.state.name && this.state.alamat  && this.state.notelp  && this.state.username  && this.state.password && this.state.pic && this.state.berkas) {
      
      const PendaftarData = {
        nis: this.state.nis,
        name: this.state.name,
        jk: this.state.jk,
        agama: this.state.agama,
        alamat: this.state.alamat,
        notelp: this.state.notelp,
        jurusan: this.state.jurusan,
        username: this.state.username,
        password: this.state.password,
        pic: this.state.pic,
        berkas: this.state.berkas,
        sourcepic: this.state.sourcepic,
        sourceberkas: this.state.sourceberkas
      }
      
      let body = new FormData();
      body.append('nis', PendaftarData.nis);
      body.append('name', PendaftarData.name);
      body.append('jk', PendaftarData.jk);
      body.append('agama', PendaftarData.agama);
      body.append('alamat', PendaftarData.alamat);
      body.append('notelp', PendaftarData.notelp);
      body.append('jurusan', PendaftarData.jurusan);
      body.append('username', PendaftarData.username);
      body.append('password', PendaftarData.password);
      body.append("foto", {
        file: PendaftarData.pic[0],
        type: PendaftarData.pic[0].type,
        uri: PendaftarData.sourcepic.uri,
        name: PendaftarData.pic[0].fileName
      });
      body.append("berkas", {
        file: PendaftarData.berkas[0],
        uri: PendaftarData.sourceberkas.uri,
        type: PendaftarData.berkas[0].type,
        name: PendaftarData.berkas[0].fileName
      });
      
      fetch('https://cv-defitramuhamadyasin.000webhostapp.com/public/api/users/add',{ 
        method: 'POST',
        headers:{
            'Authorization': token
            },
        body: body
      //   JSON.stringify({
      //     foto: {
      //         file: PendaftarData.pic[0],
      //         type: PendaftarData.pic[0].type,
      //         uri: PendaftarData.sourcepic.uri,
      //         name: PendaftarData.pic[0].fileName
      //     }
      // })
      })
        .then((response) => response.json())
        .then((responseJson) => { 
          this.setState({isLoading: false})
          console.log("response " +JSON.stringify(responseJson))
        })
        .catch((e) => console.log(e))
        .done()

        this.props.navigation.navigate('Pendaftar');

    }else {
      Alert.alert('Error', 'Semua Kolom Wajib Di Isi');
    }
    
  };


  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <Loader loading={this.state.isLoading} />
        <Text style={styles.label}>NIS</Text>
        <TextInput style={styles.textInput} placeholder="NIS" 
        onChangeText={(text) => this.setState({nis: text})}/>

        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput style={styles.textInput} placeholder="Nama Lengkap"
        onChangeText={(text) => this.setState({name: text})}/>

        <Text style={styles.label}>Jenis Kelamin</Text>
        <Picker
          selectedValue={this.state.jk}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({jk: itemValue})
          }>
          <Picker.Item label="-" value="-" />
          <Picker.Item label="Laki-Laki" value="Laki-Laki" />
          <Picker.Item label="Perempuan" value="Perempuan" />
        </Picker>

        <Text style={styles.label}>Agama</Text>
        <Picker
          selectedValue={this.state.agama}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({agama: itemValue})
          }>
          <Picker.Item label="-" value="-" />
          <Picker.Item label="Islam" value="Islam" />
          <Picker.Item label="Kristen" value="Kristen" />
        </Picker>

        <Text style={styles.label}>Alamat</Text>
        <TextInput
          style={styles.textInput}
          numberOfLines={4}
          placeholder="Alamat"
          onChangeText={(text) => this.setState({alamat: text})}/>

        <Text style={styles.label}>No HP</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          placeholder="No Hp" 
          onChangeText={(text) => this.setState({notelp: text})}/>

        <Text style={styles.label}>Jurusan</Text>
        <Picker
          selectedValue={this.state.jurusan}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({jurusan: itemValue})
          }>
          <Picker.Item label="-" value="-" />  
          <Picker.Item label="Fiqih" value="Fiqih" />
          <Picker.Item label="Tahfidz" value="Tahfidz" />
        </Picker>

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(text) => this.setState({username: text})}/>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Password" 
          onChangeText={(text) => this.setState({password: text})}/>

        <Image
          source={this.state.sourcepic}
          style={{width: wp('80%'), height: hp('30%'), margin: 10}}
        />

        <TouchableOpacity
          style={{backgroundColor: 'green', margin: 10, padding: 10}}
          onPress={this.optionForUpload}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Upload Foto</Text>
        </TouchableOpacity>

        <Image
          source={this.state.sourceberkas}
          style={{width: wp('80%'), height: hp('30%'), margin: 10}}
        />

        <TouchableOpacity
          style={{backgroundColor: 'green', margin: 10, padding: 10}}
          onPress={this.optionForUploadberkas}>
          <Text style={{color: '#fff', textAlign:'center'}}>Upload Berkas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tombol} onPress={() => this.getvals()}>
          <Text style={styles.textTombol}>Daftar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  tombol: {
    backgroundColor: '#fcce03',
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  textTombol: {
    color: 'white',
    textAlign: 'center',
    fontSize: hp('2%'),
  },
  label: {
    fontSize: hp('2%'),
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
