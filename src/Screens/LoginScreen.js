import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View } from 'react-native'
import {Input, Button} from 'react-native-elements';
import {signinRequest} from '../store/actions/auth.actions.js';

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    this.props.login(this.state);
  };

  handleChange = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <View>
        <Input
          placeholder="Email"
          onChangeText={(email) => this.handleChange({email})}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.handleChange({password})}
        />

        <Button
          title="Login"
          style={{marginTop: 20, marginHorizontal: 15}}
          onPress={this.login}
        />
        <Button
          title="Sign Up"
          style={{marginTop: 10, marginHorizontal: 15}}
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(signinRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
