import React, { Component } from 'react';
import { Text, View, TextInput, Image, Button, TouchableOpacity, StyleSheet} from 'react-native';
import CircleImageView from 'components/CircleImageView';
const onButtonPress = () => {
 // Alert.alert('Button has been pressed!');
};
export default class SignInComponent extends Component {
  constructor(props) {
   super(props);
   this.state = { username: 'Username', password: 'Password' };
 };

  render() {
    return (
      <Image
        style={{width: null, height: null, flex: 1, flexDirection:'column'}}
        resizeMode={Image.resizeMode.cover}
        source={require('assets/images/bg_signin.png')}>
          <View style={{ marginTop:80, flex: 0.3, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'transparent'}}>
          <CircleImageView
            urlImage={require('assets/images/check_red.png')}/>
          </View>
          <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'transparent'}}>
            <Image style={{margin: 20, width:30, height: 30}} source={require('assets/images/user_name.png')}/>
            <TextInput
            style={{marginLeft: 20, height: 40, flexDirection: 'column', borderColor: 'gray', borderWidth: 1}}
            value={this.state.username}/>
            <Image style={{margin: 20, width:30, height: 30}} source={require('assets/images/password.png')}/>
            <TextInput
            style={{marginLeft: 20, height: 40, flexDirection: 'column', borderColor: 'gray', borderWidth: 1}}
            value={this.state.password} secureTextEntry='true'/>
          </View>
          <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'transparent'}}>
            <TouchableOpacity style ={styles.sign_in_button}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
       </Image>
      );
  }
}

const styles = StyleSheet.create({
  sign_in_button: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  }
});
