import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {Input, Button} from 'react-native-elements';

import {connect} from 'react-redux';
import {signUpRequest} from '../store/actions/auth.actions';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConfirmed: false,
    };
  }

  handleChange = (stateObj) => {
    this.setState(stateObj);
  };

  register = () => {
    if (this.state.password !== this.state.password2) {
      return false;
    }
    this.props.signup(this.state);
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Input
          placeholder="Name"
          onChangeText={(name) => this.handleChange({name})}
        />
        <Input
          placeholder="Phone"
          onChangeText={(phone) => this.handleChange({phone})}
        />
        <Input
          placeholder="Email"
          onChangeText={(email) => this.handleChange({email})}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.handleChange({password})}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(password2) => this.handleChange({password2})}
        />
        <Button
          title="Sign Up"
          style={{marginTop: 20, marginHorizontal: 15}}
          onPress={this.register}
        />
      </ScrollView>
    );
  }
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  signup: (payload) => dispatch(signUpRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
