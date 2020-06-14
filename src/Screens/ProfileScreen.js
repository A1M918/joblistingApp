import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'react-native-elements';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadUserData();
  }

  loadUserData = async () => {
    const user = await AsyncStorage.getItem('user');
    this.setState({user: JSON.parse(user)});
  };

  render() {
    const {container, textGeneralPadding} = style;
    const {user} = this.state;
    console.log('Userf ==== > ', user);
    return user ? (
      <View style={container}>
        <Card style={container} title={user.name}>
          <Text style={textGeneralPadding}>Email: {user.email}</Text>
          <Text style={textGeneralPadding}>Phone: {user.phone}</Text>
        </Card>
      </View>
    ) : (
      <ActivityIndicator />
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textGeneralPadding: {paddingVertical: 5},
  detailsText: {
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10,
  },
});

export default ProfileScreen;
