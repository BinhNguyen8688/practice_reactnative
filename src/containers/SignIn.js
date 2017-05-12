import React, { Component } from 'react';
import { Text, View, TextInput, Image, Button, TouchableOpacity, StyleSheet} from 'react-native';
import CircleImageView from 'components/CircleImageView';
import { connect } from 'react-redux';
import loginAsync from 'redux/signin-action-creator';
// import { Field, reduxForm } from 'redux-form';

const onButtonPress = () => {
 // Alert.alert('Button has been pressed!');
};
export class SignInComponent extends Component {
  constructor(props) {
   super(props);
   this.state = {
     username: '',
     password: '' };
   //this.handleSignIn = this.handleSignIn.bind(this);
  };
  handleSignIn = () => {
     this.props.login({username: this.state.username, password: this.state.password});
  }
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
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'transparent'}}>
              <Image style={{margin: 10, width:30, height: 30}} source={require('assets/images/user_name.png')}/>
              <TextInput
              style={{marginLeft: 10, height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}/>
            </View>
            <View style={{marginTop:20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent'}}>
              <Image style={{margin: 10, width:30, height: 30}} source={require('assets/images/password.png')}/>
              <TextInput
              style={{marginLeft: 10, height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
              value={this.state.password}
              onChangeText={(password) => this.setState({password})} secureTextEntry='true'/>
            </View>
            <View style={{flex: 1, margin:20, flexDirection:'column', alignItems: 'flex-end', backgroundColor: 'transparent'}}>
              <Text style={{color:'white'}}>Forgot password</Text>
            </View>
          </View>
          <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'transparent'}}>
            <TouchableOpacity style ={styles.sign_in_button} onPress={this.handleSignIn}>
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

function mapStateToProps(state) {
  return {
    user: state.LogInReducer.user,
    error: state.LogInReducer.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (credentials) => {
      dispatch(loginAsync(credentials));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
