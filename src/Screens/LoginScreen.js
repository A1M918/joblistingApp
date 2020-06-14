import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
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
    const {container} = styles;
    return (
      <View style={container}>
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
          buttonStyle={{marginTop: 20, marginHorizontal: 15}}
          onPress={this.login}
        />
        <Button
          title="Sign Up"
          buttonStyle={{marginTop: 10, marginHorizontal: 15}}
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(signinRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
